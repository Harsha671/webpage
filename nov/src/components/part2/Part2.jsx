import React from "react";
import "./Part2.css"
function Part2(){
    return(<div>
    <div className="part22">  
        <h1 style={{textAlign:"center",paddingTop:"15px"}}>Our Features</h1>
       <div className="features">
        <div className="features1">
        <i class="fa-solid fa-keyboard" style={{color:"blue", fontSize:"40px", paddingLeft:"230px"}}></i>
            <h3 style={{textAlign:"center",paddingTop:"35px"}}>Fully Responsive</h3>
            <p style={{textAlign:"center",paddingTop:"20px"}} >Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit.  Est soluta esse sapiente aliquid velitadipisci <br /> sint placeat quisquam ex impedit.</p>
            <p style={{color:"blue",textAlign:"center",paddingTop:"10px",paddingBottom:"30px"}}>Read More</p>
        </div>
        <div className="features2">
        <i class="fa-solid fa-person" style={{color:"blue", fontSize:"40px", paddingLeft:"230px"}}></i>
            <h3 style={{textAlign:"center",paddingTop:"35px"}} >Trusted Author</h3>
            <p style={{textAlign:"center",paddingTop:"20px"}}>Lorem ipsum dolor sit amet consectetur adipisicing  <br />elit. Iure, nam id minus soluta tenetur numquam  <br />ex unde quod nisi architecto.</p>
            <p style={{color:"blue",textAlign:"center",paddingTop:"10px", paddingBottom:"30px"}}>Read More</p>
        </div>
        <div className="features3">
        <i class="fa-solid fa-recycle" style={{color:"blue", fontSize:"40px", paddingLeft:"230px", borderRadius:"20px"}}></i>
            <h3  style={{textAlign:"center",paddingTop:"35px"}}>Reusable Elements</h3>
            <p  style={{textAlign:"center",paddingTop:"20px"}}>Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit. Illo, est. Fuga expedita repellendus sequi iste <br /> possimus ipsum non numquam nesciunt?</p>
            <p style={{color:"blue",textAlign:"center",paddingTop:"10px", paddingBottom:"30px"}}>Read More</p>
        </div>
       </div>
    </div>
    </div>)
}
export default Part2;