import React from "react";
import Gulab from "./img/gulab.jpg";
import "../Component/card.css";

function Card() {
  return (
    <div>
      
        <div id="card" >
          <div>
            <img id="image" src={Gulab}></img>
          </div>
          <div id="title">
            <h1>Title of card</h1>
          </div>
          <div id="dis">
            <p>Discription of card</p>
            <button>submit</button>
          </div>
        </div>
      
    </div>
  );
}

export default Card;
