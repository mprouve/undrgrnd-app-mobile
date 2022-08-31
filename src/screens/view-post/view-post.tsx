import { useNavigation } from '@react-navigation/native'
import { ViewPostScreenNavigationProp } from './_types/types'
import { MainContainer, PageName, LinkButton, LinkButtonText } from './styled-components/view-post'

export const ViewPost = (): JSX.Element => {
  const navigation = useNavigation<ViewPostScreenNavigationProp>()

  return (
    <MainContainer>
      <PageName>View Post</PageName>

      <LinkButton onPress={() => navigation.navigate('feed', { locationId: '' })}>
        <LinkButtonText>Feed</LinkButtonText>
      </LinkButton>
    </MainContainer>
  )
}

export default ViewPost
