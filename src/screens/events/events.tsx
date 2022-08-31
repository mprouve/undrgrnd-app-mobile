import { useNavigation } from '@react-navigation/native'
import { EventsScreenNavigationProp } from './_types/types'
import { MainContainer, PageName, LinkButton, LinkButtonText } from './styled-components/events'

export const Events = (): JSX.Element => {
  const navigation = useNavigation<EventsScreenNavigationProp>()

  return (
    <MainContainer>
      <PageName>Events</PageName>

      <LinkButton onPress={() => navigation.navigate('event', { eventId: 'slkjsdofsd098sd0f' })}>
        <LinkButtonText>Event</LinkButtonText>
      </LinkButton>
    </MainContainer>
  )
}

export default Events
