import React from 'react'
import { useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import {  GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from './firebase';
import { toast,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import './Navbar.css'

function Home() {
  const Navigate = useNavigate()
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const loginUser=(e)=>{
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
     // const user = userCredential.user;
      toast.success("Login successful")
      Navigate('/')
   
    })
    .catch((error) => {
      toast.error(error.message)
    });
 }




 //login with google
 const provider = new GoogleAuthProvider();
 const googleSignin=(e)=>{
  signInWithPopup(auth, provider)
  .then((result) => {
    //const user = result.user;
    toast.success("Login successful")
    Navigate('/')
    }).catch((error) => {
    toast.error(error.message)

  });
 }

  return (
    <>
    <ToastContainer/>
    <h1 style={{ fontSize:"5vw",marginLeft:"40px",fontFamily:"brushscript",color:"darkblue",marginTop:"70px"}}>The secret of getting ahead <br></br>is getting started. ...</h1>
   <div class="row">
    <div class="col-lg-6">
    <img src='./images/time.jpg' style={{width:"100%",height:"auto"}}/>
    </div>
    <div className='col-lg-6' style={{textAlign:"center"}}>
    <div className="container" style={{marginLeft:"65px",marginBottom:"50px"}}>
    <div className="row" >
      
      <div className="two card col-12 col-md-6" style={{width:"390px",height:"540px",border:"none",boxShadow:"0 14px 28px rgba(0,0,0,0.25),0 10px 10px rgba(0,0,0,0.22)",background:"#f2f2f2"}}
      >
        <form>
          <img src="/images/usertwo.png" className='rounded-circle' style={{width:"160px",height:"160px",marginTop:"20px"}}/>
          <input type="text" placeholder='Email' required className='four' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
          <br></br>
          <input type="password" placeholder='Password' required className='four' value={password} onChange={(e)=>setPassword(e.target.value)}></input>
          <br></br>
          <button type='button' className='btn btn-primary ' style={{width:"250px",marginLeft:"38px",marginRight:"45px",marginTop:"25px"}} onClick={loginUser}>Login</button>
          <br></br>
          <a href='/reset' className='five' style={{marginLeft:"10px"}}>Reset password</a><br></br>
          <p style={{textAlign:"center", marginTop:"12px"}}>---- or ----</p>
          <button type='button' className='btn btn-danger' style={{width:"250px",marginLeft:"38px",marginRight:"45px"}} onClick={googleSignin}><FaGoogle/>  Login with Google</button><br></br>
          <p style={{marginLeft:"30px"}}>don't have an account? <a href='/register' style={{color:"red"}}>register</a> </p>
        </form>
        </div>
    </div>
  </div>
    </div>
   </div>
   
     </>
  )
}

export default Home