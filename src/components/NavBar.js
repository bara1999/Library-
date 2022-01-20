import React from 'react';
import logo from '../images/logo.PNG';

const NavBar = () => {


    return (
        <div>
            <header>

                <img  className="nav-item"src={logo}  />
              
                <span className="nav-item">PSEU Librayar System</span>
                  
               
                <a href="../pages/Log">log in</a>
            </header>
        </div>
    )
}

export default NavBar;
