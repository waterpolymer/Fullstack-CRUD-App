import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';

function NavBar(){
  return(
    <ul>
      <li class="left"><Link class="logo" to="/">CRUD</Link></li>
      <li><Link class="item" to="/campuses">Campuses</Link></li>
      <li><Link class="item" to="/students">Students</Link></li>
    </ul>
  )
}

export default NavBar;
