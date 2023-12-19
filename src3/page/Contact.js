import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Contact = () => {
  const navigate = useNavigate();
  const gotoAbout = ()=>{
    navigate("/about")
  }
  return (
    <>
    <div>Contact</div>
    <button>
      <Link to="/">Homepage</Link>
    </button>
    <button onClick={gotoAbout}>
      go to About
    </button>
    </>
    
  )
}

export default Contact