import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import { useSelector } from 'react-redux';
import { IoMdAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";
import { decrementItemCount, increaseItemCount, removeItems } from '../Store/Reducers/CartProduct';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import BuyContainer from '../Components/BuyContainer';
import ShinyText from '../Components/ShinyText';

const Cart = () => {
    const carts = useSelector((state) => state.cartReducer);
    const dispatch = useDispatch()
    const [showModal, setshowModal] = useState(false);
    const handleIncrease = (name) => {
      dispatch(increaseItemCount(name));
    };
    const handledecrese = (name) => {
      dispatch(decrementItemCount(name));
    };
    const [Cards, setCards] = useState(carts);
    useEffect(()=>{
        setCards(carts)
    },[carts])

  return (
    <>
      <div className="w-full relative min-h-screen bg-black text-white">
        <Navbar />
        <div className="pt-25 px-5 lg:px-20 grid grid-cols-1 lg:grid-cols-3 gap-4 font-Satoshi">
          {Cards.map((item, i) => (
            <div
              key={i}
              className="bg-zinc-900 rounded-lg font-Satoshi flex flex-col gap-y-1 py-2">
              <div className="px-3 py-3 w-full flex items-center gap-x-2 justify-between ">
                <Link to={`/product-dets/${item.id}`} className="flex gap-x-2">
                  <div className="w-15 h-15 rounded-md overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src={item.pic}
                      alt=""
                    />
                  </div>
                  <div>
                    <h1 className="text-sm">{item.name}</h1>
                    <p>
                      {item.description.length > 10
                        ? item.description.slice(0, 10) + "***"
                        : item.description}
                    </p>
                  </div>
                </Link>
                <div className="flex items-center gap-x-2">
                  <div className="border-1 rounded-full p-1 cursor-pointer">
                    <IoMdAdd onClick={() => handleIncrease(item.name)} />
                  </div>
                  <h1>{item.count.toString().padStart(3, "0")}</h1>
                  <div className="border-1 rounded-full p-1 cursor-pointer">
                    <FiMinus onClick={() => handledecrese(item.name)} />
                  </div>
                </div>
              </div>
              <button
                onClick={() => dispatch(removeItems(item.id))}
                className="text-red-400 cursor-pointer">
                Remove Product
              </button>
            </div>
          ))}
        </div>
        {carts.length === 0 ? (
          <ShinyText
            text="No Product Added in Cart."
            disabled={false}
            speed={4}
            className="custom-class text-2xl md:text-3xl lg:text-2xl ml-10 lg:ml-20"
          />
        ) : (
          <button
            onClick={() => setshowModal(true)}
            className="mx-auto flex items-center mt-10 cursor-pointer transition-all duration-200 hover:bg-amber-500 text-lg bg-amber-300 font-Satoshi text-black px-4 py-1 rounded">
            Buy Now <MdOutlineShoppingCartCheckout />
          </button>
        )}
        {showModal && <BuyContainer items={Cards} fn={setshowModal} />}
      </div>
    </>
  );
}

export default Cart