import { useNavigation } from '@react-navigation/native'
import { ExploreScreenNavigationProp } from './_types/types'
import { MainContainer, PageName, LinkButton, LinkButtonText } from './styled-components/explore'

export const Explore = (): JSX.Element => {
  const navigation = useNavigation<ExploreScreenNavigationProp>()

  return (
    <MainContainer>
      <PageName>Explore</PageName>

      <LinkButton
        onPress={() => navigation.navigate('location', { locationId: 'ssldkjhfs8789sd7f' })}>
        <LinkButtonText>Location</LinkButtonText>
      </LinkButton>
    </MainContainer>
  )
}

export default Explore
