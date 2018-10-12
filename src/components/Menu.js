import React, { Component } from 'react'
import logo from '../images/logo_sl.jpg'
export class Menu extends Component {
  render() {
    const handleClickScroll = (Scroll) => {
        const element = document.getElementById(`${Scroll}`);
            element.scrollIntoView({behavior: 'smooth'});
    }
    document.addEventListener('DOMContentLoaded', () => {

        // Get all "navbar-burger" elements
        const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
      
        // Check if there are any navbar burgers
        if ($navbarBurgers.length > 0) {
      
          // Add a click event on each of them
          $navbarBurgers.forEach( el => {
            el.addEventListener('click', () => {
      
              // Get the target from the "data-target" attribute
              const target = el.dataset.target;
              const $target = document.getElementById(target);
      
              // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
              el.classList.toggle('is-active');
              $target.classList.toggle('is-active');
      
            });
          });
        } 
    });
    
      
    return (
        <div className="container">
            <nav class="navbar is-fixed-top transparent-menu">
                <div class="navbar-brand">
                    <a class="navbar-item padding-menu" onClick={()=>handleClickScroll("Home")}>
                        <img src={logo} width="40" height="60" />&nbsp;
                        <strong className="font-logo">SecondLight</strong>
                    </a>
                    <div class="navbar-burger"  data-target="navMenuDocumentation" id="navbar-burger">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </div>
                </div>
                <div id="navMenuDocumentation" class="navbar-menu">
                    <div class="navbar-end">
                        <a class="navbar-item" onClick={()=>handleClickScroll("Home")}>
                            <strong className="font-logo">
                                <span className="is-hidden-touch is-hidden-widescreen">Home</span>
                                <span className="is-hidden-desktop-only">Home</span>
                            </strong>
                        </a>
                        <a class="navbar-item" onClick={()=>handleClickScroll("About")}>
                            <strong className="font-logo">
                                <span>About</span>
                            </strong>
                        </a>
                        <a class="navbar-item" onClick={()=>handleClickScroll("Portfolio")}>
                            <strong className="font-logo">
                                <span>Portfolio</span>
                            </strong>
                        </a>
                        <a class="navbar-item" onClick={()=>handleClickScroll("Services")}>
                            <strong className="font-logo">
                                <span>Services</span>
                            </strong>
                        </a>
                        <a class="navbar-item" onClick={()=>handleClickScroll("Contact")}>               
                            <strong className="font-logo">
                                <span>Contact</span>
                            </strong>
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    )
  }
}

export default Menu
