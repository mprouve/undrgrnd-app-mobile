import { useNavigation } from '@react-navigation/native'
import { AuthScreenNavigationProp } from './_types/types'
import { useAppDispatch } from '../../hooks/redux'
import { setIsAuthenticated } from '../../redux/slices/is-authenticated'
import { MainContainer, PageName, LinkButton, LinkButtonText } from './styled-components/auth'

export const Auth = (): JSX.Element => {
  const navigation = useNavigation<AuthScreenNavigationProp>()
  const dispatch = useAppDispatch()

  return (
    <MainContainer>
      <PageName>Authentication</PageName>

      <LinkButton onPress={() => dispatch(setIsAuthenticated({ value: true }))}>
        <LinkButtonText>Login</LinkButtonText>
      </LinkButton>

      <LinkButton
        onPress={() =>
          navigation.navigate('forgot_password_navigation', { screen: 'forgot_password' })
        }>
        <LinkButtonText>Forgot Password</LinkButtonText>
      </LinkButton>
    </MainContainer>
  )
}

export default Auth
