import { useNavigation, useRoute } from '@react-navigation/native'
import { EventScreenNavigationProp, EventScreenRouteProp } from './_types/types'
import { MainContainer, PageName, LinkButton, LinkButtonText } from './styled-components/event'

export const Event = (): JSX.Element => {
  const navigation = useNavigation<EventScreenNavigationProp>()
  const route = useRoute<EventScreenRouteProp>()
  const routeEventId = route?.params?.eventId ?? ''

  return (
    <MainContainer>
      <PageName>{`Event\nID: ${routeEventId}`}</PageName>

      <LinkButton onPress={() => navigation.goBack()}>
        <LinkButtonText>Back</LinkButtonText>
      </LinkButton>
    </MainContainer>
  )
}

export default Event
