import React from 'react';
import { Button } from 'react-bootstrap';
import './Products.css';

const Products = (props) => {
   const { name, img, category, price, ratings } = props.pro;
   return (
      <div className='col-lg-4 mb-4'>
         <div className='products'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>price: {price} tk</p>
            <pre>reating: {ratings}</pre>
            <span> category: {category} </span>
            <Button className='my-3' variant="secondary" onClick={() => props.btnHandeler(props.pro)}>add to cart</Button>
         </div>
      </div>
   );
};

export default Products;