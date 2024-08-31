import styled from 'styled-components/native'
import { Colors } from '@utils/styles/colors'
import { Sizes } from '@utils/styles/sizes'

export const PlayerEquipment = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;
`

// =============================================== SLOT

export const SlotEmpty = styled.View<{ size: number }>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
`

export const Slot = styled.View<{ size: number }>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: 5px;

  background-color: ${Colors.slot};
  border: 1px solid ${Colors.borderPrimary};
`
