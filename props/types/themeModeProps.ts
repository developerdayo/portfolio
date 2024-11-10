import { THEME_MODES } from "@constants/index"

export type ThemeMode = typeof THEME_MODES[keyof typeof THEME_MODES]