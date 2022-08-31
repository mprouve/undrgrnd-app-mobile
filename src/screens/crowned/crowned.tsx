import { useNavigation } from '@react-navigation/native'
import { CrownedScreenNavigationProp } from './_types/types'
import { MainContainer, PageName, LinkButton, LinkButtonText } from './styled-components/crowned'

export const Crowned = (): JSX.Element => {
  const navigation = useNavigation<CrownedScreenNavigationProp>()

  return (
    <MainContainer>
      <PageName>The Crowned</PageName>

      <LinkButton
        onPress={() => navigation.navigate('profile', { userId: 'ksjhfs9d8798dsdfsdff' })}>
        <LinkButtonText>Profile</LinkButtonText>
      </LinkButton>

      <LinkButton onPress={() => navigation.navigate('location', { locationId: 'sldkjfh98sd7f' })}>
        <LinkButtonText>Location</LinkButtonText>
      </LinkButton>
    </MainContainer>
  )
}

export default Crowned
