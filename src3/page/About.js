import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate();
  const gotoContact = ()=>{
    navigate("/contact")
  }
  return (
    <>
    <div>About</div>
    <button>
      <Link to="/">Homepage</Link>
    </button>
    <button onClick={gotoContact}>go to Contact</button>
    </>
    
  )
}

export default About