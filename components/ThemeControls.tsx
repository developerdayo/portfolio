import { useCallback, useEffect } from 'react';
import { useTheme } from 'next-themes';

import { ThemeMode } from '@props/index';

import menuCss from '@styles/components/Menu.module.scss'

type ThemeControlsProps = {
  children: (mode: ThemeMode, handleClick: (mode: ThemeMode) => void) => React.ReactNode
  buttonRefs: React.MutableRefObject<Record<ThemeMode, HTMLButtonElement | null>>;
  modes: ThemeMode[]
}

const ThemeControls = ({ children, modes, buttonRefs }: ThemeControlsProps) => {
  const { theme, setTheme } = useTheme();

  const handleClick = useCallback(
    (newTheme: ThemeMode) => {
      setTheme(newTheme)
      Object.entries(buttonRefs.current).forEach(([mode, button]) => {
        if ( button ) { button.disabled = mode === newTheme }
      })
    },
    [setTheme, buttonRefs]
  )

  useEffect(() => {
    Object.entries(buttonRefs.current).forEach(([mode, button]) => {
      if (button) { button.disabled = mode === theme }
    })
  }, [theme, buttonRefs])

  return (
    <li className={ menuCss['theme-controls'] }>
      { modes.map((mode) => children(mode, handleClick)) }
    </li>
  )
}

export default ThemeControls