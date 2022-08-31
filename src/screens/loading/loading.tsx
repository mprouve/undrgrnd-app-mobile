import { StatusBar } from 'expo-status-bar'
import { MainContainer, PageName } from './styled-components/loading'

export const Loading = (): JSX.Element => {
  return (
    <MainContainer>
      <PageName>Loading...</PageName>
      <StatusBar style="auto" />
    </MainContainer>
  )
}

export default Loading
