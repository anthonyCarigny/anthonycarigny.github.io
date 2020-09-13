import React from 'react';
import aboutData from './aboutData';
import { useTranslation } from 'react-i18next';
function About() {

  const { t } = useTranslation();

  return (
   <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic noprint" src="images/profilepic.jpg" alt="" />
         </div>
         <div className="nine columns main-col">
            <h2>{t('about.title')}</h2>
            <p>{t('about.description')}</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>{t('about.contactDetails')}</h2>
                  <address>
                     <span><a href="mailto:{props.aboutData.emailAdress}">{aboutData.emailAdress}</a></span><br/>
                  </address>
               </div>

               <div className="columns download">
                  <p>
                     <a href={t('about.resume')} className="button"><i className="fa fa-download"></i>{t('about.downloadResume')}</a>
                  </p>
               </div>
            </div>
         </div>
      </div>
   </section>
  );
}

export default About;
