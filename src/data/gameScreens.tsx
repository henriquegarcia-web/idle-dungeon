import inventoryIcon from 'assets/icons/inventory.png'
import dungeonIcon from 'assets/icons/dungeon.png'
import shopIcon from 'assets/icons/shop.png'
import servicesIcon from 'assets/icons/services.png'
import mapIcon from 'assets/icons/map.png'
import rankingIcon from 'assets/icons/ranking.png'

import {
  DungeonView,
  InventoryView,
  MapView,
  RankingView,
  ServicesView,
  ShopView
} from '@views/index'

export interface IGameScreen {
  screenName: string
  screenTitle: string
  screenComponent: any
  screenIcon: any
}

const gameScreens: IGameScreen[] = [
  {
    screenName: 'Services',
    screenTitle: 'Serviços',
    screenComponent: ServicesView,
    screenIcon: servicesIcon
  },
  {
    screenName: 'Inventory',
    screenTitle: 'Personagem',
    screenComponent: InventoryView,
    screenIcon: inventoryIcon
  },
  {
    screenName: 'Dungeon',
    screenTitle: 'Dungeon',
    screenComponent: DungeonView,
    screenIcon: dungeonIcon
  },
  {
    screenName: 'Map',
    screenTitle: 'Mapa',
    screenComponent: MapView,
    screenIcon: mapIcon
  },
  {
    screenName: 'Shop',
    screenTitle: 'Loja',
    screenComponent: ShopView,
    screenIcon: shopIcon
  },
  {
    screenName: 'Ranking',
    screenTitle: 'Ranking',
    screenComponent: RankingView,
    screenIcon: rankingIcon
  }
]

export { gameScreens }
