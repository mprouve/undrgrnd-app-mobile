import { useNavigation } from '@react-navigation/native'
import { CreatePostFormScreenNavigationProp } from './_types/types'
import {
  MainContainer,
  PageName,
  LinkButton,
  LinkButtonText
} from './styled-components/create-post-form'

export const CreatePostForm = (): JSX.Element => {
  const navigation = useNavigation<CreatePostFormScreenNavigationProp>()

  return (
    <MainContainer>
      <PageName>Create Post (Form)</PageName>

      <LinkButton onPress={() => navigation.goBack()}>
        <LinkButtonText>Back</LinkButtonText>
      </LinkButton>
    </MainContainer>
  )
}

export default CreatePostForm
