// theme.ts
import { DefaultTheme, Palette, Typography, Layout } from 'styled-components'

// EXPORTS
export const palette: Palette = {
  primary: '#BB3285',
  secondary: '#ffffff',
  tertiary: '#000000',
  white: '#ffffff',
  black: '#000000'
}

export const typography: Typography = {
  fontFamily: {
    regular: 'QuicksandSemiBold',
    strong: 'SedgwickAveDisplay'
  },
  fontSizes: {
    small: '12px',
    short: '14px',
    regular: '16px',
    tall: '18px',
    large: '20px',
    larger: '22px',
    extraLarge: '24px'
  },
  fontWeight: {
    extraLight: 200,
    light: 300,
    normal: 400,
    heavy: 500,
    extraHeavy: 600,
    bold: 700
  }
}

export const layout: Layout = {
  borderRadius: {
    small: '3px',
    regular: '5px',
    large: '10px'
  }
}

export const lightTheme: DefaultTheme = {
  palette,
  typography,
  colors: {
    text: {
      body: '#333333',
      heading: '#333333',
      subheading: '#777777',
      link: {
        standard: '#0000EE',
        visited: '#551A8B',
        active: '#EE0000'
      }
    },
    background: {
      primary: '#f5f5f5',
      secondary: '#ffffff',
      header: '#ffffff',
      bottomTabs: '#ffffff',
      drawer: '#ffffff'
    },
    border: {
      primary: '#333333',
      secondary: '#333333',
      drawerButton: '#eeeeee'
    },
    icons: {
      drawer: '#555555'
    }
  },
  layout
}

export const darkTheme: DefaultTheme = {
  palette,
  typography,
  colors: {
    text: {
      body: '#eeeeee',
      heading: '#eeeeee',
      subheading: '#cccccc',
      link: {
        standard: '#0000EE',
        visited: '#551A8B',
        active: '#EE0000'
      }
    },
    background: {
      primary: '#000000',
      secondary: '#1D1A1F',
      header: '#1D1A1F',
      bottomTabs: '#1D1A1F',
      drawer: '#1D1A1F'
    },
    border: {
      primary: '#333333',
      secondary: '#333333',
      drawerButton: '#2f2f2f'
    },
    icons: {
      drawer: '#aaaaaa'
    }
  },
  layout
}
