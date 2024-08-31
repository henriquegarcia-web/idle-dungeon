import { playerData } from '@data/playerData'
import * as S from './styles'
import { useWindowDimensions } from 'react-native'

const PlayerEquipment = () => {
  const weaponPrimary = playerData.equipment.weaponPrimary
  const weaponSecondary = playerData.equipment.weaponSecondary
  const equipment = playerData.equipment

  return (
    <S.PlayerEquipment>
      <Slot key="slot-weapon-1st" itemId={weaponPrimary.itemId} />
      <Slot key="slot-empty-01" empty />
      <Slot key="slot-head" itemId={equipment.head.itemId} />
      <Slot key="slot-empty-02" empty />
      <Slot key="slot-weapon-2st" itemId={weaponSecondary.itemId} />

      <Slot
        key="slot-weapon-1st-buffer-1st"
        itemId={weaponPrimary.weaponBufferPrimary.itemId}
      />
      <Slot key="slot-empty-03" empty />
      <Slot key="slot-upperWear" itemId={equipment.upperWear.itemId} />
      <Slot key="slot-amulet" itemId={equipment.amulet.itemId} />
      <Slot
        key="slot-weapon-2st-buffer-1st"
        itemId={weaponSecondary.weaponBufferPrimary.itemId}
      />

      <Slot
        key="slot-weapon-1st-buffer-2st"
        itemId={weaponPrimary.weaponBufferSecondary.itemId}
      />
      <Slot key="slot-glooves" itemId={equipment.glooves.itemId} />
      <Slot key="slot-lowerWear" itemId={equipment.lowerWear.itemId} />
      <Slot key="slot-footwear" itemId={equipment.footwear.itemId} />
      <Slot
        key="slot-weapon-2st-buffer-2st"
        itemId={weaponSecondary.weaponBufferSecondary.itemId}
      />
    </S.PlayerEquipment>
  )
}

export default PlayerEquipment

// =============================================== SLOT

interface ISlot {
  empty?: boolean
  itemId?: string
}

const Slot = ({ empty = false, itemId }: ISlot) => {
  const { width } = useWindowDimensions()
  const slotSize = width / 5 - 16

  if (empty || itemId === null)
    return <S.SlotEmpty size={slotSize}></S.SlotEmpty>
  return <S.Slot size={slotSize}></S.Slot>
}
