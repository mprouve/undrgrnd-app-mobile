import { useNavigation } from '@react-navigation/native'
import { FollowingScreenNavigationProp } from './_types/types'
import { MainContainer, PageName, LinkButton, LinkButtonText } from './styled-components/following'

export const Following = (): JSX.Element => {
  const navigation = useNavigation<FollowingScreenNavigationProp>()

  return (
    <MainContainer>
      <PageName>Following</PageName>

      <LinkButton onPress={() => navigation.goBack()}>
        <LinkButtonText>Back</LinkButtonText>
      </LinkButton>
    </MainContainer>
  )
}

export default Following
