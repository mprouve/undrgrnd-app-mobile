import { useAppSelector } from '../../hooks/redux'
import { SafeAreaView } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import RootNavigation from '../../navigation/root/root'
import BottomTabs from '../bottom-tabs/bottom-tabs'
import { navigationRef } from '../../navigation/root/stacks/stacks'
import { lightTheme, darkTheme } from '../../res/theme/theme'

export const Application = (): JSX.Element => {
  const isAuthenticated = useAppSelector((state) => state.isAuthenticated.value)
  const theme = 'dark'
  const selectedTheme = theme === 'light' ? lightTheme : darkTheme

  return (
    <>
      <NavigationContainer ref={navigationRef}>
        {isAuthenticated ? (
          <SafeAreaView
            style={{ flex: 1, backgroundColor: selectedTheme.colors.background.bottomTabs }}
            edges={['bottom']}>
            <RootNavigation />

            <BottomTabs />
          </SafeAreaView>
        ) : (
          <>
            <RootNavigation />

            <BottomTabs />
          </>
        )}
      </NavigationContainer>

      <StatusBar animated={true} style={theme === 'light' ? 'dark' : 'light'} />
    </>
  )
}

export default Application
