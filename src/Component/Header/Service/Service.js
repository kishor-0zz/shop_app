import React, { useEffect, useState } from 'react';
import { addDb, getDb } from '../AddToDb/AddToDb';
import Cart from './Cart/Cart';
import Products from './Products/Products';

const Service = () => {
   //main data set
   const [items, setItems] = useState([]);
   //cart add
   const [cart, setCart] = useState([]);

   //main data load
   useEffect(() => {
      fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
         .then(res => res.json())
         .then(data => setItems(data))
   }, [])


   const btnHandeler = (product) => {
      let addCart = []
      addCart = [...cart, product];
      setCart(addCart)
      addDb(product.id)
   }

   useEffect(() => {
      const storeCart = getDb();
      if (items.length) {
         let addGetData = []
         for (const key in storeCart) {
            const matchData = items.find(it => it.id === key)
            if (matchData) {
               matchData.quantity = storeCart[key];
               addGetData.push(matchData);
            }
            setCart(addGetData)
         }
      }




   }, [items]);

   return (
      <div className='container py-5'>
         <div className='row'>
            <div className='col-lg-9'>
               <div className='row '>
                  {
                     items.map(pro => <Products pro={pro} key={pro.id} btnHandeler={btnHandeler}></Products>)
                  }
               </div>

            </div>
            <div className='col-lg-3' >
               <Cart cart={cart} ></Cart>
            </div>
         </div>
      </div>
   );
};

export default Service;