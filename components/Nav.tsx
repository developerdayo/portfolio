import Link from 'next/link';

// styles
import helpers from '../styles/helpers/_helpers.module.scss';
import nav from '../styles/components/Nav.module.scss';
import Menu from './Menu';

type Props = {
  children?: JSX.Element;
}

export default function Nav({children}: Props) {

  return (
    <div className={nav.container}>
      <div className={`${nav.box} ${nav['box--top']}`}>
        <h1 className={nav['title']}>
          <Link href="/">sarah ferguson</Link>
        </h1>
        <span className={helpers['block']}>frontend engineer</span>
        <span className={helpers['block']}>sarah.an.ferguson@gmail.com</span>
      </div>
      {children}
      <div className={`${nav.box} ${nav['box--bottom']}`}>
        <Menu />
      </div>
    </div>
  );
}
