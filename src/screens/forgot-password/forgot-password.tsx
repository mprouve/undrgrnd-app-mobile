import { useNavigation } from '@react-navigation/native'
import { ForgotPasswordScreenNavigationProp } from './_types/types'
import {
  MainContainer,
  PageName,
  LinkButton,
  LinkButtonText
} from './styled-components/forgot-password'

export const ForgotPassword = (): JSX.Element => {
  const navigation = useNavigation<ForgotPasswordScreenNavigationProp>()

  return (
    <MainContainer>
      <PageName>Forgot Password</PageName>

      <LinkButton
        onPress={() =>
          navigation.navigate('reset_password', {
            email: 'test@example.com'
          })
        }>
        <LinkButtonText>Reset Password (Email)</LinkButtonText>
      </LinkButton>

      <LinkButton
        onPress={() =>
          navigation.navigate('reset_password', {
            phone: '+1234567890'
          })
        }>
        <LinkButtonText>Reset Password (Phone)</LinkButtonText>
      </LinkButton>

      <LinkButton onPress={() => navigation.navigate('auth')}>
        <LinkButtonText>Back</LinkButtonText>
      </LinkButton>
    </MainContainer>
  )
}

export default ForgotPassword
