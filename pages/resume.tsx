import Global from './Layout';

// components
import Nav from '../components/Header';
import VerticalContentContainer from '../components/VerticalContentContainer';

// styles
import helpers from '../styles/helpers/_helpers.module.scss';
import global from '../styles/helpers/_helpers.global-font-styles.module.scss';

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
                  <div className={helpers['flex']}>
                    <div className={`${helpers['xs-50']} ${helpers['sm-50']} ${helpers['md-25']}`}>
                      <h3>Languages & Libraries</h3>
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
                        <li>Material-UI</li>
                        <li>Shopify Liquid</li>
                      </ul>
                    </div>
                    <div className={`${helpers['xs-50']} ${helpers['xs-100']} ${helpers['sm-50']} ${helpers['md-25']}`}>
                      <h3>Applications</h3>
                      <ul>
                        <li>Photoshop</li>
                        <li>Sketch</li>
                        <li>Figma</li>
                        <li>Google Tag Manager</li>
                        <li>Jira</li>
                        <li>Confluence</li>
                      </ul>
                    </div>
                    <div className={`${helpers['xs-50']} ${helpers['xs-100']} ${helpers['sm-50']} ${helpers['md-25']}`}>
                      <h3>Platforms</h3>
                      <ul>
                        <li>Adobe Experience Manager</li>
                        <li>Wordpress</li>
                        <li>Drupal</li>
                        <li>Sitecore</li>
                        <li>DotNetNuke</li>
                      </ul>
                    </div>
                    <div className={`${helpers['xs-50']} ${helpers['xs-100']} ${helpers['sm-50']} ${helpers['md-25']}`}>
                      <h3>Practices</h3>
                      <ul>
                        <li>Web Accessibility (WCAG) Implementation & Testing</li>
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
                  <div className={`${helpers.flex} ${helpers.divide}`}>
                    <div className={`${helpers['sm-25']} ${helpers['md-25']}`}>
                      <h3>Slalom</h3>
                      <span>Nov 2020 – Present</span>
                    </div>
                    <div className={`${helpers['sm-75']} ${helpers['md-75']}`}>
                      <h4>Senior Consultant</h4>
                      <p className={global['xs']}>Works on large-scale projects with the client project team as a software engineer/consultant. Specializes in developing web solutions on coupled or decoupled Adobe Experience Manager and formulates frontend stack depending on project needs often with React.js or Vue.js. Outside of development, performs functions in other roles such as Personal Privacy expertise, Project Solution Owner, and design system architecture consultation.</p>
                    </div>
                  </div>
                  <div className={`${helpers.flex} ${helpers.divide}`}>
                    <div className={`${helpers['sm-25']} ${helpers['md-25']}`}>
                      <h3>Centretek</h3>
                      <span>Dec 2015 – Nov 2020</span>
                    </div>
                    <div className={`${helpers['sm-75']} ${helpers['md-75']}`}>
                      <h4>Technology Manager/Lead Frontend Developer</h4>
                      <p className={global['xs']}>Performed managerial and frontend engineering tasks. Developed and designed a number of programs and rituals across the frontend and backend team including: 360 code reviews, regular knowledge sharing brown bags, internal wikis containing project information and case studies, project frameworks/boilerplates and scaffolding tools, command line tools to automate and circumvent errors working with complex git workflows, npm packages, daily scrums with rotating scrum leaders, and conducted bi-annual and annual reviews. I assisted with reviewing Scope of Work proposals and requirements and designed a system for breaking out comprehensive engineering tasks into issue tracking tools. I built and managed a mixed team of full-time and remote frontend engineers including team members in different time zones and countries. I assisted each team member with improving upon their weaknesses and honing in on their strengths. I helped team members develop leadership skills and gave opportunities to exercise them to become an increasingly efficient and skillful team.</p>
                    </div>
                  </div>
                  <div className={`${helpers.flex} ${helpers.divide}`}>
                    <div className={`${helpers['sm-25']} ${helpers['md-25']}`}>
                      <h3>R2integrated</h3>
                      <span>Oct 2011 – Dec 2015</span>
                    </div>
                    <div className={`${helpers['sm-75']} ${helpers['md-75']}`}>
                      <h4>Frontend Developer</h4>
                      <p className={global['xs']}>Created responsive websites and intranets across numerous CMS and HTML/CSS animated advertisements. Worked on a team of frontend developers and followed strict standards for efficient web development.</p>
                    </div>
                  </div>
                  <div className={`${helpers.flex} ${helpers.divide}`}>
                    <div className={`${helpers['sm-25']} ${helpers['md-25']}`}>
                      <h3>Go Safer Security</h3>
                      <span>Sep 2010 – Oct 2011</span>
                    </div>
                    <div className={`${helpers['sm-75']} ${helpers['md-75']}`}>
                      <h4>Frontend Developer/Designer</h4>
                      <p className={global['xs']}>Developed and maintained the company website utilizing HTML, CSS, and JavaScript. Designed and developed the company brand and identity. Monitored web analytics and reported findings to the CEO and content team. Lead creative efforts for web, print, and radio advertisement. Worked with the development team to develop a custom CRM solution.</p>
                    </div>
                  </div>
                  <div className={`${helpers.flex}`}>
                    <div className={`${helpers['sm-25']} ${helpers['md-25']}`}>
                      <h3>Goel Enterprise, Inc</h3>
                      <span>Jan 2007 – Sep 2010</span>
                    </div>
                    <div className={`${helpers['sm-75']} ${helpers['md-75']}`}>
                      <h4>Frontend Developer/Designer</h4>
                      <p className={global['xs']}>Designed, developed, and managed content for the static company website utilizing HTML and CSS. Aided creative team in brand and identity efforts.</p>
                    </div>
                  </div>
                </>
              </VerticalContentContainer>
              <VerticalContentContainer size='large'>
                <>
                  <h2>Skills</h2>
                  <hr />
                  <div className={helpers['flex']}>
                    <div className={`${helpers['sm-25']} ${helpers['md-25']}`}>
                      <h3>Sessions College</h3>
                      <span>2007 – 2009</span>
                    </div>
                    <div className={`${helpers['sm-75']} ${helpers['md-75']}`}>
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