import type { AbsolutePath, RelativePath, EmailPath } from '@props/index';

export type MenuItemProps<T = AbsolutePath | RelativePath | EmailPath> = {
  label: string
  href: T
  onClick?: (href: T, e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void
  className?: string
}