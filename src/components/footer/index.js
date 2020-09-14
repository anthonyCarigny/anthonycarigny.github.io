import React from 'react'
import { animateScroll as scroll } from 'react-scroll'
import './index.css'
function Footer(props) {
  const socials = props && props.externalLinks && props.externalLinks.socials
  return (
    <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links noprint">
            {socials &&
              socials.map((social, index) => {
                return (
                  <li key={index}>
                    <a href={social.link}>
                      <em className={social.fontAwesome} />
                    </a>
                  </li>
                )
              })}
          </ul>

          <ul className="copyright">
            <li>&copy; Copyright 2014 CeeVee</li>
            <li>
              Based on a design by{' '}
              <a href="http://www.styleshout.com/" title="Styleshout" target="_blank" rel="noopener noreferrer">
                Styleshout
              </a>
            </li>
          </ul>
        </div>
        <div id="go-top">
          <em className="icon-up-open" onClick={() => scroll.scrollToTop()} />
        </div>
      </div>
    </footer>
  )
}

export default Footer
