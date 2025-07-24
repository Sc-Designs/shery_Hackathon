import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { useSelector } from "react-redux";

const ProductPage = () => {
  const { type } = useParams();
  const allCards = useSelector((state) => state.preCardInfoReducer);
  const [cards, setCards] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // Step 1: search state

  useEffect(() => {
    let filtered = [];
    switch (type) {
      case "luxury":
      case "natural":
      case "science":
      case "beauty":
      case "ayurveda":
      case "wellness":
      case "deals":
        filtered = allCards.filter((card) => card.category === type);
        break;
      default:
        filtered = [];
        break;
    }

    setCards(filtered);
  }, [type, allCards]);

  const filteredCards = cards.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full min-h-screen bg-zinc-900 pt-25 pb-10 text-white font-Satoshi px-10">
      <Navbar />
      <h1 className="text-2xl font-bold capitalize mb-4">{type} Products</h1>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full md:w-1/2 mb-6 p-2 rounded-md outline-none text-white border-1 border-white/20 placeholder:text-white/50"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {filteredCards.length === 0 ? (
          <p className="text-xl whitespace-nowrap">
            🥹The Products is not available in this time.
          </p>
        ) : (
          filteredCards.map((item, i) => (
            <Link key={i} to={`/product-dets/${item.id}`}>
              <div className="mb-2 bg-black/50 rounded-md flex flex-col group justify-between items-center px-2 py-3">
                <div className="w-[90%] h-70 md:h-50 overflow-hidden rounded-md">
                  <img
                    src={item.pic}
                    alt=""
                    className="group-hover:scale-115 object-center transition-all duration-150"
                  />
                </div>
                <h2 className="text-lg mt-4 text-center">{item.name}</h2>
                <p className="text-sm text-center text-zinc-400">
                  {item.description}
                </p>
                <div className="bg-white block w-full mt-4 py-1 text-black text-center rounded-md">
                  {`₹${item.price}/-`}
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductPage;
