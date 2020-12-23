import React from 'react';
import styled from 'styled-components';
import {NavLink, Link} from 'react-router-dom';


const Navigation = () => {
    return (
<NavbarContainer>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to="/"><img src="" alt=""/></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mx-auto">
      <li className="nav-item">
        <NavLink className="nav-link" exact to="/">Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/">Product1</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/">Product2</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/">Product3</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/">Product4</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/">About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/">Contact</NavLink>
      </li>
    </ul>
  </div>
</nav>
        </NavbarContainer>
    )
}


export default Navigation;

const NavbarContainer = styled.div`


nav {
    background: transparent !important;
    text-align: center;
    list-style: none;
    width: 100%;
    
}

ul {
    display: inline-block;
}

li {
    display: inline-block;
   
}

img {
    width: 2.5rem;
}

.nav-link {
    padding: 10px;
    margin: 4px;
    border-color: lightgray;
    border-style: solid;
    border-width: 0 0 1px 0;
    color: black !important;
    &:hover {
        background: lightgray !important;
        color: black !important;
    }
}

.active {
    background: transparent;
    color: black !important;
}

position: sticky;
top: 0;
`;