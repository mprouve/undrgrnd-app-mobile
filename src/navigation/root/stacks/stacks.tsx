import { createNavigationContainerRef } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamList } from '../_types/types'

const RootStack = createNativeStackNavigator<RootStackParamList>()

// Navigation Ref
export const navigationRef = createNavigationContainerRef<RootStackParamList>()

// export const navigate = (
//   name: keyof RootStackParamList,
//   params?: StackScreenProps<RootStackParamList>['route']['params']
// ): void => {
//   if (navigationRef.isReady()) {
//     navigationRef.navigate(name, params)
//   } else {
//     // Can choose to do something if app hasn't mounted
//   }
// }

export const navigate = (name: keyof RootStackParamList, params?: any): void => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params)
  } else {
    // Can choose to do something if app hasn't mounted
  }
}

export default RootStack
