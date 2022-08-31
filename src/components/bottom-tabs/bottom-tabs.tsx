import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import Ionicons from '@expo/vector-icons/Ionicons'
import { FontAwesome, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import { useAppSelector } from '../../hooks/redux'
import { lightTheme, darkTheme } from '../../res/theme/theme'
import { MainContainer, TabContainer } from './styled-components/bottom-tabs'

export const BottomTabs = (): JSX.Element | null => {
  const navigation = useNavigation()
  const isAuthenticated = useAppSelector((state) => state.isAuthenticated.value)
  const [currentTab, setCurrentTab] = useState('feed')
  const theme = 'dark'
  const iconColorInactive =
    theme === 'light' ? lightTheme.colors.icons.drawer : darkTheme.colors.icons.drawer
  const iconColorActive = theme === 'light' ? lightTheme.palette.primary : darkTheme.palette.primary

  const handleOnPress = (name: string, params?: any): void => {
    const canGoBack: boolean = navigation.canGoBack()

    // Check if user has a stack of routes within tab,
    // If so, allow them to reset using current tab
    if (name !== currentTab || (name === currentTab && canGoBack)) {
      navigation.reset({
        index: 0,
        routes: [
          {
            name: 'drawer_navigation',
            state: {
              routes: [
                {
                  name: 'authenticated_navigation',
                  state: {
                    routes: [
                      {
                        name,
                        params
                      }
                    ]
                  }
                }
              ]
            }
          }
        ]
      })

      setCurrentTab(name)
    }
  }

  if (!isAuthenticated) return null

  return (
    <MainContainer>
      <TabContainer onPress={() => handleOnPress('feed', { locationId: '' })}>
        <Ionicons
          name="home"
          size={24}
          color={currentTab === 'feed' ? iconColorActive : iconColorInactive}
        />
      </TabContainer>

      <TabContainer onPress={() => handleOnPress('explore')}>
        <FontAwesome
          name="globe"
          size={26}
          color={currentTab === 'explore' ? iconColorActive : iconColorInactive}
        />
      </TabContainer>

      <TabContainer onPress={() => handleOnPress('profile', { userId: '' })}>
        <Ionicons
          name="person-circle"
          size={27}
          color={currentTab === 'profile' ? iconColorActive : iconColorInactive}
        />
      </TabContainer>

      <TabContainer onPress={() => handleOnPress('crowned')}>
        <MaterialCommunityIcons
          name="crown-outline"
          size={29}
          color={currentTab === 'crowned' ? iconColorActive : iconColorInactive}
        />
      </TabContainer>

      <TabContainer onPress={() => handleOnPress('events')}>
        <MaterialIcons
          name="event-note"
          size={26}
          color={currentTab === 'events' ? iconColorActive : iconColorInactive}
          style={{ marginTop: 2 }}
        />
      </TabContainer>
    </MainContainer>
  )
}

export default BottomTabs
