import 'react-native-gesture-handler'
import Constants from 'expo-constants'
import { useState, useEffect } from 'react'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components/native'
import store from './src/redux/store'
import { lightTheme, darkTheme } from './src/res/theme/theme'
import Loading from './src/screens/loading/loading'
import { logger } from './src/logger/logger'
import Application from './src/components/application/application'

// Function to keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync()
  .then((data) => logger.log(`SplashScreen.preventAutoHideAsync() succeeded: ${data.toString()}`))
  .catch(logger.warn)

logger.log('NODE_ENV: ', Constants?.manifest?.extra?.env) //eslint-disable-line

export const App = (): JSX.Element => {
  const [fontsLoaded] = useFonts({
    SedgwickAveDisplay: require('./assets/fonts/sedgwick-ave-display/SedgwickAveDisplay-Regular.ttf'),
    QuicksandRegular: require('./assets/fonts/Quicksand/static/Quicksand-Regular.ttf'),
    QuicksandSemiBold: require('./assets/fonts/Quicksand/static/Quicksand-SemiBold.ttf'),
    QuicksandBold: require('./assets/fonts/Quicksand/static/Quicksand-Bold.ttf')
  })
  const [loading, setLoading] = useState(true)
  const [theme, setTheme] = useState('dark')
  const selectedTheme = theme === 'dark' ? darkTheme : lightTheme

  // Load the app here
  useEffect(() => {
    // Hide splash screen after 2 seconds
    setTimeout(() => {
      SplashScreen.hideAsync()
        .then((data) => logger.log(`SplashScreen.hideAsync() succeeded: ${data.toString()}`))
        .catch(logger.warn)
    }, 2000)

    AsyncStorage.getItem('@theme')
      .then((data) => {
        if (data) setTheme(data)

        setLoading(false)
      })
      .catch((e) => {
        logger.warn(e)
        setLoading(false)
      })
  }, [])

  if (loading || !fontsLoaded) {
    return <Loading />
  }

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <ThemeProvider theme={selectedTheme}>
          <Application />
        </ThemeProvider>
      </Provider>
    </SafeAreaProvider>
  )
}

export default App
