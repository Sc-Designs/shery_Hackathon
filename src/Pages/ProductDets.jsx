import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { FaStar } from "react-icons/fa";
import GlareButton from '../Components/GlareButton';
import ShinyText from '../Components/ShinyText';
import Footer from '../Components/Footer';
import { addProduct } from '../Store/Reducers/CartProduct';
import { toast } from 'react-toastify';

const ProductDets = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const Cards = useSelector(state=> state.preCardInfoReducer)
  const [CardsDets, setCardsDets] = useState({});
 useEffect(() => {
   const filteredCard = Cards.find((card) => String(card.id) === id);
   setCardsDets(filteredCard)
 }, [id, Cards]);
 const customerReview = [
   {
     name: "Suvam Chakraborti",
     verfied: true,
     rating: 4.5,
     text: "This Product is good.",
   },
   {
     name: "Soham Chakraborty",
     verfied: true,
     rating: 2.5,
     text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, voluptatem necessitatibus ullam fugit dicta nostrum accusamus ipsa assumenda odit eius.",
   },
   {
     name: "Asish Chanchalani",
     verfied: false,
     rating: 3.5,
     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, voluptates.",
   },
   {
     name: "Luis Vitor",
     verfied: true,
     rating: 4.5,
     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quia, architecto esse pariatur quibusdam maxime fuga repellendus dolore voluptates cumque porro non quasi quaerat praesentium.",
   },
 ];
  return (
    <div className="bg-black w-full min-h-screen text-white">
      <Navbar />
      <div className="w-full h-full pt-30 px-5 md:px-20 flex flex-col gap-y-10 text-white">
        <div className="flex gap-x-5 lg:gap-x-20 flex-col gap-y-5 md:flex-row">
          <div className=" w-full lg:h-100 lg:w-100 rounded-lg overflow-hidden group">
            <img
              src={CardsDets?.pic}
              className="h-full w-full object-cover object-center group-hover:scale-125 transition-all duration-200"
              alt=""
            />
          </div>
          <div className="flex flex-col justify-end gap-y-5 text-left">
            <h1 className="text-4xl">{CardsDets?.name}</h1>
            <p className="text-xl text-white/50">{CardsDets?.description}</p>
            <p className="flex items-center gap-x-2">
              Rattings : {(Math.random() * 4 + 1).toFixed(2)}
              <FaStar className="text-amber-400" />{" "}
            </p>
            <div className="flex mt-5 gap-x-4">
              <GlareButton>
                <button
                  onClick={() => {
                    dispatch(addProduct(CardsDets));
                    toast.success("🎉 Product Added in Cart.");
                  }}
                  className="px-5 lg:px-0 lg:w-50 py-2 rounded-lg text-lg">
                  ₹{CardsDets?.price}/-
                </button>
              </GlareButton>
              <GlareButton>
                <button
                  onClick={() => {
                    dispatch(addProduct(CardsDets));
                    toast.success("🎉 Product Added in Cart.");
                  }}
                  className="px-5 lg:px-0 lg:w-50 py-2 rounded-lg text-lg">
                  Add to Cart
                </button>
              </GlareButton>
            </div>
          </div>
        </div>
        <div className="px-5">
          <h1 className="font-Placard text-5xl md:text-6xl border-b-1 pb-5">
            Product Description
          </h1>
          <ol
            style={{ listStyleType: "number" }}
            className="flex flex-col gap-y-4 mt-8 mb-3 text-white/50">
            <li>
              <ShinyText
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              incidunt amet sit dolorem quae autem vero nobis dicta perspiciatis
              cum?"
                disabled={false}
                speed={10}
                className="custom-class"
              />
            </li>
            <li>
              <ShinyText
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              quaerat eligendi quo tenetur rem quae."
                disabled={false}
                speed={7}
                className="custom-class"
              />
            </li>
            <li>
              <ShinyText
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              ea, illo eos iure harum dicta nisi tempore, consequatur magnam
              dolor tenetur asperiores animi. Provident suscipit sint hic beatae
              deleniti atque libero. Alias, numquam. Possimus, commodi?"
                disabled={false}
                speed={5}
                className="custom-class"
              />
            </li>
            <li>
              <ShinyText
                text="Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consequuntur, animi facere? Voluptatibus nisi vero id, non
              accusamus, repellendus laborum voluptatem ducimus architecto
              consectetur similique numquam, delectus rem consequatur! Vero
              molestiae velit quo voluptates ex consequuntur, rerum qui iure
              magnam commodi debitis officia asperiores numquam accusantium."
                disabled={false}
                speed={8}
                className="custom-class"
              />
            </li>
          </ol>
        </div>
        <div className="px-5">
          <h1 className="font-Placard text-5xl md:text-6xl border-b-1 pb-5">
            Cutomer Review
          </h1>
          <div className="flex flex-col gap-y-4 mt-8 mb-3 text-white">
            {customerReview.map((item, i) => (
              <div key={i}>
                <h1 className="font-semibold text-xl flex items-start gap-x-2">
                  <span className="flex items-center gap-x-2">
                    <FaStar className="text-white/50" /> {item.rating}
                  </span>{" "}
                  {item.name}{" "}
                  {item.verfied && (
                    <span className="text-sm bg-zinc-800 px-2 rounded-sm">
                      Verifed
                    </span>
                  )}
                </h1>
                <div className="ml-7">
                  <ShinyText
                    text={item.text}
                    disabled={false}
                    speed={Math.floor(Math.random() * 12 + i)}
                    className="custom-class"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductDets