import tarotJson from "./tarot.json";

export default class Tarot {
  static imagesUrl;
  static imageBackCard;
  static cards;

  constructor() {
    this.imagesUrl = tarotJson.imagesUrl;
    this.imageBackCard = tarotJson.imageBackCard;
    this.cards = tarotJson.cards;
  }
}
