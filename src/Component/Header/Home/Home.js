import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Faq from '../Faq/Faq';
import Service from '../Service/Service';

const Home = () => {
   return (
      <div className="home">
         <h1>home</h1>
         <About></About>
         <Service></Service>
         <Contact></Contact>
         <Faq></Faq>
      </div>
   );
};

export default Home;