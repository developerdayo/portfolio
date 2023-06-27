// components
import Global from './Layout';
import Nav from '../components/Nav';
import VerticalContentContainer from '../components/VerticalContentContainer';
import styles from '../styles/Resume.module.scss';

// images

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
              <VerticalContentContainer backgroundImage='' altText='' size='large'>
                <>
                  <h2>Skills</h2>
                  <hr />
                  <div className={styles['flex']}>
                    <div className={styles['column-25']}>
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
                      </ul>
                    </div>
                    <div className={styles['column-25']}>
                      <h3>Applications</h3>
                      <ul>
                        <li>Photoshop</li>
                        <li>Sketch</li>
                        <li>Figma</li>
                        <li>Google Tag Manager</li>
                      </ul>
                    </div>
                    <div className={styles['column-25']}>
                      <h3>Platforms</h3>
                      <ul>
                        <li>Adobe Experience Manager</li>
                        <li>Wordpress</li>
                        <li>Drupal</li>
                        <li>Sitecore</li>
                        <li>DotNetNuke</li>
                      </ul>
                    </div>
                    <div className={styles['column-25']}>
                      <h3>Practices</h3>
                      <ul>
                        <li>Web Accessibility (WCAG) Implementation & Testing</li>
                        <li>Section 508 Compliance</li>
                        <li>Personal Identifiable Information Security / GDPR / CCPA Compliance</li>
                        <li>Cookie Consent Implementation</li>
                        <li>Design Systems</li>
                      </ul>
                    </div>
                  </div>
                </>
              </VerticalContentContainer>
              <VerticalContentContainer altText='' backgroundImage='' size={'large'}>
                <>
                  <h2>Experience</h2>
                  <hr />
                  <div className={`${styles.flex} ${styles.divide}`}>
                    <div className={styles['column-25']}>
                      <h3>Slalom</h3>
                      <span>Nov 2020 – Present</span>
                    </div>
                    <div className={styles['column-75']}>
                      <h4>Senior Consultant</h4>
                      <p className={global['xs']}>Works on large-scale projects with the client project team as a software engineer/consultant. Specializes in developing web solutions on coupled or decoupled Adobe Experience Manager and formulates frontend stack depending on project needs often with React.js or Vue.js. Outside of development, performs functions in other roles such as Personal Privacy expertise, Project Solution Owner, and design system architecture consultation.</p>
                    </div>
                  </div>
                  <div className={`${styles.flex} ${styles.divide}`}>
                    <div className={styles['column-25']}>
                      <h3>Centretek</h3>
                      <span>Dec 2015 – Nov 2020</span>
                    </div>
                    <div className={styles['column-75']}>
                      <h4>Lead Front End Developer</h4>
                      <p className={global['xs']}>Develop responsive websites from internal and third party designs utilizing HTML, CSS, and Javascript on numerous CMS. Catered to and tested projects across browsers, various devices, and support for screen readers while testing for ADA errors. Conducted code reviews for the front end team and continuous development of code standards for easy collaboration. Provide education and strategies (beyond the front end team) to aid in efficiency and utilization of the latest technology.</p>
                    </div>
                  </div>
                  <div className={`${styles.flex} ${styles.divide}`}>
                    <div className={styles['column-25']}>
                      <h3>R2integrated</h3>
                      <span>Oct 2011 – Dec 2015</span>
                    </div>
                    <div className={styles['column-75']}>
                      <h4>Front End Developer</h4>
                      <p className={global['xs']}>Created responsive websites and intranets across numerous CMS and HTML/CSS animated advertisements. Worked on a team of front end developers and followed strict standards for efficient web development.</p>
                    </div>
                  </div>
                  <div className={`${styles.flex} ${styles.divide}`}>
                    <div className={styles['column-25']}>
                      <h3>Go Safer Security</h3>
                      <span>Sep 2010 – Oct 2011</span>
                    </div>
                    <div className={styles['column-75']}>
                      <h4>Front End Developer/Designer</h4>
                      <p className={global['xs']}>Developed and maintained the company website utilizing HTML, CSS, and JavaScript. Designed and developed the company brand and identity. Monitored web analytics and reported findings to the CEO and content team. Lead creative efforts for web, print, and radio advertisement. Worked with the development team to develop a custom CRM solution.</p>
                    </div>
                  </div>
                  <div className={`${styles.flex}`}>
                    <div className={styles['column-25']}>
                      <h3>Goel Enterprise, Inc</h3>
                      <span>Jan 2007 – Sep 2010</span>
                    </div>
                    <div className={styles['column-75']}>
                      <h4>Front End Developer/Designer</h4>
                      <p className={global['xs']}>Designed, developed, and managed content for the static company website utilizing HTML and CSS. Aided creative team in brand and identity efforts.</p>
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