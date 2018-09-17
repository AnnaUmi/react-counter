import React from 'react';

const NavBar = ({ totalCounter }) => {
    return (

        <nav className="navbar navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="#">
                   Counters:  <span className="badge badge-pill badge-secondary">{totalCounter}</span>
                </a>
            </div>
        </nav>
    );
}

export default NavBar;
