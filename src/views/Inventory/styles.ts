import styled from 'styled-components/native'
import { Colors } from '@utils/styles/colors'
import { Sizes } from '@utils/styles/sizes'

export const InventoryView = styled.View`
  flex: 1;
  /* justify-content: center; */
  align-items: center;
  padding: ${Sizes.screenPadding};

  background-color: ${Colors.backgroundPrimary};
`

export const PlayerDatails = styled.View`
  row-gap: 5px;
  width: 100%;
`

export const PlayerDatailsWarpper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 6px 14px;
  border-radius: 5px;

  border: 1px solid ${Colors.borderPrimary};
`

export const PlayerDatailsLabel = styled.Text`
  font-size: 12px;

  color: ${Colors.textPrimary};
`

export const PlayerDatailsLabelLegend = styled.Text`
  font-size: 12px;

  color: ${Colors.textSecondary};
`

export const PlayerDatailsValue = styled.Text`
  font-size: 12px;
  font-weight: 600;

  color: ${Colors.textPrimary};
`
