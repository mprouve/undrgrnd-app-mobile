// import { useNavigation } from '@react-navigation/native'
// import { MenuScreenNavigationProp } from './_types/types'
import {
  MainContainer,
  PageName
  // LinkButton,
  // LinkButtonText
} from './styled-components/settings'

export const Menu = (): JSX.Element => {
  // const navigation = useNavigation<MenuScreenNavigationProp>()

  return (
    <MainContainer>
      <PageName>Settings</PageName>
    </MainContainer>
  )
}

export default Menu
