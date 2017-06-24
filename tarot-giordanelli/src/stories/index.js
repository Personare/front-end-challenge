import React from 'react';
import { storiesOf } from '@storybook/react';
import CardDetail from '../CardDetail';

var card = {
  "name": "O MAGO",
  "image": "arcano1.jpg"
}

var url = "https://dkw5ssdvaqf8l.cloudfront.net/static/psr/br/framework/yii/images/content/pt-br/product/tarot/marselha/162x341/";

storiesOf('Tarot', module)
  .add('Tela de descrição da carta', () => <CardDetail {...card} url={url} />)
  
