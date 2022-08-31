import ForgotPasswordStack from './stacks/stacks'
import ForgotPassword from '../../screens/forgot-password/forgot-password'
import ResetPassword from '../../screens/reset-password/reset-password'

export const ForgotPasswordNavigation = (): JSX.Element => {
  return (
    <ForgotPasswordStack.Navigator initialRouteName="forgot_password">
      <ForgotPasswordStack.Screen
        name="forgot_password"
        component={ForgotPassword}
        options={{ title: 'Forgot Password' }}
      />
      <ForgotPasswordStack.Screen
        name="reset_password"
        component={ResetPassword}
        options={{ title: 'Reset Password' }}
      />
    </ForgotPasswordStack.Navigator>
  )
}

export default ForgotPasswordNavigation
