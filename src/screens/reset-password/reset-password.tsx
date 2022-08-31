import { useRoute, useNavigation } from '@react-navigation/native'
import { ResetPasswordScreenNavigationProp, ResetPasswordScreenRouteProp } from './_types/types'
import {
  MainContainer,
  PageName,
  LinkButton,
  LinkButtonText
} from './styled-components/reset-password'

export const ResetPassword = (): JSX.Element => {
  const navigation = useNavigation<ResetPasswordScreenNavigationProp>()
  const route = useRoute<ResetPasswordScreenRouteProp>()
  const { email, phone } = route.params

  return (
    <MainContainer>
      {email && <PageName>{`Reset Password\nEmail: ${email ?? ''}`}</PageName>}
      {phone && <PageName>{`Reset Password\nPhone: ${phone ?? ''}`}</PageName>}

      <LinkButton onPress={() => navigation.navigate('forgot_password')}>
        <LinkButtonText>Back</LinkButtonText>
      </LinkButton>
    </MainContainer>
  )
}

export default ResetPassword
