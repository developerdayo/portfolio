import { useCallback, useRef } from 'react'

import { useRouter } from 'next/router'
import Link from 'next/link'

import type { AbsolutePath, RelativePath, MenuItemProps, ThemeMode } from '@props/index'
import { EMAIL_URL, GITHUB_URL, LINKEDIN_URL, PORTFOLIO_URL, THEME_MODES } from '@constants/index'
import useIsHomePage from '@hooks/useIsHomePage'

import Cursor from '@components/Cursor'
import Header from '@components/Header'
import Menu from '@components/Menu'
import MenuItem from '@components/MenuItem'
import ThemeControls from '@components/ThemeControls'
import ThemeControlsButton from '@components/ThemeControlsButton'

import headCss from '@styles/components/Header.module.scss'
import colorCss from '@styles/variables/_variables.color.module.scss'
import menuCss from '@styles/components/Menu.module.scss'

type Props = {
  children: JSX.Element
};

const menuItems = [
  {
    href: '/about-me' as RelativePath,
    label: 'about me',
  },
  {
    href: '/resume' as RelativePath,
    label: 'resume',
  },
  {
    href: EMAIL_URL,
    label: 'contact'
  },
]

const LinkedIn = ({ href, label, className }: MenuItemProps<AbsolutePath>) => {
  return (
    <li className={ className }>
      <Link href={ href } target='_blank'> { label } </Link>
    </li>
  )
}

export default function GlobalLayout({ children }: Props) {
  const router = useRouter()
  const buttonRefs = useRef<Record<ThemeMode, HTMLButtonElement | null>>({
    [THEME_MODES.LIGHT]: null,
    [THEME_MODES.DARK]: null,
  });

  const handleMenuItemClick = useCallback((linkPath: string, e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    setTimeout(() => {
      router.push(linkPath)
    }, 450)
  }, [router])
  
  return (
    <>
      <header className={ headCss.container }>
        <Header 
            title='sarah ferguson'
            subtitle='software developer | 🗽 NYC'
            portfolioUrl={ PORTFOLIO_URL }
            githubUrl={ GITHUB_URL }
            email={ EMAIL_URL }
        />
        
        <Menu
          items={ menuItems }
          renderItem={(item, index) => (
            <MenuItem key={ index } onClick={ handleMenuItemClick } { ...item } />
          )}
        >
          <LinkedIn href={ LINKEDIN_URL } label='LinkedIn' className={ menuCss.linkedin } />
          <ThemeControls modes={ [THEME_MODES.LIGHT, THEME_MODES.DARK] } buttonRefs={ buttonRefs }>
            {(mode, handleClick) => (
              <ThemeControlsButton
                key={ mode }
                ref={ el => { buttonRefs.current[mode] = el } }
                className={ menuCss[`${mode}-mode`] }
                onClick={ () => handleClick(mode) }
                mode={ mode }
              />
            )}
          </ThemeControls>
        </Menu>
      </header>

      { children }
      { useIsHomePage() && <Cursor /> }
      
      <style jsx global>{`
        #__next, main {
          height: 100%;
        }

        * {
          box-sizing: border-box;
        }

        img {
          max-width: 100%;
          height: auto;
        }

        h1,
        h2,
        p,
        span,
        ul {
          position: relative;
          margin: 0;
          z-index: var(--z-index-foreground-0);
        }

        ul {
          padding: 0;
          list-style: none;
        }

        main {
          position: relative;
        }

        code {
          background: ${colorCss['gray']};
          border-radius: 5px;
          color: ${colorCss['offBlack']};
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>
    </>
  )
}
