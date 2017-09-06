import { GAME_STATE } from './constants'

export type CardType = {
  name: string,
  imageUrl: string,
  backImageUrl: string,
  content: string,
}

export type CardListType = Array<CardType>

export type SourceCardType = {
  name: string,
  image: string,
}

export type SourceJsonType = {
  imagesUrl: string,
  imageBackCard: string,
  cards: Array<SourceCardType>,
}


export type GameStateType = $Keys<typeof GAME_STATE>

export type EventType = {
  preventDefault: () => void,
  target: Object,
}

export type OnSelectCBType = (e: EventType, card: CardType) => void
