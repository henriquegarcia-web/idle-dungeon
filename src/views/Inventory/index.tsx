import { playerData } from '@data/playerData'
import * as S from './styles'

const InventoryView = () => {
  return (
    <S.InventoryView>
      <S.PlayerDatails>
        <S.PlayerDatailsWarpper>
          <S.PlayerDatailsLabel>
            Força de Ataque
            <S.PlayerDatailsLabelLegend> - Dano</S.PlayerDatailsLabelLegend>
          </S.PlayerDatailsLabel>
          <S.PlayerDatailsValue>
            {playerData.attributes.damage}
          </S.PlayerDatailsValue>
        </S.PlayerDatailsWarpper>
        <S.PlayerDatailsWarpper>
          <S.PlayerDatailsLabel>
            Físico
            <S.PlayerDatailsLabelLegend> - Vída</S.PlayerDatailsLabelLegend>
          </S.PlayerDatailsLabel>
          <S.PlayerDatailsValue>
            {playerData.attributes.damage}
          </S.PlayerDatailsValue>
        </S.PlayerDatailsWarpper>
        <S.PlayerDatailsWarpper>
          <S.PlayerDatailsLabel>
            Sorte
            <S.PlayerDatailsLabelLegend>
              {' '}
              - Golpe Crítico
            </S.PlayerDatailsLabelLegend>
          </S.PlayerDatailsLabel>
          <S.PlayerDatailsValue>
            {playerData.attributes.damage}
          </S.PlayerDatailsValue>
        </S.PlayerDatailsWarpper>
        <S.PlayerDatailsWarpper>
          <S.PlayerDatailsLabel>
            Tenacidade
            <S.PlayerDatailsLabelLegend>
              {' '}
              - Resistência
            </S.PlayerDatailsLabelLegend>
          </S.PlayerDatailsLabel>
          <S.PlayerDatailsValue>
            {playerData.attributes.damage}
          </S.PlayerDatailsValue>
        </S.PlayerDatailsWarpper>
      </S.PlayerDatails>
    </S.InventoryView>
  )
}

export default InventoryView
