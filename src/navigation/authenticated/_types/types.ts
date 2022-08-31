import type { CompositeNavigationProp, RouteProp } from '@react-navigation/native'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { DrawerStackParamList, DrawerStackScreenProps } from '../../drawer/_types/types'

/**
 * NAVIGATOR PARAMS
 */

export type AuthenticatedStackParamList = {
  // Bottom Tab Screens
  feed: { locationId?: string }
  explore: undefined
  profile: { userId: string }
  crowned: undefined
  events: undefined
  // Secondary Screens
  search: { query: string }
  event: { eventId: string }
  followers: { userId: string }
  following: { userId: string }
  location: { locationId: string }
  view_post: { postId: string }
  create_post_selection: { locationId: string }
  create_post_form: { locationId: string }
  // Header Screens
  settings: undefined
  notifications: undefined
}

/**
 * ROUTE PROP
 */

export type AuthenticatedStackRouteProps<T extends keyof AuthenticatedStackParamList> = RouteProp<
  AuthenticatedStackParamList, // eslint-disable-line @typescript-eslint/indent
  T // eslint-disable-line @typescript-eslint/indent
>

/**
 * SCREEN PROP
 */

// To use just type with (exampleVar: ExampleStackScreenProps<'ExampleScreenName'>)
export type AuthenticatedStackScreenProps<T extends keyof AuthenticatedStackParamList> =
  CompositeNavigationProp<
    NativeStackNavigationProp<AuthenticatedStackParamList, T>, // eslint-disable-line @typescript-eslint/indent
    DrawerStackScreenProps<keyof DrawerStackParamList> // eslint-disable-line @typescript-eslint/indent
  >
