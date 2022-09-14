import { useNavigation } from '@react-navigation/native'
import { EntranceScreenNavigationProp } from './_types/types'
import FadeInView from '../../components/fade-in/fade-in'
import {
  MainContainer,
  DetailsContainer,
  LinkButton,
  LinkButtonText
} from './styled-components/entrance'

export const Auth = (): JSX.Element => {
  const navigation = useNavigation<EntranceScreenNavigationProp>()

  return (
    <MainContainer source={require('../../../assets/images/backgrounds/entrance.png')}>
      <DetailsContainer>
        <FadeInView duration={3000}>
          <LinkButton onPress={() => navigation.navigate('auth')}>
            <LinkButtonText>ENTER THE UNDRGRND</LinkButtonText>
          </LinkButton>
        </FadeInView>
      </DetailsContainer>
    </MainContainer>
  )
}

export default Auth
