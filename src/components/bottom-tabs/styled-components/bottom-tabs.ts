import styled from 'styled-components/native'
import { DefaultTheme } from 'styled-components'

export const MainContainer = styled.View`
  background-color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.background.bottomTabs};
  height: 52px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const TabContainer = styled.TouchableOpacity`
  display: inline-flex;
  width: 20%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
