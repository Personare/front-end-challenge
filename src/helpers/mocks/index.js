export const CARDS_MOCK = {
  imagesUrl: 'https://dkw5ssdvaqf8l.cloudfront.net/static/psr/br/framework/yii/images/content/pt-br/product/tarot/marselha/162x341/',
  imageBackCard: 'https://dkw5ssdvaqf8l.cloudfront.net/static/psr/br/framework/yii/images/content/pt-br/product/tarot/marselha/back-blue-card.png',
  cards: [
    {
      name: 'O MAGO',
      image: 'arcano1.jpg'
    },
    {
      name: 'A SACERDOTISA',
      image: 'arcano2.jpg',
    },
  ],
};

export function request() {
  return new Promise((resolve, reject) => {
    process.nextTick(
      () =>
        CARDS_MOCK
          ? resolve(CARDS_MOCK)
          : reject({
            error: 'Card information not found',
          }),
    );
  });
}
