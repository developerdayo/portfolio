import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'

import type { AbsolutePath, EmailPath, IncompleteAbsolutePath } from '@props/index'

import helpersCss from '@styles/helpers/_helpers.module.scss'
import headerCss from '@styles/components/Header.module.scss'

type HeaderProps = {
  email: EmailPath
  githubUrl: IncompleteAbsolutePath
  portfolioUrl: AbsolutePath
  subtitle: string
  title: string
}

export default function Header({
  email,
  githubUrl,
  portfolioUrl,
  subtitle,
  title,
}: HeaderProps) {
  const router = useRouter()

  return (
    <div className={ headerCss.box }>
      <h1 className={ headerCss['title'] }> <Link href='/'> { title } </Link> </h1>
      <span className={ helpersCss['block'] }> { subtitle } </span>
      <span className={
        clsx( helpersCss['block'], helpersCss['print-hidden'] )
      }>
        <Link href={ `https://${ githubUrl }` } target="_blank"> { githubUrl } </Link>
      </span>
      <span className={ helpersCss['print-visible'] } aria-hidden='true'> { portfolioUrl } </span>
      <span className={ helpersCss['print-visible'] } aria-hidden='true'> { email } </span>
    </div>
  );
}