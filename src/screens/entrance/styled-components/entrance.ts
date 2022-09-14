import styled from 'styled-components/native'
import { DefaultTheme } from 'styled-components'

export const MainContainer = styled.ImageBackground`
  flex: 1;
`

export const DetailsContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
  margin-bottom: 120px;
  align-items: center;
`

export const LinkButton = styled.TouchableOpacity`
  background-color: ${({ theme }: { theme: DefaultTheme }) => `${theme.palette.white}ff`};
  padding: 12px 30px 9px 30px;
  border-radius: ${({ theme }: { theme: DefaultTheme }) => theme.layout.borderRadius.regular};
`

export const LinkButtonText = styled.Text`
  font-family: ${({ theme }: { theme: DefaultTheme }) => theme.typography.fontFamily.strong};
  font-size: ${({ theme }: { theme: DefaultTheme }) => theme.typography.fontSizes.tall};
  color: ${({ theme }: { theme: DefaultTheme }) => theme.palette.primary};
`
