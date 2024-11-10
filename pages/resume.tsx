import clsx from 'clsx'
import GlobalLayout from '@pages/Layout'

import miscData from '@data/skills/misc.json'
import platformsData from '@data/skills/platforms.json'
import technologyData from '@data/skills/technology.json'
import uiData from '@data/skills/ui.json'

import ContentContainer from '@components/ContentContainer'
import Experience from '@components/Experience'
import SkillsList from '@components/SkillsList'

import helpersCss from '@styles/helpers/_helpers.module.scss'
import globalCss from '@styles/helpers/_helpers.global-font-styles.module.scss'
import resumeCss from '@styles/pages_resume.module.scss'

export default function ResumePage() {
  return (
    <GlobalLayout>
      <div className={ clsx( helpersCss.container, globalCss.styles ) }>
        <main>
          <ContentContainer size='large'>
            <section>
              <h2>Skills</h2>
              <hr />
              <div className={ resumeCss['skills-container'] }>
                <SkillsList
                  header='Technology'
                  items={ technologyData }
                />
                <SkillsList
                  header='UI'
                  items={ uiData }
                />
                <SkillsList
                  header='Platforms'
                  items={ platformsData }
                />
                <SkillsList
                  header='Misc'
                  items={ miscData }
                />
              </div>
            </section>
          </ContentContainer>
          <ContentContainer size={ 'large' }>
            <section>
              <h2>Experience</h2>
              <hr />
              <Experience
                institutionName='Slalom'
                startDate='Nov 2020'
                endDate='Present'
                descriptionTitle='Senior Software Developer/Consultant'
              >
                <h5>Nestle</h5>
                <ul>
                  <li>Rapidly adapted frontend skills to Shopify, meeting high team demands and quickly contributing to the project.</li>
                  <li>Supported the transition of a project to ReactJS apps and refactored major vanilla JS code, eliminating outdated jQuery.</li>
                  <li>Modernized the codebase by converting vanilla CSS to SCSS, adding code linting, JS modules, and Husky for pre-commit code quality.</li>
                  <li>Assisted in planning and establishing dev and staging environments, improving workflow and deployment processes.</li>
                  <li>Translated functional requirements into technical documentation in confluence.</li>
                  <li>Wrote and maintained extensive developer documentation and performed code reviews to ensure code quality and consistency.</li>
                </ul>
                <h5>Amazon AWS</h5>
                <ul>
                  <li>Acted as the main contributor for a React-based repository decoupled from Adobe Experience Manager.</li>
                  <li>Developed and maintained high-quality, reusable components for seamless integration with AEM.</li>
                  <li>Implemented comprehensive unit tests to ensure code reliability and functionality.</li>
                  <li>Achieved and maintained a minimum of 80% code coverage, ensuring robust application performance.</li>
                  <li>Collaborated with cross-functional teams to deliver features and enhancements in an agile environment.</li>
                  <li>Performed code reviews within different repo’s within the team.</li>
                </ul>
                <h5>Moody’s</h5>
                <ul>
                  <li>Developed a comprehensive design system for a new web design, ensuring consistency and scalability.</li>
                  <li>Wrote and collaborated closely with the development team to align on technical specifications and architectural requirements.</li>
                  <li>Architected the system design to facilitate seamless integration and future enhancements.</li>
                  <li>Created reusable components and design patterns, improving efficiency and code maintainability.</li>
                  <li>Ensured the design system adhered to best practices and met all user experience standards.</li>
                </ul>
                <h5>Cepheid</h5>
                <ul>
                  <li>Assisted in building a Vue.js application with Vuex for a healthcare client during the COVID pandemic to deliver the application under a tight deadline to facilitate the sale of COVID testing machines.</li>
                  <li>Collaborated effectively with the team to rapidly develop and deploy critical features.</li>
                  <li>Contributed to maintaining code quality and stability under challenging circumstances and a team under high demand.</li>
                </ul>
              </Experience>
              <Experience
                institutionName='Centretek'
                startDate='Dec 2015'
                endDate='Nov 2020'
                descriptionTitle='Lead Developer'
              >
                <ul>
                  <li>Led development and performed as technical architect on projects involving coupled/decoupled Drupal with ReactJS.</li>
                  <li>Developed and instituted programs including:</li>
                    <ul>
                      <li>360 code reviews</li>
                      <li>Regular knowledge-sharing brown bags</li>
                      <li>Internal wikis with project information and case studies</li>
                      <li>Project frameworks, boilerplates, and scaffolding tools</li>
                      <li>Command line tools to automate and avoid errors in complex git workflows</li>
                      <li>NPM packages for streamlined development</li>
                      <li>Daily scrums with rotating scrum leaders</li>
                      <li>Bi-annual and annual reviews</li>
                    </ul>
                  <li>Assisted in reviewing Scope of Work proposals and requirements.</li>
                  <li>Designed systems for breaking down comprehensive development tasks into issue tracking tools.</li>
                  <li>Built and managed a mixed team of full-time and remote front-end developers across different time zones and countries.</li>
                  <li>Mentored team members to improve skills, capitalize on strengths, and develop leadership abilities.</li>
                  <li>Fostered an environment of continuous improvement, leading to an increasingly efficient and skillful team.</li>
                </ul>
              </Experience>
              <Experience
                institutionName='R2integrated'
                startDate='Oct 2011'
                endDate='Dec 2015'
                descriptionTitle='Front-end Developer'
              >
                <p className={ globalCss['xSmall'] }>Created responsive websites and intranets across numerous CMS and HTML/CSS animated advertisements. Worked on a team of front-end developers and followed strict standards for efficient web development.</p>
              </Experience>
              <Experience
                institutionName='Go Safer Security'
                startDate='Sep 2010'
                endDate='Oct 2011'
                descriptionTitle='Front-end Developer/Designer'
              >
                <p className={ globalCss['xSmall'] }>Developed and maintained the company website using HTML, CSS, and JavaScript. Designed and established the company&apos;s brand and identity. Monitored web analytics and reported insights to the CEO and content team. Led creative initiatives for web, print, and radio advertisements. Collaborated with the development team to create a custom CRM solution.</p>
              </Experience>
              <Experience
                institutionName='Goel Enterprise, Inc'
                startDate='Jan 2007'
                endDate='Sep 2010'
                descriptionTitle='Front-end Developer/Designer'
              >
                <p className={ globalCss['xSmall'] }>Designed, developed, and managed content for the static company website utilizing HTML and CSS. Aided creative team in brand and identity efforts.</p>
              </Experience>
            </section>
          </ContentContainer>
          <ContentContainer size='large'>
            <section>
              <h2>Education</h2>
              <hr />
              <Experience
                institutionName='Sessions College'
                startDate='2007'
                endDate='2009'
                descriptionTitle='Master Certification, Web Development & Design'
              >
                <p className={ globalCss['xSmall'] }>Master Certification, Web Development & Design</p>
              </Experience>
            </section>
          </ContentContainer>
        </main>
      </div>
    </GlobalLayout>
  );
}