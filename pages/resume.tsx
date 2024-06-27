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
                        <li>HTML</li>
                        <li>CSS/SCSS/Less</li>
                        <li>GIT</li>
                        <li>Javascript</li>
                        <li>Typescript</li>
                        <li>Webpack / Gulp / Grunt</li>
                        <li>Node.js</li>
                        <li>Next.js</li>
                        <li>Jest</li>
                        <li>React.js</li>
                        <li>Redux.js</li>
                        <li>Vue.js</li>
                        <li>Vuex</li>
                        <li>Docker</li>
                        <li>PostgreSQL</li>
                        <li>Material-UI</li>
                        <li>Shopify Liquid</li>
                      </ul>
                    </div>
                    <div>
                      <h3>Platforms</h3>
                      <ul>
                        <li>Adobe Experience Manager</li>
                        <li>Shopify</li>
                        <li>Drupal</li>
                        <li>Sitecore</li>
                        <li>Wordpress</li>
                        <li>DotNetNuke</li>
                      </ul>
                    </div>
                    <div>
                      <h3>Practices</h3>
                      <ul>
                        <li>Web Accessibility Implementation & Testing (WCAG 2.0)</li>
                        <li>Section 508 Compliance</li>
                        <li>Personal Identifiable Information Security / GDPR / CCPA Compliance</li>
                        <li>Cookie Consent Implementation</li>
                        <li>Design Systems</li>
                        <li>CI/CD</li>
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
                      <p className={global['xs']}>As a software developer and consultant, I collaborate with client project teams on large-scale initiatives. I specialize in creating web solutions in both coupled and decoupled Adobe Experience Manager systems environments (along with other CMS platforms), tailoring the front-end stack to project requirements, frequently leveraging React.js or Vue.js. Beyond development, I contribute in various capacities including Personal Privacy expertise, Project Solution Ownership, and design system architecture consultation.</p>
                    </div>
                  </div>
                  <div className={Resume['experience-container']}>
                    <div>
                      <h3>Centretek</h3>
                      <span>Dec 2015 – Nov 2020</span>
                    </div>
                    <div>
                      <h4>Lead Developer</h4>
                      <p className={global['xs']}>Developed and designed a number of programs and rituals across the front-end and back-end team including: 360 code reviews, regular knowledge sharing brown bags, internal wikis containing project information and case studies, project frameworks/boilerplates and scaffolding tools, command line tools to automate and circumvent errors working with complex git workflows, npm packages, daily scrums with rotating scrum leaders, and conducted bi-annual and annual reviews. I assisted with reviewing Scope of Work proposals and requirements and designed a system for breaking out comprehensive development tasks into issue tracking tools. I built and managed a mixed team of full-time and remote front-end developers including team members in different time zones and countries. I assisted each team member with improving weak points in skill-sets and honing in on their strengths. I helped team members develop leadership skills and gave opportunities to exercise them to become an increasingly efficient and skillful team.</p>
                    </div>
                  </div>
                  <div className={Resume['experience-container']}>
                    <div>
                      <h3>R2integrated</h3>
                      <span>Oct 2011 – Dec 2015</span>
                    </div>
                    <div>
                      <h4>Front-end Developer</h4>
                      <p className={global['xs']}>Created responsive websites and intranets across numerous CMS and HTML/CSS animated advertisements. Worked on a team of front-end developers and followed strict standards for efficient web development.</p>
                    </div>
                  </div>
                  <div className={Resume['experience-container']}>
                    <div>
                      <h3>Go Safer Security</h3>
                      <span>Sep 2010 – Oct 2011</span>
                    </div>
                    <div>
                      <h4>Front-end Developer/Designer</h4>
                      <p className={global['xs']}>Developed and maintained the company website using HTML, CSS, and JavaScript. Designed and established the company&apos;s brand and identity. Monitored web analytics and reported insights to the CEO and content team. Led creative initiatives for web, print, and radio advertisements. Collaborated with the development team to create a custom CRM solution.</p>
                    </div>
                  </div>
                  <div className={Resume['experience-container']}>
                    <div>
                      <h3>Goel Enterprise, Inc</h3>
                      <span>Jan 2007 – Sep 2010</span>
                    </div>
                    <div>
                      <h4>Front-end Developer/Designer</h4>
                      <p className={global['xs']}>Designed, developed, and managed content for the static company website utilizing HTML and CSS. Aided creative team in brand and identity efforts.</p>
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
                      <p className={global['xs']}>Master Certification, Web Development & Design</p>
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