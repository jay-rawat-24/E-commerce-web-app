import React from 'react'
import './Header.css'
import YoutubeSearchedForRoundedIcon from '@mui/icons-material/YoutubeSearchedForRounded';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {Link} from "react-router-dom";
import {useStateValue} from "./StateProvider";
const amazon= new URL("./images/new2.png", import.meta.url); //this for amazon image

function Header() {
  const [{basket}, dispatch] = useStateValue();
  console.log(basket)
  return (
    <div className='header'>
    <Link to="/">
    <img className="header_logo" src={amazon} alt="loading"/>
    </Link>
   
    <div className="header_search">
        <input className= "header_searchInput" type="text"/>
        <YoutubeSearchedForRoundedIcon className="header_YoutubeSearchedForRoundedIcon"/>
    </div>
     <div className="header_nav">
         <div className="header_option">
         <span className="header_optionLineOne">Hello Guest</span>
          <span className='header_optionLineTwo'>Sign In</span>
         </div>
         <div className="header_option">
         <span className="header_optionLineOne">Returns</span>
          <span className='header_optionLineTwo'>& Orders</span>
         </div>
         <div className="header_option">
         <span className="header_optionLineOne">Your</span>
          <span className='header_optionLineTwo'>Pime</span>
         </div>
         <Link to="/checkout">
         <div className="header_optionBasket">
        <ShoppingBasketIcon />
        <span className="header_optionLineTwo header_basketCount">{basket?.length}</span>
         </div>
         </Link>
       </div>
    </div>
  )
}

export default Header