import clsx from 'clsx';

import type { MenuItemProps } from '@props/index';

import useIsHomePage from '@hooks/useIsHomePage';

import MenuItem from '@components/MenuItem'

import menuCss from '@styles/components/Menu.module.scss'

type MenuProps = {
  children: React.ReactNode
  items: MenuItemProps[]
  renderItem?: (item: MenuItemProps, index: number) => React.ReactNode
}

const Menu = ({
  children,
  items,
  renderItem,
}: MenuProps) => {
  const isHomePage = useIsHomePage()

  return (
    <div className={ clsx(menuCss.box, isHomePage ? menuCss['home'] : menuCss['interior']) }>
      <nav aria-label="Main Navigation" className={ menuCss.menu }>
        <ol className={ isHomePage ? menuCss.home : menuCss.interior }>
          {items.map((item, index) =>
            renderItem ? renderItem(item, index) : <MenuItem key={ index } { ...item } />
          )}
          { children }
        </ol>
      </nav>
    </div>
  );
}

export default Menu;