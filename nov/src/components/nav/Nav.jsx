import React from "react";
import "./Nav.css"
function Nav(){
    return(<div>
      <div className="container">
      <div className="box1"><h2><strong>Flex Business Pro</strong></h2>
      <p>Clean and Modern Business Theme</p>
      </div>
      <div className="box2"><a href="" style={{color:"blue"}}>Home</a>
           <a href="">About Us</a>
           <a href=""> Styleguide </a>
           <a href="">Blog</a>
           <a href="">Contact Us</a>
           </div>
      </div>
    </div>)
}
export default Nav;