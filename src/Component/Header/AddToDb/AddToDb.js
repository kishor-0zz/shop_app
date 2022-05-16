//add db
const addDb = (id) => {
   const exsist = localStorage.getItem('shopping_cart');
   let addObject = {};
   if (!exsist) {
      addObject[id] = 1;
   }
   else {
      addObject = JSON.parse(exsist);
      if (addObject[id]) {
         let newAdd = addObject[id] + 1;
         addObject[id] = newAdd;
      }
      else {
         addObject[id] = 1;
      }
   }
   localStorage.setItem('shopping_cart', JSON.stringify(addObject))
}

//get Db
const getDb = () => {
   const exsist = localStorage.getItem('shopping_cart');
   return exsist ? JSON.parse(exsist) : {};
}


export { addDb, getDb };