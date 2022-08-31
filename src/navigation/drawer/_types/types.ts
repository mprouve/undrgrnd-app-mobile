import type {
  CompositeNavigationProp,
  NavigatorScreenParams,
  RouteProp
} from '@react-navigation/native'
import type { DrawerNavigationProp } from '@react-navigation/drawer'
import { RootStackParamList, RootStackScreenProps } from '../../root/_types/types'
import { AuthenticatedStackParamList } from '../../authenticated/_types/types'

/**
 * NAVIGATOR PARAMS
 */

export type DrawerStackParamList = {
  authenticated_navigation: NavigatorScreenParams<AuthenticatedStackParamList>
}

/**
 * ROUTE PROP
 */

export type DrawerStackRouteProps<T extends keyof DrawerStackParamList> = RouteProp<
  DrawerStackParamList, // eslint-disable-line @typescript-eslint/indent
  T // eslint-disable-line @typescript-eslint/indent
>

/**
 * SCREEN PROP
 */

// To use just type with (exampleVar: ExampleStackScreenProps<'ExampleScreenName'>)
export type DrawerStackScreenProps<T extends keyof DrawerStackParamList> = CompositeNavigationProp<
  DrawerNavigationProp<DrawerStackParamList, T>, // eslint-disable-line @typescript-eslint/indent
  RootStackScreenProps<keyof RootStackParamList> // eslint-disable-line @typescript-eslint/indent
>
