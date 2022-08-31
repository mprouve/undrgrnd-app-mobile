import 'dotenv/config'
import { ExpoConfig } from '@expo/config-types'

interface ConfigInterface {
  env: 'development' | 'staging' | 'production'
  log_level: 'warn' | 'log'
}

const extra = (): ConfigInterface => {
  const development: ConfigInterface = {
    env: 'development',
    log_level: 'log'
  }

  const staging: ConfigInterface = {
    env: 'staging',
    log_level: 'log'
  }

  const production: ConfigInterface = {
    env: 'development',
    log_level: 'warn'
  }

  switch (process.env.REACT_APP_NODE_ENV) {
    case 'development':
      return development
    case 'staging':
      return staging
    case 'production':
      return production
    default:
      return development
  }
}

const config: ExpoConfig = {
  name: 'undrgrnd-app-mobile',
  slug: 'undrgrnd-app-mobile',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/images/icon.png',
  userInterfaceStyle: 'light',
  splash: {
    image: './assets/images/splash.png',
    resizeMode: 'cover',
    backgroundColor: '#1D1A1F'
  },
  updates: {
    fallbackToCacheTimeout: 0
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: true,
    requireFullScreen: true
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/images/adaptive-icon.png',
      backgroundColor: '#FFFFFF'
    }
  },
  web: {
    favicon: './assets/images/favicon.png'
  },
  extra: extra()
}

export default config
