import { useNavigation } from '@react-navigation/native'
import { SearchScreenNavigationProp } from './_types/types'
import { MainContainer, PageName, LinkButton, LinkButtonText } from './styled-components/search'

export const Search = (): JSX.Element => {
  const navigation = useNavigation<SearchScreenNavigationProp>()

  return (
    <MainContainer>
      <PageName>View Post</PageName>

      <LinkButton onPress={() => navigation.navigate('profile', { userId: 'sldkjf9s8df7s9d87f' })}>
        <LinkButtonText>Profile</LinkButtonText>
      </LinkButton>

      <LinkButton
        onPress={() => navigation.navigate('location', { locationId: 'sdlkjsdf87ds9f8s9d' })}>
        <LinkButtonText>Location</LinkButtonText>
      </LinkButton>

      <LinkButton onPress={() => navigation.navigate('explore')}>
        <LinkButtonText>Explore</LinkButtonText>
      </LinkButton>
    </MainContainer>
  )
}

export default Search
