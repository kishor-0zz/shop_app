import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
   return (
      <div className='header' >
         <nav>
            <ul>
               <li>
                  <NavLink to="/home" activeClassName="selected"> home </NavLink>
                  <NavLink to="/about" activeClassName="selected"> about </NavLink>
                  <NavLink to="/service" activeClassName="selected"> service </NavLink>
                  <NavLink to="/contact" activeClassName="selected"> contact </NavLink>
                  <NavLink to="/faq" activeClassName="selected"> faq </NavLink>
               </li>
            </ul>
         </nav>
      </div>
   );
};

export default Header;