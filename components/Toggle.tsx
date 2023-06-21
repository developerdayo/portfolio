import { useTheme } from 'next-themes';
import { useEffect, useRef, useState } from 'react';

type Props = {
  selectors: string;
  text: string;
}

const Toggle = ({ selectors, text }: Props) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const button = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMounted(true);
    if (button?.current?.innerText === theme) {
      button?.current?.setAttribute('disabled', '');
    }
  }, [mounted]);

  if (!mounted) {
    return null;
  }

  const setLight = () => {
    button?.current?.setAttribute('disabled', '');
    button?.current?.nextElementSibling?.removeAttribute('disabled');
    setTheme('light');
  }

  const setDark = () => {
    button?.current?.setAttribute('disabled', '');
    button?.current?.previousElementSibling?.removeAttribute('disabled');
    setTheme('dark');
  }

  return (
    <button
      ref={button}
      onClick={() => {
        if (theme === 'light') {
          return (
            setDark()
          );
        }
        return setLight();
      }}
      type='button'
      className={`${selectors} theme-button`}
    >
      {text}
    </button>
  )
}

export default Toggle;
