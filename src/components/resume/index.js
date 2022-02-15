import React from 'react'
import { useTranslation } from 'react-i18next'
function Resume() {
  const { t } = useTranslation()
  const diplomas = t('resume.education.diplomas', { returnObjects: true })
  const jobs = t('resume.experience.jobs', { returnObjects: true })

  return (
    <div id="resume">
      <section id="work" className="row">
        <div className="three columns header-col">
          <h1>
            <span>{t('resume.experience.title')}</span>
          </h1>
        </div>
        <div className="nine columns main-col">
          {jobs.map((job, index) => {
            return (
              <div key={index} className="row item">
                <div className="twelve columns">
                  <h3>
                    {job.company} ({job.city})
                  </h3>
                  <p className="info">
                    <em className="date">
                      {job.startDate} - {job.endDate}
                    </em>
                  </p>
                  {job.missions &&
                    job.missions.map((mission, jobIndex) => {
                      return (
                        <React.Fragment key={jobIndex}>
                          <p className="info">
                            {mission.position} - {mission.team}
                          </p>
                          <ul>
                            {mission.responsibilities &&
                              mission.responsibilities.map((responsibility, responsibilityIndex) => {
                                return <li key={responsibilityIndex}>{responsibility}</li>
                              })}
                          </ul>
                          <p>
                            Technologies:&nbsp;
                            {mission.technologies &&
                              mission.technologies
                                .map((technology, technologyIndex) => <span key={technologyIndex}>{technology}</span>)
                                .reduce(
                                  (acc, x) =>
                                    acc === null ? (
                                      x
                                    ) : (
                                      <>
                                        {acc} | {x}
                                      </>
                                    ),
                                  null
                                )}
                          </p>
                        </React.Fragment>
                      )
                    })}
                </div>
              </div>
            )
          })}
        </div>
      </section>
      <section id="education" className="row">
        <div className="three columns header-col">
          <h1>
            <span>{t('resume.education.title')}</span>
          </h1>
        </div>
        <div className="nine columns main-col">
          {diplomas.map((diploma, index) => {
            return (
              <div key={index} className="row item">
                <div className="twelve columns">
                  <h3>{diploma.school}</h3>
                  <p className="info">
                    {diploma.name}
                    <span>&bull;</span> <em className="date">{diploma.date}</em>
                  </p>
                  <div className="noprint">
                    <p> {diploma.description}</p>
                    <span>{t('resume.education.targetedSkills')}</span>
                    <ul>
                      {diploma.targetedSkills &&
                        diploma.targetedSkills.map((skill, skillIndex) => {
                          return <li key={skillIndex}>{skill}</li>
                        })}
                    </ul>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>
      <div id="skills" className="row">
        <div className="three columns header-col">
          <h1>
            <span>{t('resume.skills.title')}</span>
          </h1>
        </div>
        <div className="nine columns main-col">
          <div className="bars">
            <ul id="skill-bars">
              <li>
                <span id="java" className="bar-expand"></span>
                <em>Java</em>
              </li>
              <li>
                <span id="sql" className="bar-expand"></span>
                <em>SQL</em>
              </li>
              <li>
                <span id="javascript" className="bar-expand"></span>
                <em>Javascript</em>
              </li>
              <li>
                <span id="html5" className="bar-expand"></span>
                <em>HTML5/CSS3</em>
              </li>
              <li>
                <span id="python" className="bar-expand"></span>
                <em>Python</em>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume
