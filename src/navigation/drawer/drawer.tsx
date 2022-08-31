import DrawerStack from './stacks/stacks'
import Drawer from '../../components/drawer/drawer'
import AuthenticatedNavigation from '../authenticated/authenticated'

export const DrawerNavigation = (): JSX.Element => {
  return (
    <DrawerStack.Navigator
      drawerContent={(props) => <Drawer {...props} />}
      screenOptions={{ headerShown: false }}>
      <DrawerStack.Screen name="authenticated_navigation" component={AuthenticatedNavigation} />
    </DrawerStack.Navigator>
  )
}

export default DrawerNavigation
