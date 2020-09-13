import React from 'react';
import { animateScroll as scroll } from "react-scroll";
import './index.css'
function Footer() {
  return (
 <footer>
    <div className="row">
       <div className="twelve columns">
          <ul className="social-links noprint">
             <li><a href="https://github.com/anthonyCarigny/"><em className="fa fa-github"></em></a></li>
             <li><a href="https://www.linkedin.com/in/anthony-carigny/"><em className="fa fa-linkedin"></em></a></li>
             <li><a href="skype:anthony.carigny?chat"><em className="fa fa-skype"></em></a></li>
          </ul>

          <ul className="copyright">
             <li>&copy; Copyright 2014 CeeVee</li>
             <li>Based on a design by <a href="http://www.styleshout.com/" title="Styleshout" target="_blank"
                   rel="noopener noreferrer">Styleshout</a></li>
          </ul>
       </div>
       <div id="go-top"><em className="icon-up-open" onClick={() => scroll.scrollToTop()}></em>
       </div>
    </div>
 </footer>);
}

export default Footer;
