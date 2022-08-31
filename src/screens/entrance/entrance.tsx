import { useNavigation } from '@react-navigation/native'
import { EntranceScreenNavigationProp } from './_types/types'
import { MainContainer, PageName, LinkButton, LinkButtonText } from './styled-components/entrance'

export const Auth = (): JSX.Element => {
  const navigation = useNavigation<EntranceScreenNavigationProp>()

  return (
    <MainContainer>
      <PageName>Entrance</PageName>

      <LinkButton onPress={() => navigation.navigate('auth')}>
        <LinkButtonText>ENTER THE UNDRGRND</LinkButtonText>
      </LinkButton>
    </MainContainer>
  )
}

export default Auth
