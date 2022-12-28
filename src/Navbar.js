import React from "react"
export default Navbar;

 function Navbar() {
  return (
    
 <nav>
  <div className="logo">
    <a href="/">Smart Meals</a></div>
    
    <div className="list">
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/">Product</a></li>
      <li><a href="/">Outlet</a></li>
      <li><a href="/">Promo</a></li>
      <li><a href="/">Contact Us</a></li>
    </ul>
    
    </div>
    <div className="images">
    <img src="/img/instagram-seeklogo.com.svg" alt="" />
    <img src="/img/twitter-svgrepo-com.svg" alt="" />
    <img src="/img/youtube-svgrepo-com.svg" alt="" />
    </div>
 </nav>
 
 

  )
}