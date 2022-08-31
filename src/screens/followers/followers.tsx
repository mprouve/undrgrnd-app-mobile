import { useNavigation } from '@react-navigation/native'
import { FollowersScreenNavigationProp } from './_types/types'
import { MainContainer, PageName, LinkButton, LinkButtonText } from './styled-components/followers'

export const Followers = (): JSX.Element => {
  const navigation = useNavigation<FollowersScreenNavigationProp>()

  return (
    <MainContainer>
      <PageName>Followers</PageName>

      <LinkButton onPress={() => navigation.goBack()}>
        <LinkButtonText>Back</LinkButtonText>
      </LinkButton>
    </MainContainer>
  )
}

export default Followers
