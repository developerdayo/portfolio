import Link from 'next/link'

import type { EmailPath, MenuItemProps } from '@props/index';

import { isEmailPath } from '@utils/index';

const MenuItem = ({ href, label, className, onClick}: MenuItemProps) => {
  const resolvedHref = isEmailPath(href) ? `mailto:${ href }` as EmailPath : href;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (onClick) {
      e.preventDefault()
      onClick(resolvedHref, e)
    }
  }

  return (
    <li className={ className }>
      <Link href={ resolvedHref } onClick={ handleClick }>
        {label}
      </Link>
    </li>
  )
}

export default MenuItem