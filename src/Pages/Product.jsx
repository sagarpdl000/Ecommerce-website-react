import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrum/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';

const Product = () => {
  const {All_Product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = All_Product.find((e)=>e.id=== Number(productId))
  return (
    <div>
      <Breadcrum product = {product}/>
      <ProductDisplay product = {product}/>
      
    </div>
  )
}

export default Product