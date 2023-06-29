import Link from 'next/link';
import { useRouter } from 'next/router';
import Toggle from './Toggle';

// styles
import styles from '../styles/components/Menu.module.scss';

const Menu = () => {
  const router = useRouter();

  const handleClick = (linkPath: string, e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setTimeout(() => {
      router.push(linkPath);
    }, 450);
  }

  return (
    <nav aria-labelledby="navMenuLabel" className={styles.menu}>
      <ol className={router.pathname === '/' ? `${styles.home}` : `${styles.interior}` }>
        <li><Link onClick={(e) => handleClick('/about-me', e)} href="/about-me">about me</Link></li>
        <li><Link onClick={(e) => handleClick('/resume', e)} href="/resume">resume</Link></li>
        <li><Link onClick={(e) => handleClick('mailto:sarah.an.ferguson@gmail.com', e)} href="mailto:sarah.an.ferguson@gmail.com">contact</Link></li>
        <li className={`${styles['li-absolute']} ${styles['li-absolute-top']}`}>
          <Link href="https://www.linkedin.com/in/sarah-ferguson-22167016/" target="_blank">linkedin</Link>
        </li>
        <li className={styles['li-absolute']}>
          <Toggle selectors={styles['light-mode']} text="light" /> | <Toggle selectors={styles['dark-mode']} text="dark" />
        </li>
      </ol>
    </nav>
  );
}

export default Menu;