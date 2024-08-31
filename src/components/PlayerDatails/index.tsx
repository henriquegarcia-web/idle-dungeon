import * as S from './styles'

import { playerData } from '@data/playerData'

const PlayerDatails = () => {
  return (
    <S.PlayerDatails>
      <S.PlayerDatailsWarpper key="attribute-damage">
        <S.PlayerDatailsLabel>
          Força de Ataque
          <S.PlayerDatailsLabelLegend> - Dano</S.PlayerDatailsLabelLegend>
        </S.PlayerDatailsLabel>
        <S.PlayerDatailsValue>
          {playerData.attributes.damage}
        </S.PlayerDatailsValue>
      </S.PlayerDatailsWarpper>
      <S.PlayerDatailsWarpper key="attribute-health">
        <S.PlayerDatailsLabel>
          Físico
          <S.PlayerDatailsLabelLegend> - Vída</S.PlayerDatailsLabelLegend>
        </S.PlayerDatailsLabel>
        <S.PlayerDatailsValue>
          {playerData.attributes.damage}
        </S.PlayerDatailsValue>
      </S.PlayerDatailsWarpper>
      <S.PlayerDatailsWarpper key="attribute-lucky">
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
      <S.PlayerDatailsWarpper key="attribute-resistence">
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
  )
}

export default PlayerDatails
