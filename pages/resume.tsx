import clsx from 'clsx'
import GlobalLayout from '@pages/Layout'

import miscData from '@data/skills/misc.json'
import platformsData from '@data/skills/platforms.json'
import cloudDevOps from '@data/skills/cloud-devops.json'
import coreDev from '@data/skills/core-dev.json'

import ContentContainer from '@components/ContentContainer'
import Experience from '@components/Experience'
import SkillsList from '@components/SkillsList'

import helpersCss from '@styles/helpers/_helpers.module.scss'
import globalCss from '@styles/helpers/_helpers.global-font-styles.module.scss'
import resumeCss from '@styles/pages_resume.module.scss'
import Link from 'next/link'

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
                  header='Core Development'
                  items={ coreDev }
                />
                <SkillsList
                  header='Cloud & DevOps'
                  items={ cloudDevOps }
                />
                <SkillsList
                  header='Platforms / UI'
                  items={ platformsData }
                />
                <SkillsList
                  header='Quality & Compliance'
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
                <h5>Azure DevOps/Node.js/React Developer | Global Pharmaceutical Solutions</h5>
                <ul>
                  <li>Streamed development and release processes by architecting Azure DevOps pipelines with automated CI/CD, Sentinel pipelines, and protected
                    release environments with approval gates and branch policies.
                  </li>
                  <li>Enhanced release governance by integrating changelog validation and automated pre-release PR generation directiyl into pipeline workflows.</li>
                  <li>Implemented automated visual regression testing through Chromatic integration, ensuring pipeline enforcement of design integrity before merges.</li>
                  <li>Built and configured secure Azure environments with controlled permissions, branch protection rules, and structured release approvals.</li>
                  <li>Refactored the codebase to TypeScript, improving type safety, maintainability, and scalability across shared UI components.</li>
                  <li>Engineered a Rollup-based build configuration enabling seamless consumption of components across multiple environments</li>
                  <li>Created Node.js CLI tools that scaffolded new applications for both Next.js and React + Vite environments, significantly reducing setup time and onboarding friction for developers.</li>
                </ul>
                <h5>Next.js Developer/Technical Product Owner | University</h5>
                <ul>
                  <li>Took ownership of a struggling analytics integration project, transitioning from frontend developer to technical product owner to restore execution and delivery alignment.</li>
                  <li>Re-architected a brittle Tealium analytics implementation, enabling accurate and reliable data flow throughout the Next.js application.</li>
                  <li>Identified and resolved systemic issues in the analytics layer, improving data integrity and maintainability.</li>
                  <li>Led sprint planning, backlog prioritization, and documentation, providing structure and clarity for an under-resourced client team.</li>
                  <li>Produced comprehensive technical and functional documentation aligning engineering work with product goals.</li>
                  <li>Recognized by the client for leadership, technical rigor, and clear communication in bridging product and engineering disciplines.</li>
                </ul>
                <h5>AWS/Next.js Developer | Large Smart Home Security/Device</h5>
                <ul>
                  <li>Delivered new features for a Next.js application integrated with Contentful CMS, including Live Preview endpoints and draft-mode enablement.</li>
                  <li>Built AWS Lambda functions to consume SQS messages triggered by Contentful webhooks, orchestrating shared logic across processors and creating S3 datasets used to train an AI application.</li>
                  <li>Provisioned infrastructure using AWS CDK, defining IAM roles, environment configurations, and secure access to external APIs via Secrets Manager.</li>
                </ul>
                <h5>React UI Library Developer | Large B2B E-Commerce</h5>
                <ul>
                  <li>Developed accessible, reusable React UI components for an internal design system built on the headless React Aria library, enabling rapid development and consistent UX patterns across teams.</li>
                  <li>Created a foundational component library widely adopted across multiple internal teams and further extended downstream to build higher-level composite components in a secondary library.</li>
                  <li>Authored and presented API documentation to developer and design stakeholders, standardizing component usage and interface design.</li>
                  <li>Implemented rigorous unit testing with 100% coverage and maintained comprehensive Storybook stories for visualization, QA, and accessibility validation.</li>
                </ul>
                <h5>Next.js Developer | Professional Employer Organization</h5>
                <ul>
                  <li>Built a Next.js application from the ground up, establishing the foundational architecture and development tooling, including TypeScript, Jest, Eslint, and SCSS.</li>
                  <li>Integrated Contentful’s Content Delivery API to dynamically render content and enable scalable CMS-driven workflows.</li>
                  <li>Implemented user authentication using Azure Active Directory B2C via MSAL React library, securing access through enterprise-grade identity management within Next.js.</li>
                </ul>
                <h5>Frontend Developer | Large Pet Food & Supplies</h5>
                <ul>
                  <li>Rapidly adapted frontend skills to Shopify, meeting high team demands and quickly contributing to the project.</li>
                  <li>Supported the transition of a project to ReactJS apps and refactored major vanilla JS code, eliminating outdated jQuery.</li>
                  <li>Modernized the codebase by converting vanilla CSS to SCSS, adding code linting, JS modules, and Husky for pre-commit code quality.</li>
                  <li>Assisted in planning and establishing dev and staging environments, improving workflow and deployment processes.</li>
                  <li>Translated functional requirements into technical documentation in confluence.</li>
                  <li>Wrote and maintained extensive developer documentation and performed code reviews to ensure code quality and consistency.</li>
                </ul>
                <h5>Frontend Developer | Large Cloud Computing Platform</h5>
                <ul>
                  <li>Acted as the main contributor for a React-based repository decoupled from Adobe Experience Manager.</li>
                  <li>Developed and maintained high-quality, reusable components for seamless integration with AEM.</li>
                  <li>Implemented comprehensive unit tests to ensure code reliability and functionality.</li>
                  <li>Achieved and maintained a minimum of 80% code coverage, ensuring robust application performance.</li>
                  <li>Collaborated with cross-functional teams to deliver features and enhancements in an agile environment.</li>
                  <li>Performed code reviews within different repo’s within the team.</li>
                </ul>
                <h5>Frontend Developer | Global Financial Services</h5>
                <ul>
                  <li>Developed a comprehensive design system for a new web design, ensuring consistency and scalability.</li>
                  <li>Wrote and collaborated closely with the development team to align on technical specifications and architectural requirements.</li>
                  <li>Architected the system design to facilitate seamless integration and future enhancements.</li>
                  <li>Created reusable components and design patterns, improving efficiency and code maintainability.</li>
                  <li>Ensured the design system adhered to best practices and met all user experience standards.</li>
                </ul>
                <h5>Vue.js Developer | Molecular Diagnostics</h5>
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
              <h2>Education & Certifications</h2>
              <hr />
              <Experience
                institutionName='AWS'
                startDate='January 2025'
                endDate='January 2028'
                descriptionTitle='AWS Certified Developer - Associate'
              >
                <Link target='_blank' className={ globalCss['xSmall'] } href="https://www.credly.com/badges/8da8ec69-0014-4b1d-9d8e-b23e14339042/public_url">Credential ID b1ea2fb74acc4b95aa19b4ec7f020301</Link>
              </Experience>
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