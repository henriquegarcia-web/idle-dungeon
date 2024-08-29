import styled from 'styled-components/native'
import { Colors } from '@utils/styles/colors'
import { Sizes } from '@utils/styles/sizes'

export const HeaderContainer = styled.View`
  height: ${Sizes.gameHeaderHeight};
  justify-content: center;
  align-items: center;
  padding: ${Sizes.phoneTopMargin} 10px 0 10px;

  background-color: ${Colors.backgroundSecondary};
`

export const HeaderText = styled.Text`
  color: white;
  font-size: 18px;
`
