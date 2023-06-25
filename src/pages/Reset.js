import React from 'react'
import './Navbar.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth } from './firebase';
function Reset() {
  const [email,setEmail]=useState("")
  const resetPassword=(e)=>{
    e.preventDefault()
    sendPasswordResetEmail(auth, email)
  .then(() => {
toast.success("Check your Email for Password reset")
  })
  .catch((error) => {
toast.error(error.message)
  });

  }

  return (
    <>
    <ToastContainer/>
   <div class="container" style={{marginTop:"130px",marginLeft:"auto",marginRight:"auto",marginBottom:"50px"}}>
    <div class="row" >
      <div className="one col-12 col-md-6">
        <img src="/images/forgot-pass.jpg" style={{width:"300px",height:"430px",marginLeft:"250px"}} ></img>
      </div>
      <div class="two card col-12 col-md-6" style={{width:"380px",height:"250px",border:"none",boxShadow:"0 14px 28px rgba(0,0,0,0.25),0 10px 10px rgba(0,0,0,0.22)",background:"#f2f2f2",marginTop:"70px"}}
      >
        <form>
          <h2 style={{fontFamily:"robosto",textAlign:"center",color:"blue",fontWeight:"700",fontSize:"30px",marginTop:"20px"}}>Reset Password</h2>
          <input type="text" placeholder='Email' required style={{height:"35px",marginBottom:"16px",width:"80%",marginLeft:"35px"}} value={email} onChange={(e)=>setEmail(e.target.value)}></input>
          <br></br>
          <input type="password" placeholder='Password' required style={{height:"35px",marginBottom:"16px",width:"80%",marginLeft:"35px"}}></input>
          <br></br>
          <button type='button' className='btn btn-primary ' style={{width:"280px",marginLeft:"38px",marginRight:"45px",marginTop:"15px"}} onClick={resetPassword}>Reset</button>
          <br></br>

        </form>
        </div>
    </div>
  </div>

    
    </>
  )
}

export default Reset