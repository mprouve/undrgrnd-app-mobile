import { useNavigation } from '@react-navigation/native'
import { NotificationsScreenNavigationProp } from './_types/types'
import {
  MainContainer,
  PageName,
  LinkButton,
  LinkButtonText
} from './styled-components/notifications'

export const Notifications = (): JSX.Element => {
  const navigation = useNavigation<NotificationsScreenNavigationProp>()

  return (
    <MainContainer>
      <PageName>Notifications</PageName>

      <LinkButton onPress={() => navigation.navigate('feed', { locationId: '' })}>
        <LinkButtonText>Feed</LinkButtonText>
      </LinkButton>
    </MainContainer>
  )
}

export default Notifications
