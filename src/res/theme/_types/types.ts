// TYPES
declare module 'styled-components' {
  export interface Palette {
    primary: string
    secondary: string
    tertiary: string
    white: string
    black: string
  }

  export interface Typography {
    fontFamily: {
      regular: string
      strong: string
    }
    fontSizes: {
      small: string
      short: string
      regular: string
      tall: string
      large: string
      larger: string
      extraLarge: string
    }
    fontWeight: {
      extraLight: 200
      light: 300
      normal: 400
      heavy: 500
      extraHeavy: 600
      bold: 700
    }
  }

  export interface Colors {
    text: {
      body: string
      heading: string
      subheading: string
      link: {
        standard: string
        visited: string
        active: string
      }
    }
    background: {
      primary: string
      secondary: string
      header: string
      bottomTabs: string
      drawer: string
    }
    border: {
      primary: string
      secondary: string
      drawerButton: string
    }
    icons: {
      drawer: string
    }
  }

  export interface Layout {
    borderRadius: {
      small: string
      regular: string
      large: string
    }
  }

  export interface DefaultTheme {
    palette: Palette
    typography: Typography
    colors: Colors
    layout: Layout
  }
}
