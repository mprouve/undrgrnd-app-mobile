import { useNavigation, useRoute } from '@react-navigation/native'
import { LocationScreenNavigationProp, LocationScreenRouteProp } from './_types/types'
import { MainContainer, PageName, LinkButton, LinkButtonText } from './styled-components/location'

export const Location = (): JSX.Element => {
  const navigation = useNavigation<LocationScreenNavigationProp>()
  const route = useRoute<LocationScreenRouteProp>()
  const routeLocationId = route?.params?.locationId ?? ''

  return (
    <MainContainer>
      <PageName>{`Location\nID: ${routeLocationId}`}</PageName>

      <LinkButton
        onPress={() => navigation.navigate('profile', { userId: 'sdlkjsdfo87sdf7987dfd' })}>
        <LinkButtonText>Profile</LinkButtonText>
      </LinkButton>
    </MainContainer>
  )
}

export default Location
