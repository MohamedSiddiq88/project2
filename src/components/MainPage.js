import React from 'react'
import Nav from './Nav'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


function MainPage({children}) {
const navigate = useNavigate();

  useEffect(() => {
    checkAuthentication();
  }, []);

  const checkAuthentication = () => {
    const isAuthenticated = !!localStorage.getItem('token');
    if (!isAuthenticated) {
      navigate('/login');
    }
  };
  return (
    <div>
      <Nav/>
      <div className='main-page-body'>
        {children}
      </div>
    </div>
  )
}

export default MainPage
