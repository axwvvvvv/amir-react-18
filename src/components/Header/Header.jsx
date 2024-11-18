import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <div className="header">
        <div className="container">
            <div className="nav">
                <Link to={'/'}>Home</Link>
                <Link to={'/about'}>About</Link>
                <Link to={'/contacts'}>Contacts</Link>
            </div>
        </div>
    </div>
    </>
  )
}

export default Header