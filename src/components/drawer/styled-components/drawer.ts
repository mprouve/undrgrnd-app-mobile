import styled from 'styled-components/native'
import { DefaultTheme } from 'styled-components'

export const MainContainer = styled.View`
  flex: 1;
`

export const ImageBackground = styled.ImageBackground``

export const ImageOverlay = styled.View`
  background-color: #000000bb;
  padding: 80px 30px 20px 30px;
`

export const ImageContainer = styled.View`
  background-color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  border-radius: ${({ theme }: { theme: DefaultTheme }) => theme.layout.borderRadius.large};
`

export const Image = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`

export const Name = styled.Text`
  margin-top: 20px;
  font-family: ${({ theme }: { theme: DefaultTheme }) => theme.typography.fontFamily.strong};
  font-size: ${({ theme }: { theme: DefaultTheme }) => theme.typography.fontSizes.larger};
  color: white;
`

export const DrawerListContainer = styled.View`
  padding-top: 5px;
`

export const DrawerLinkButton = styled.TouchableOpacity`
  margin: 0 10px;
  padding: 10px 10px;
`

export const Separator = styled.View`
  background-color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.border.drawerButton};
  height: 1px;
  margin: 5px 20px;
`

export const DrawerLinkText = styled.Text`
  font-family: ${({ theme }: { theme: DefaultTheme }) => theme.typography.fontFamily.regular};
  font-size: ${({ theme }: { theme: DefaultTheme }) => theme.typography.fontSizes.regular};
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.text.body};
`
