import { useNavigation } from '@react-navigation/native'
import { CreatePostSelectionScreenNavigationProp } from './_types/types'
import {
  MainContainer,
  PageName,
  LinkButton,
  LinkButtonText
} from './styled-components/create-post-selection'

export const CreatePostSelection = (): JSX.Element => {
  const navigation = useNavigation<CreatePostSelectionScreenNavigationProp>()

  return (
    <MainContainer>
      <PageName>Create Post (Selection)</PageName>

      <LinkButton
        onPress={() => navigation.navigate('create_post_form', { locationId: 'sdljhfds8fsd987f' })}>
        <LinkButtonText>Create post (Form)</LinkButtonText>
      </LinkButton>

      <LinkButton onPress={() => navigation.goBack()}>
        <LinkButtonText>Back</LinkButtonText>
      </LinkButton>
    </MainContainer>
  )
}

export default CreatePostSelection
