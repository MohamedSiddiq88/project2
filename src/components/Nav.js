import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import Context, { MyContext } from '../context/Context';


function Nav(){
  const {profileOf}=useContext(MyContext);
    
    const navigate=useNavigate();

  function signOut(){
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    localStorage.removeItem("token");
    navigate("/login")
}

  return(

    <div  className='navbar navbar-dark bg-dark'>
        <div className='sub-nav'>
        <p onClick={()=>navigate("/")} className='nav-item link'>Home</p>
        <p onClick={()=>navigate("/student")} className='nav-item link'>Student</p>
        <p onClick={()=>navigate("/teacher")} className='nav-item link'>Teacher</p>
        
        </div>
        <div className='sub-nav'>
        <Link to={profileOf=='Student'?'/add':'/addteacher'} className="link"><i class="fa fa-plus" aria-hidden="true"></i> {profileOf}</Link>
        <button type="button" class="btn btn-light nav-item"  onClick={()=>signOut()}>Sign Out</button>
        </div>
        
        
        
      </div>
      );
}
export default Nav
