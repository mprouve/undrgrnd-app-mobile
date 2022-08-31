import { useNavigation } from '@react-navigation/native'
import { StyleSheet } from 'react-native'
import { DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer'
import { useAppDispatch } from '../../hooks/redux'
import { clearIsAuthenticated } from '../../redux/slices/is-authenticated'
import { lightTheme, darkTheme } from '../../res/theme/theme'
import {
  MainContainer,
  ImageBackground,
  ImageOverlay,
  ImageContainer,
  Image,
  Name,
  DrawerListContainer,
  DrawerLinkButton,
  DrawerLinkText,
  Separator
} from './styled-components/drawer'

export const Drawer = (props: DrawerContentComponentProps): JSX.Element => {
  const navigation = useNavigation()
  const dispatch = useAppDispatch()
  const theme = 'dark'

  return (
    <MainContainer>
      <DrawerContentScrollView
        {...props}
        style={
          theme === 'light'
            ? styles.drawerContentScrollViewLight
            : styles.drawerContentScrollViewDark
        }>
        <ImageBackground source={require('../../../assets/images/backgrounds/graffiti.png')}>
          <ImageOverlay>
            <ImageContainer>
              <Image source={require('../../../assets/images/logos/crown-white.png')} />
            </ImageContainer>

            <Name>Marco Prouvé</Name>
          </ImageOverlay>
        </ImageBackground>

        <DrawerListContainer>
          <DrawerLinkButton
            onPress={() =>
              navigation.navigate('drawer_navigation', {
                screen: 'authenticated_navigation',
                params: { screen: 'notifications' }
              })
            }
            style={styles.firstLink}>
            <DrawerLinkText>Notifications</DrawerLinkText>
          </DrawerLinkButton>

          <Separator />

          <DrawerLinkButton
            onPress={() =>
              navigation.navigate('drawer_navigation', {
                screen: 'authenticated_navigation',
                params: { screen: 'settings' }
              })
            }>
            <DrawerLinkText>Settings</DrawerLinkText>
          </DrawerLinkButton>

          <Separator />

          <DrawerLinkButton onPress={() => {}}>
            <DrawerLinkText>FAQ</DrawerLinkText>
          </DrawerLinkButton>

          <Separator />

          <DrawerLinkButton onPress={() => {}}>
            <DrawerLinkText>Terms of Use</DrawerLinkText>
          </DrawerLinkButton>

          <Separator />

          <DrawerLinkButton onPress={() => {}}>
            <DrawerLinkText>Privacy Policy</DrawerLinkText>
          </DrawerLinkButton>

          <Separator />

          <DrawerLinkButton onPress={() => {}}>
            <DrawerLinkText>Copyright Policy</DrawerLinkText>
          </DrawerLinkButton>

          <Separator />

          <DrawerLinkButton onPress={() => dispatch(clearIsAuthenticated())}>
            <DrawerLinkText>Logout</DrawerLinkText>
          </DrawerLinkButton>
        </DrawerListContainer>
      </DrawerContentScrollView>
    </MainContainer>
  )
}

const styles = StyleSheet.create({
  drawerContentScrollViewLight: {
    backgroundColor: lightTheme.colors.background.drawer
  },
  drawerContentScrollViewDark: {
    backgroundColor: darkTheme.colors.background.drawer
  },
  firstLink: {
    marginTop: 5
  }
})

export default Drawer
