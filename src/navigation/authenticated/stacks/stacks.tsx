import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AuthenticatedStackParamList } from '../_types/types'

const AuthenticatedStack = createNativeStackNavigator<AuthenticatedStackParamList>()

export default AuthenticatedStack
