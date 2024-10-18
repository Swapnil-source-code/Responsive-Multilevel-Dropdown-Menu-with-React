import '../Navbar/Navbar-style.css'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'
import { useState } from 'react';

const Navbar = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleTransitionEnd = (e) => {
    e.target.style.transition = '0.5s';
  };

  const toggleDropdown = (event) => {
    const dropdown = event.target.closest('.dropdown');
    if (dropdown) {
      dropdown.classList.toggle('active');
    }
  };

  return (
    <>
      <div>
        <header className="header">
          <div className="container">
            <div className="logo">
            <Link to="/"><img src={logo} alt="logo" /></Link>
            </div>
            <nav className={`menu ${isOpen ? 'open' : ''}`} onTransitionEnd={handleTransitionEnd} style={{ transition: 'transform 0.5s ease' }}>
              <div className="head">
                <div className="logo"><img src={logo} alt="logo" /></div>
                <button className="close-menu-btn" onClick={toggleMenu}/>
              </div>
              <ul>
                <li><Link to="/home">Home</Link></li>
                <li className="dropdown">
                  <Link to="/">Pages</Link>
                  <i className="fa-solid fa-chevron-down" onClick={toggleDropdown} />
                  <ul className="sub-menu">
                    <li><a href="#"><span>about</span></a></li>
                    <li className="dropdown">
                      <a href="#"><span>team</span></a>
                      <i className="fa-solid fa-chevron-down" />
                      <ul className="sub-menu sub-menu-right">
                        <li><a href="#"><span>team 1</span></a></li>
                        <li><a href="#"><span>team 2</span></a></li>
                        <li><a href="#"><span>team 3</span></a></li>
                        <li><a href="#"><span>team 4</span></a></li>
                        <li><a href="#"><span>team 5</span></a></li>
                      </ul>
                    </li>
                    <li><a href="#"><span>testimonials</span></a></li>
                    <li><a href="#"><span>pricing</span></a></li>
                    <li className="dropdown">
                      <a href="#"><span>elements</span></a>
                      <i className="fa-solid fa-chevron-down" />
                      <ul className="sub-menu sub-menu-right">
                        <li><a href="#"><span>accordion</span></a></li>
                        <li><a href="#"><span>alert</span></a></li>
                        <li className="dropdown">
                          <a href="#"><span>cards</span></a>
                          <i className="fa-solid fa-chevron-down" />
                          <ul className="sub-menu sub-menu-right">
                            <li><a href="#"><span>team 1</span></a></li>
                            <li><a href="#"><span>team 2</span></a></li>
                            <li><a href="#"><span>team 3</span></a></li>
                            <li><a href="#"><span>team 4</span></a></li>
                            <li><a href="#"><span>team 5</span></a></li>
                          </ul>
                        </li>
                        <li><a href="#"><span>carousel</span></a></li>
                        <li><a href="#"><span>table</span></a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li><Link to="/service">Services</Link></li>
                <li className="dropdown">
                  <Link to="/">Portfolio</Link>
                  <i className="fa-solid fa-chevron-down" onClick={toggleDropdown} />
                  <ul className="sub-menu">
                    <li><a href="#"><span>Portfolio mansonry</span></a></li>
                    <li><a href="#"><span>Portfolio list </span></a></li>
                    <li><a href="#"><span>Portfolio details</span></a></li>
                    <li className="dropdown">
                      <a href="#"><span>Portfolio grid</span></a>
                      <i className="fa-solid fa-chevron-down" />
                      <ul className="sub-menu sub-menu-left">
                        <li><a href="#"><span>Portfolio 1</span></a></li>
                        <li><a href="#"><span>Portfolio 2</span></a></li>
                        <li><a href="#"><span>Portfolio 3</span></a></li>
                        <li><a href="#"><span>Portfolio 4</span></a></li>
                        <li><a href="#"><span>Portfolio 5</span></a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/contactus">Contact</Link></li>
              </ul>
            </nav>
            <div className="header-right">
              <button type="button" className="search-btn icon-btn">
                <i className="fa-solid fa-search" />
              </button>
              <button type="button" className="cart-btn icon-btn">
                <i className="fa-solid fa-shopping-cart" />
              </button>
              <button type="button" className="open-menu-btn" onClick={toggleMenu}>
                <span className="line line-1" />
                <span className="line line-2" />
                <span className="line line-3" />
              </button>
            </div>
          </div>
        </header>
      </div>
    </>
  )
}

export default Navbar