import React from 'react'
import { IoMdCloseCircle } from "react-icons/io";
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { removerAllItem } from '../Store/Reducers/CartProduct';
import { productAdd } from '../Store/Reducers/OrderList';
const BuyContainer = ({items,fn}) => {
    const dispatch = useDispatch()
  return (
    <div className="absolute w-full h-full bg-black/40 top-0 left-0 z-[99999] backdrop-blur-xl">
      <div className="bg-white relative px-3 pt-5 pb-2 w-[90%] rounded-sm top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <IoMdCloseCircle
          onClick={() => fn(false)}
          className="absolute top-2 right-5 text-black text-2xl"
        />
        <h1 className="text-black font-Satoshi mb-4">View Your Product</h1>
        <div className="grid grid-cols-1 md:grids-cols-2 lg:grid-cols-3  gap-2">
          {items.map((items, i) => (
            <div
              key={i}
              className="flex gap-x-2 border-2 items-center rounded-md font-Satoshi border-black p-2 text-black">
              <div className="flex gap-x-4 w-[80%]">
                <div className="w-15 h-15">
                  <img
                    src={items.pic}
                    className="w-full h-full object-cover object-center"
                    alt=""
                  />
                </div>
                <div>
                  <h1>{items.name}</h1>
                  <p>
                    {items.description.length > 10
                      ? items.description.slice(0, 24) + "***"
                      : items.description}
                  </p>
                </div>
              </div>
              <small className="font-bold text-right w-[20%]">
                Quantity : {items.count}
              </small>
            </div>
          ))}
        </div>
        <button
          onClick={() => {
            toast.success("🎉 Order Place Succesfully.")
            fn(false)
            dispatch(productAdd(items))
            dispatch(removerAllItem());
          }}
          className="mx-auto cursor-pointer bg-black px-4 py-1 rounded-lg mt-5 font-Satoshi ">
          Confirm
        </button>
      </div>
    </div>
  );
}

export default BuyContainer