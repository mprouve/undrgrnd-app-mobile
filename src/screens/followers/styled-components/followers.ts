import styled from 'styled-components/native'
import { DefaultTheme } from 'styled-components'

export const MainContainer = styled.View`
  background-color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.background.primary};
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const PageName = styled.Text`
  text-align: center;
  font-family: ${({ theme }: { theme: DefaultTheme }) => theme.typography.fontFamily.strong};
  font-size: ${({ theme }: { theme: DefaultTheme }) => theme.typography.fontSizes.larger};
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.text.body};
`

export const LinkButton = styled.TouchableOpacity`
  margin-top: 10px;
  padding: 8px 16px;
  border: ${({ theme }: { theme: DefaultTheme }) => `1px solid  ${theme.colors.border.primary}`};
  border-radius: ${({ theme }: { theme: DefaultTheme }) => theme.layout.borderRadius.regular};
`

export const LinkButtonText = styled.Text`
  font-family: ${({ theme }: { theme: DefaultTheme }) => theme.typography.fontFamily.regular};
  font-size: ${({ theme }: { theme: DefaultTheme }) => theme.typography.fontSizes.regular};
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.text.body};
`
