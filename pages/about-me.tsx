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
      <>
        <div className={`${helpers.container} ${global.styles}`}>
          <main>
            <Nav>
              <VerticalContentContainer
                altText="Portrait of me seated in front of my computer in my old company office, laughing shyly"
                backgroundImage='me.JPG'
                size='small'
              >
                <>
                  <h2>hi, i&apos;m sarah<br />& i&apos;m so glad to meet you 🙂</h2>
                  <p>Thank you so much for taking the time to get to know me.</p>
                  <p>I&apos;ve been working professionally as a front end engineer (and in the past, designer) for 16 years. As a pre-teen/teenager, I did this as a hobby to make fan sites for my favorite video games and anime.</p>
                  <p>As a professional, I have worked my way through roles from junior–senior engineer to Technology Manager (in which I built a team of permanent full-time and international contracting frontend end engineers).</p>
                  <p>I absolutely love working with people and technology. As a manager, I take great joy in taking care of the details for the team, finding everyone&apos;s strengths, and building trust to give away ownership and turn everyone into a leader.</p>
                  <p>As an engineer, automation, scalability, and comprehensive digestible work thrill and fascinate me.</p>
                  <p>If all of this resonates with you so far, I&apos;d love to chat. I look forward to connecting with you.</p>
                </>
              </VerticalContentContainer>
            </Nav>
          </main>
        </div>
      </>
    </Global>
  );
}