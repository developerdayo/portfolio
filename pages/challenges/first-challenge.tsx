import Global from '../Layout';
import Nav from '../../components/Nav';

// styles
import helpers from '../../styles/helpers/_helpers.module.scss';
import global from '../../styles/helpers/_helpers.global-font-styles.module.scss';

export default function firstChallenge() {
  return (
    <Global>
      <>
        <div className={`${helpers.container} ${global.styles}`}>
          <main>
            <Nav />
          </main>
        </div>
      </>
    </Global>
  );
}