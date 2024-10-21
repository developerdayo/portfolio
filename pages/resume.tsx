import Global from './Layout';

// components
import Nav from '../components/Header';
import VerticalContentContainer from '../components/VerticalContentContainer';

// styles
import helpers from '../styles/helpers/_helpers.module.scss';
import global from '../styles/helpers/_helpers.global-font-styles.module.scss';

// page
import Resume from '../styles/pages/_resume.module.scss';

export default function firstChallenge() {
  return (
    <Global>
      <div className={`${helpers.container} ${global.styles}`}>
        <main>
          <Nav>
            <>
              <VerticalContentContainer size='large'>
                <>
                  <h2>Skills</h2>
                  <hr />
                  <div className={Resume['skills-container']}>
                    <div>
                      <h3>Technology</h3>
                      <ul>
                        <li>HTML5</li>
                        <li>Javascript</li>
                        <li>Typescript</li>
                        <li>Node.js</li>
                        <li>Next.js</li>
                        <li>Linters (Eslint, StyleLInt)</li>
                        <li>Webpack / Gulp / Grunt</li>
                        <li>Docker</li>
                        <li>Github Actions</li>
                        <li>Jest</li>
                        <li>RESTful API</li>
                        <li>Source Control (Git, Github, AWS Codecommit, Azure DevOps, GitLab)</li>
                        <li>.NET</li>
                        <li>Java</li>
                        <li>PostgreSQL</li>
                      </ul>
                    </div>
                    <div>
                      <h3>UI</h3>
                      <ul>
                        <li>CSS / SCSS / Less</li>
                        <li>React.js</li>
                        <li>Redux.js</li>
                        <li>Vue.js</li>
                        <li>Vuex</li>
                        <li>Material-UI</li>
                        <li>Bootstrap</li>
                        <li>Shopify Liquid</li>
                        <li>Twig</li>
                        <li>Figma</li>
                      </ul>
                    </div>
                    <div>
                      <h3>Platforms</h3>
                      <ul>
                        <li>Adobe Experience Manager</li>
                        <li>DotNetNuke</li>
                        <li>Drupal</li>
                        <li>Shopify</li>
                        <li>Sitecore</li>
                        <li>Wordpress</li>
                      </ul>
                    </div>
                    <div>
                      <h3>Misc</h3>
                      <ul>
                        <li>DevOps</li>
                        <li>Design Systems</li>
                        <li>Web Accessibility Implementation & Testing (WCAG 2.0)</li>
                        <li>Section 508 Compliance</li>
                        <li>GDPR / CCPA Compliance</li>
                      </ul>
                    </div>
                  </div>
                </>
              </VerticalContentContainer>
              <VerticalContentContainer size={'large'}>
                <>
                  <h2>Experience</h2>
                  <hr />
                  <div className={Resume['experience-container']}>
                    <div>
                      <h3>Slalom</h3>
                      <span>Nov 2020 – Present</span>
                    </div>
                    <div>
                      <h4>Senior Software Developer/Consultant</h4>
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
                    </div>
                  </div>
                  <div className={Resume['experience-container']}>
                    <div>
                      <h3>Centretek</h3>
                      <span>Dec 2015 – Nov 2020</span>
                    </div>
                    <div>
                      <h4>Lead Developer</h4>
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
                    </div>
                  </div>
                  <div className={Resume['experience-container']}>
                    <div>
                      <h3>R2integrated</h3>
                      <span>Oct 2011 – Dec 2015</span>
                    </div>
                    <div>
                      <h4>Front-end Developer</h4>
                      <p className={global['xSmall']}>Created responsive websites and intranets across numerous CMS and HTML/CSS animated advertisements. Worked on a team of front-end developers and followed strict standards for efficient web development.</p>
                    </div>
                  </div>
                  <div className={Resume['experience-container']}>
                    <div>
                      <h3>Go Safer Security</h3>
                      <span>Sep 2010 – Oct 2011</span>
                    </div>
                    <div>
                      <h4>Front-end Developer/Designer</h4>
                      <p className={global['xSmall']}>Developed and maintained the company website using HTML, CSS, and JavaScript. Designed and established the company&apos;s brand and identity. Monitored web analytics and reported insights to the CEO and content team. Led creative initiatives for web, print, and radio advertisements. Collaborated with the development team to create a custom CRM solution.</p>
                    </div>
                  </div>
                  <div className={Resume['experience-container']}>
                    <div>
                      <h3>Goel Enterprise, Inc</h3>
                      <span>Jan 2007 – Sep 2010</span>
                    </div>
                    <div>
                      <h4>Front-end Developer/Designer</h4>
                      <p className={global['xSmall']}>Designed, developed, and managed content for the static company website utilizing HTML and CSS. Aided creative team in brand and identity efforts.</p>
                    </div>
                  </div>
                </>
              </VerticalContentContainer>
              <VerticalContentContainer size='large'>
                <>
                  <h2>Education</h2>
                  <hr />
                  <div className={Resume['education-container']}>
                    <div>
                      <h3>Sessions College</h3>
                      <span>2007 – 2009</span>
                    </div>
                    <div>
                      <h4>Master Certification, Web Development & Design</h4>
                      <p className={global['xSmall']}>Master Certification, Web Development & Design</p>
                    </div>
                  </div>
                </>
              </VerticalContentContainer>
            </>
          </Nav>
        </main>
      </div>
    </Global>
  );
}