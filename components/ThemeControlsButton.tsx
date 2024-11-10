import clsx from 'clsx'
import { forwardRef } from 'react'

import type { ThemeMode } from '@props/index'

type ThemeControlsButtonProps = {
  className: string;
  mode: ThemeMode
  onClick: () => void
}

const ThemeControlsButton = forwardRef<HTMLButtonElement, ThemeControlsButtonProps>(
  ({ className, mode, onClick }, ref) => {
    return (
      <button
        ref={ ref }
        className={ clsx(className, 'theme-button') }
        onClick={ onClick }
        type='button'
      >
        {mode}
      </button>
    );
  }
)

export default ThemeControlsButton