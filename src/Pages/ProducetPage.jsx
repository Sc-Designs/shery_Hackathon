import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { useSelector } from "react-redux";

const ProductPage = () => {
  const { type } = useParams();
  const allCards = useSelector((state) => state.preCardInfoReducer);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    switch (type) {
      case "luxury":
        setCards(allCards.filter((card) => card.category === "luxury"));
        break;
      case "natural":
        setCards(allCards.filter((card) => card.category === "natural"));
        break;
      case "science":
        setCards(allCards.filter((card) => card.category === "science"));
        break;
      case "beauty":
        setCards(allCards.filter((card) => card.category === "beauty"));
        break;
      case "ayurveda":
        setCards(allCards.filter((card) => card.category === "ayurveda"));
        break;
      case "wellness":
        setCards(allCards.filter((card) => card.category === "wellness"));
        break;
      case "deals":
        setCards(allCards.filter((card) => card.category === "deals"));
        break;
      default:
        setCards([]);
        break;
    }
  }, [type, allCards]);

  return (
    <div className="w-full min-h-screen bg-zinc-900 pt-25 pb-10 text-white font-Satoshi px-10">
      <Navbar />
      <h1 className="text-2xl font-bold capitalize mb-4">{type} Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {cards.length === 0 ? (
          <p>No products found.</p>
        ) : (
          cards.map((item, i) => (
            <div
              key={i}
              className="mb-2 bg-black/50 rounded-md flex flex-col group justify-between items-center px-2 py-3">
              <div className="w-[90%] h-70 md:h-50 overflow-hidden">
                <img src={item.pic} alt="" className="group-hover:scale-115 object-center transition-all duration-150" />
              </div>
              <h2 className="text-lg mt-4 text-center">{item.name}</h2>
              <p className="text-sm text-center text-zinc-400">{item.description}</p>
              <Link className="bg-white block w-full mt-4 py-1 text-black text-center rounded-md">{`₹${item.price}/-`}</Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductPage;
