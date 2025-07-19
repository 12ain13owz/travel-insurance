export enum Theme {
  CORPORATE = 'corporate',
  BLACK = 'black',
}

export interface ThemeConfig {
  defaultTheme: Theme
  lightTheme: Theme
  darkTheme: Theme
}

export const themeConfig: ThemeConfig = {
  defaultTheme: Theme.CORPORATE,
  lightTheme: Theme.CORPORATE,
  darkTheme: Theme.BLACK,
}
