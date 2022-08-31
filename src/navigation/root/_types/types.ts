import type { NavigatorScreenParams, RouteProp } from '@react-navigation/native'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { ForgotPasswordStackParamList } from '../../forgot-password/_types/types'
import { DrawerStackParamList } from '../../drawer/_types/types'

/**
 * NAVIGATOR PARAMS
 */

export type RootStackParamList = {
  entrance: undefined
  auth: undefined
  forgot_password_navigation: NavigatorScreenParams<ForgotPasswordStackParamList>
  drawer_navigation: NavigatorScreenParams<DrawerStackParamList>
}

/**
 * ROUTE PROP
 */

export type RootStackRouteProps<T extends keyof RootStackParamList> = RouteProp<
  RootStackParamList, // eslint-disable-line @typescript-eslint/indent
  T // eslint-disable-line @typescript-eslint/indent
>

/**
 * SCREEN PROP
 */

// To use just type with (exampleVar: ExampleStackScreenProps<'ExampleScreenName'>)
export type RootStackScreenProps<T extends keyof RootStackParamList> = NativeStackNavigationProp<
  RootStackParamList, // eslint-disable-line @typescript-eslint/indent
  T // eslint-disable-line @typescript-eslint/indent
>

/**
 * GLOBAL TYPE DECLARATION
 */

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
