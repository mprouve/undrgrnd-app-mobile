import { useNavigation, useRoute } from '@react-navigation/native'
import { ProfileScreenNavigationProp, ProfileScreenRouteProp } from './_types/types'
import { MainContainer, PageName, LinkButton, LinkButtonText } from './styled-components/profile'

export const Profile = (): JSX.Element => {
  const navigation = useNavigation<ProfileScreenNavigationProp>()
  const route = useRoute<ProfileScreenRouteProp>()
  const routeUserId: string = route?.params?.userId ?? ''

  return (
    <MainContainer>
      <PageName>{routeUserId ? `Profile\nID: ${routeUserId}` : 'My Profile'}</PageName>

      <LinkButton onPress={() => navigation.navigate('followers', { userId: 'ldkjfsd9f87923' })}>
        <LinkButtonText>Followers</LinkButtonText>
      </LinkButton>

      <LinkButton onPress={() => navigation.navigate('following', { userId: 'ldkjfsd9f87923' })}>
        <LinkButtonText>Following</LinkButtonText>
      </LinkButton>

      <LinkButton onPress={() => navigation.navigate('profile', { userId: 'ldkjfsd9f87923' })}>
        <LinkButtonText>Profile</LinkButtonText>
      </LinkButton>

      <LinkButton onPress={() => navigation.goBack()}>
        <LinkButtonText>Back</LinkButtonText>
      </LinkButton>
    </MainContainer>
  )
}

export default Profile
