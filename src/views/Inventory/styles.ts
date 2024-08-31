import styled from 'styled-components/native'
import { Colors } from '@utils/styles/colors'
import { Sizes } from '@utils/styles/sizes'

export const InventoryView = styled.View`
  flex: 1;
  align-items: center;
  row-gap: 30px;
  padding: ${Sizes.screenPadding};

  background-color: ${Colors.backgroundPrimary};
`
