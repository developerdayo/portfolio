import type { AbsolutePath, IncompleteAbsolutePath, EmailPath } from '@props/index'

// to be used by defining literal types
export const EMAIL_LITERAL_TYPE = 'sarah.an.ferguson@gmail.com'

export const PORTFOLIO_URL = 'https://developerdayo.github.io/portfolio' as AbsolutePath
export const GITHUB_URL = 'github.com/developerdayo' as IncompleteAbsolutePath
export const LINKEDIN_URL = 'https://www.linkedin.com/in/sarah-ferguson-22167016/' as AbsolutePath
export const EMAIL_URL = EMAIL_LITERAL_TYPE as EmailPath

export const THEME_MODES = {
  LIGHT: 'light',
  DARK: 'dark'
} as const