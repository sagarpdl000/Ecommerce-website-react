import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offer from '../Components/OfferBanner/Offer';
import Newcollections from '../Components/NewCollections/Newcollections';

const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offer/>
      <Newcollections/>
      
    </div>
  )
}

export default Shop
