import React, { useEffect, useState } from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import {FaPercent, FaSignOutAlt, FaUserCircle} from 'react-icons/fa'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'
import { ToastContainer, toast } from 'react-toastify';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { REMOVE_ACTIVE_USER, SET_ACTIVE_USER } from './authSlice';
import ShowOnLogin from './hiddenLink';

function Mynavbar() {
  const [uname, setUname] = useState("");
  const dispatch=useDispatch()
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
      // console.log(user)
     if(user.displayName == null){
      const u1=user.email.slice(0,-10);
      const uName=u1.charAt(0).toUpperCase()+u1.slice(1);
     // console.log(uName)
      setUname(uName)
     }else{
      setUname(user.displayName)
     }

    

     dispatch(SET_ACTIVE_USER({
     email:user.email,
     userName:user.displayName ? user.displayName : uname,
     userId:user.uid

     }))
        
      } else {
        setUname("");
        dispatch(REMOVE_ACTIVE_USER())
       
      }
    });

  },[]);

  
  const Navigate = useNavigate()
  const logoutUser=(e)=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      toast.success("Logout successfully..")
     Navigate('/login')
    }).catch((error) => {
      // An error happened.
      toast.error(error.message)
    });

  }

  return (
    <>
    <ToastContainer/>
     <Navbar collapseOnSelect expand="lg"  variant="dark" style={{ position: "fixed", width: "100%",backgroundColor:"white"}}>
     <Navbar.Brand href="#" style={{ fontFamily: "cursive", fontSize: "30px", marginLeft: "60px",color:"red" }} className='unavbar'>Tasks <sup><FaPercent/></sup></Navbar.Brand>
      <Navbar.Toggle aria-controls="collapsibleNavbar" style={{backgroundColor:"black",color:"red"}}/>
       <Navbar.Collapse id="collapsibleNavbar" >
        <Nav className="mr-auto "  >
          <Nav.Link eventKey="1" className='fff' href="/" style={{ color: "black", fontSize: "18px", fontFamily: "robosto"}}>Home</Nav.Link>
         <ShowOnLogin> <Nav.Link eventKey="2" href="/Tasks" style={{ color: "black", fontSize: "18px", fontFamily: "robosto" }}>Tasks</Nav.Link></ShowOnLogin>
          <Nav.Link eventKey="3" to="/register" style={{ color: "black", fontSize: "18px", fontFamily: "robosto" }}>Register</Nav.Link>
          <Nav.Link HREF="#" className='loguser'> <FaUserCircle size={20} style={{color:"red"}}/><p style={{color:"black"}}>{uname}</p></Nav.Link> 
          <Nav.Link href="/" className='navlog' onClick={logoutUser}><FaSignOutAlt style={{fontSize:"30px",color:"black"}}/></Nav.Link>
         
          </Nav>
           </Navbar.Collapse>
         
    </Navbar>
    <div style={{marginBottom:"50px"}}>.</div>
    </>
  )
}

export default Mynavbar