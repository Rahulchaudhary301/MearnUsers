import axios from "axios";
import React, { useState } from "react";
// import "../Component/get.css";
import Gulaboo from "../Component/img/gulab.jpg";
import "../Component/card.css";
import '../Component/get.css'

function GetData() {
  const [data, setData] = useState([]);
  let x = data.length;

  const handleData = () => {
    axios
      .get("http://localhost:3000/getUsers")
      .then((result) => {
        console.log(result.data);
        alert("Data fetch Succesfully");
        setData(result.data.data);
      })

      .catch((err) => console.log(err));
  };

  return (
    <div>
      <>
       <div id="head">
       <h1>Total number of data present on Db is {x}</h1>
       </div>
        <hr></hr>
        <button id="g" onClick={handleData}>get Data</button>
      </>
      <div>
        {data.map((e) => {
          const { name, age, email, mobile } = e;
          return (
            <div id="dil">
              <div id="card">
                <div>
                  <img id="image" src={Gulaboo}></img>
                </div>
                <div id="title">
                  <h1>{name}</h1>
                </div>
                <div id="dis">
                  <p>{mobile}</p>
                  <h2>{age}</h2>
                  <button>submit</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default GetData;
