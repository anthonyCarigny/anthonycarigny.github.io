import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-scroll'
import './index.css'
function Header(props) {
  const { t, i18n } = useTranslation()

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  const socials = props && props.externalLinks && props.externalLinks.socials

  return (
    <header id="home">
      <nav className="noprint" id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          {t('header.showNavigation')}
        </a>
        <a className="mobile-btn" href="#nav-wra" title="Hide navigation">
          {t('header.hideNavigation')}
        </a>
        <ul id="nav" className="nav">
          <li>
            <button className="nav-btn" onClick={() => changeLanguage('fr')}>
              <span role="img" aria-label="fr">
                🇫🇷
              </span>
            </button>
          </li>
          <li>
            <button className="nav-btn" onClick={() => changeLanguage('en')}>
              <span role="img" aria-label="en">
                🇬🇧
              </span>
            </button>
          </li>
        </ul>
        <ul id="nav" className="nav">
          <li>
            <Link activeClass="current" to="home" spy={true} smooth={true}>
              {t('header.home')}
            </Link>
          </li>
          <li>
            <Link activeClass="current" to="about" spy={true} smooth={true}>
              {t('header.about')}
            </Link>
          </li>
          <li>
            <Link activeClass="current" to="work" spy={true} smooth={true}>
              {t('header.experience')}
            </Link>
          </li>
          <li>
            <Link activeClass="current" to="education" spy={true} smooth={true}>
              {t('header.education')}
            </Link>
          </li>
        </ul>
      </nav>
      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline">Anthony Carigny</h1>
          <h3
            dangerouslySetInnerHTML={{
              __html: t('header.introduction.title', {
                interpolation: { escapeValue: true },
              }),
            }}
          />
          <h3 className="noprint">
            {t('header.introduction.part1')}{' '}
            <Link activeClass="current" to="about" spy={true} smooth={true}>
              {t('header.introduction.part2')}
            </Link>{' '}
            {t('header.introduction.part3')}{' '}
            <Link activeClass="current" to="about" spy={true} smooth={true}>
              {t('header.introduction.part4')}
            </Link>
            .
          </h3>
          <hr />
          <ul className="social noprint">
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
        </div>
      </div>
      <p className="scrolldown noprint">
        <Link activeClass="current" to="about" spy={true} smooth={true}>
          <em className="icon-down-circle" />
        </Link>
      </p>
    </header>
  )
}

export default Header
