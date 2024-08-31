import * as S from './styles'

import { PlayerDatails, PlayerEquipment } from '@components/index'

const InventoryView = () => {
  return (
    <S.InventoryView>
      <PlayerDatails />
      <PlayerEquipment />
    </S.InventoryView>
  )
}

export default InventoryView
