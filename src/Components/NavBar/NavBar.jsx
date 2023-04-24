import React from 'react';
import './NavBar.css'
import Logo from '../../assets/images/header-logo-group.png'
import Person from '../../assets/images/Vector.png'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='nav'>
        <div className="container">
            <Link to={`/`}>
              <img src={Logo} alt="Minimal - Shopping" srcset="" className='logo'/> 
            </Link>
            <img src={Person} alt="Person" srcset="" className='icon'/>
        </div>

    </div>
  );
}

export default NavBar;
