import React, { useState } from "react";
import axios from "axios"
import '../Component/user.css'

function User() {

const [name,setName]=useState('')
const [age,setAge]=useState('')
const [email,setEmail]=useState('')
const [mobile,setMobile]=useState('')


const handleName=(event)=>{
  setName(event.target.value)
}
const handleAge=(event)=>{
    setAge(event.target.value)
  }
  const handleEmail=(event)=>{
    setEmail(event.target.value)
  }
  const handleMobile=(event)=>{
    setMobile(event.target.value)
  }

  const handleApi=(e)=>{
    e.preventDefault();
    console.log(name,email,mobile,age)
    axios.post('http://localhost:3000/CreateUser',{
        name:name,
        age:age,
        email:email,
        mobile:mobile
    })
    .then(result=>{
      
       
        alert("User create succesfully")
    },{name:'',
    age:"",
    email:"",
    mobile:""})
    .catch(err=>{
      console.log(err.response.data.msg)
      alert(err.response.data.msg)
    })
    
  }


  return (
    <div>
      <div id="u">
        <h1>User Registration</h1>
        
      </div>
      <hr></hr>

      <div id="for">
        <form >
          <label >Name</label>
          <br></br>
          <input onChange={handleName} value={name} type="text" placeholder="Enter Name"></input>
          <br></br>
          <br></br>
          <label>Age</label>
          <br></br>
          <input onChange={handleAge} value={age} type="text" placeholder="Enter Age"></input>
          <br></br>
          <br></br>
          <label>Email</label>
          <br></br>
          <input onChange={handleEmail} value={email} type="text" placeholder="Enter Email"></input>
          <br></br>
          <br></br>
          <label>mobile</label>
          <br></br>
          <input onChange={handleMobile} value={mobile} type="text" placeholder="Enter Mobile"></input>
          <br></br>
          <br></br>
          <input id="but" onClick={handleApi} type="submit"></input>
        </form >
      </div>
    </div>
  );
}

export default User;
