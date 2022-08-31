import { useAppSelector } from '../../hooks/redux'
import RootStack from './stacks/stacks'
import Entrance from '../../screens/entrance/entrance'
import Auth from '../../screens/auth/auth'
import ForgotPasswordNavigation from '../forgot-password/forgot-password'
import DrawerNavigation from '../drawer/drawer'

export const RootNavigation = (): JSX.Element => {
  const isAuthenticated = useAppSelector((state) => state.isAuthenticated.value)

  return (
    <RootStack.Navigator initialRouteName="entrance">
      {!isAuthenticated ? (
        <RootStack.Group>
          <RootStack.Screen name="entrance" component={Entrance} options={{ headerShown: false }} />
          <RootStack.Screen name="auth" component={Auth} options={{ headerShown: false }} />
          <RootStack.Screen
            name="forgot_password_navigation"
            component={ForgotPasswordNavigation}
            options={{ headerShown: false }}
          />
        </RootStack.Group>
      ) : (
        <RootStack.Screen
          name="drawer_navigation"
          component={DrawerNavigation}
          options={{ headerShown: false }}
        />
      )}
    </RootStack.Navigator>
  )
}

export default RootNavigation
