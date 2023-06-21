import Link from 'next/link';
import { useRouter } from 'next/router';
import Toggle from './Toggle';

// styles
import helpers from '../styles/helpers/_helpers.module.scss';
import nav from '../styles/Nav.module.scss';

type Props = {
  children?: JSX.Element;
}

export default function Nav({children}: Props) {
  const router = useRouter();

  const handleClick = (linkPath: string, e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setTimeout(() => {
      router.push(linkPath);
    }, 450);
  }

  return (
    <div className={nav.container}>
      <div className={`${nav.box} ${nav['box--top']}`}>
        <h1 className={nav['title']}>
          sarah ferguson
        </h1>
        <span className={helpers['block']}>frontend engineer</span>
        <span className={helpers['block']}>sarah.an.ferguson@gmail.com</span>
      </div>
      {children}
      <div className={`${nav.box} ${nav['box--bottom']}`}>
        <nav aria-labelledby="navMenuLabel">
          <ol className={router.pathname === '/about-me' || router.pathname === '/resume' ? `${nav['pseudo-bg']}` : '' }>
            <li><Link onClick={(e) => handleClick('/about-me', e)} href="/about-me">about me</Link></li>
            <li><Link onClick={(e) => handleClick('/resume', e)} href="/resume">resume</Link></li>
            <li><Link onClick={(e) => handleClick('mailto:sarah.an.ferguson@gmail.com', e)} href="mailto:sarah.an.ferguson@gmail.com">contact</Link></li>
            <li className={`${nav['li-absolute']} ${nav['li-absolute-top']}`}>
              <Link href="https://www.linkedin.com/in/sarah-ferguson-22167016/" target="_blank">linkedin</Link>
            </li>
            <li className={nav['li-absolute']}>
              <Toggle selectors={nav['light-mode']} text="light" /> | <Toggle selectors={nav['dark-mode']} text="dark" />
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
}
