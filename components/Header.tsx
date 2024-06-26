import Link from 'next/link';
import { useRouter } from 'next/router';

// components
import Menu from './Menu';

// styles
import helpers from '../styles/helpers/_helpers.module.scss';
import styles from '../styles/components/Header.module.scss';

type Props = {
  children?: JSX.Element;
}

export default function Nav({children}: Props) {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h1 className={styles['title']}>
          <Link href="/">sarah ferguson</Link>
        </h1>
        <span className={helpers['block']}>software developer | 🗽 NYC</span>
        <span className={helpers['block']}><Link href="https://github.com/developerdayo" target="_blank">github.com/developerdayo</Link></span>
      </div>
      {children}
      {router.pathname === '/' ? (
        <div className={styles.box}>
          <Menu />
        </div>
        ) : (
          <Menu />
        )
      }
    </div>
  );
}
