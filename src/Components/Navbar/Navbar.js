import React from 'react';
import style from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={style.nav}>
      <h3 href="/">My Portfolio</h3>
      <div className={style.link}>
        <div className={style.item}>
          <a href="#about">About</a>
        </div>
        <div className={style.item}>
          <a href="#services">Services</a>
        </div>
        <div className={style.item}>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
