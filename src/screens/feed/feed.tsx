import { useNavigation } from '@react-navigation/native'
import { FeedScreenNavigationProp } from './_types/types'
import { MainContainer, PageName, LinkButton, LinkButtonText } from './styled-components/feed'

export const Feed = (): JSX.Element => {
  const navigation = useNavigation<FeedScreenNavigationProp>()

  return (
    <MainContainer>
      <PageName>Feed</PageName>

      <LinkButton onPress={() => navigation.openDrawer()}>
        <LinkButtonText>Side Menu</LinkButtonText>
      </LinkButton>

      <LinkButton onPress={() => navigation.push('notifications')}>
        <LinkButtonText>Notifications</LinkButtonText>
      </LinkButton>

      <LinkButton onPress={() => navigation.push('profile', { userId: 'lskjaso8d7a9sd7' })}>
        <LinkButtonText>Profile</LinkButtonText>
      </LinkButton>

      <LinkButton onPress={() => navigation.push('location', { locationId: 'alkjasd8o798s' })}>
        <LinkButtonText>Location</LinkButtonText>
      </LinkButton>

      <LinkButton onPress={() => navigation.push('view_post', { postId: 'lskjsdf98s7df98s7df' })}>
        <LinkButtonText>View Post</LinkButtonText>
      </LinkButton>
    </MainContainer>
  )
}

export default Feed
