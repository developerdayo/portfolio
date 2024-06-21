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
                size='small'
              >
                <>
                  <h2>hi, i&apos;m sarah<br />& i&apos;m so glad to meet you 🙂</h2>
                  <p>I&apos;ve been passionate about professional software development 16 years. Previous to then, I came to love it as a hobby, enjoying the process of developing and designing websites for whatever video game, music, or interest that I was into at the time.</p>
                  <p>Professionally, I&apos;ve grown from being in a junior role to senior and eventually to lead developer until I took my current senior role in order to spend time sharpening my skills as an individual contributor once more. I&apos;ve had the pleasure of building and leading a talented team of both full-time and internationally-based developers.</p>
                  <p>I truly enjoy the intersection of technology and collaboration. As a manager, I thrive on nurturing my team, discovering each person&apos;s strengths, and fostering a trusting environment where everyone can take ownership and grow into leaders.</p>
                  <p>As an developer, I&apos;m passionate about automation, scalability, and creating work that is both comprehensive and easy to understand.</p>
                  <p>If my background and approach resonate with you, I&apos;d love to chat. I look forward to connecting with you.</p>
                </>
              </VerticalContentContainer>
            </Nav>
          </main>
        </div>
      </>
    </Global>
  );
}