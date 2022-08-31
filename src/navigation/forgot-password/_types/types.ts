import type { CompositeNavigationProp, RouteProp } from '@react-navigation/native'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList, RootStackScreenProps } from '../../root/_types/types'

/**
 * NAVIGATOR PARAMS
 */

export type ForgotPasswordStackParamList = {
  forgot_password: undefined
  // eslint-disable-next-line @typescript-eslint/member-delimiter-style
  reset_password: { email: string; phone?: never } | { email?: never; phone: string }
}

/**
 * ROUTE PROP
 */

export type ForgotPasswordStackRouteProps<T extends keyof ForgotPasswordStackParamList> = RouteProp<
  ForgotPasswordStackParamList, // eslint-disable-line @typescript-eslint/indent
  T // eslint-disable-line @typescript-eslint/indent
>

/**
 * SCREEN PROP
 */

// To use just type with (exampleVar: ExampleStackScreenProps<'ExampleScreenName'>)
export type ForgotPasswordStackScreenProps<T extends keyof ForgotPasswordStackParamList> =
  CompositeNavigationProp<
    NativeStackNavigationProp<ForgotPasswordStackParamList, T>, // eslint-disable-line @typescript-eslint/indent
    RootStackScreenProps<keyof RootStackParamList> // eslint-disable-line @typescript-eslint/indent
  >
