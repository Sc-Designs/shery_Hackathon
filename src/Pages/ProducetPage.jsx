import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../Components/Navbar';

const ProducetPage = () => {
    const {type} = useParams()
  return (
    <div className="w-full min-h-screen bg-zinc-900 pt-20 text-white font-Satoshi px-10">
      <Navbar />
      <h1>{type}</h1>
    </div>
  );
}

export default ProducetPage