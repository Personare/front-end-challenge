import React from 'react';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Card from '.';

describe('Card component', () => {
  const frontImage = { src: '/arcanofakepath', alt: 'Arcano' };
  const backImage = { src: '/backgroundfakepath', alt: 'Fundo' };

  it('should render Card with width and height provided', () => {
    const { container } = render(
      <Card
        face="up"
        width="60px"
        height="120px"
        frontImage={frontImage}
        backImage={backImage}
      />
    );

    const card = container.firstChild;

    expect(card).toHaveStyle('width: 60px');
    expect(card).toHaveStyle('height: 120px');
  });

  it('should render Card with front and back images', () => {
    render(
      <Card
        face="up"
        width="60px"
        height="120px"
        frontImage={frontImage}
        backImage={backImage}
      />
    );

    const images = screen.getAllByRole('img');
    const frontImageElement = images[0];
    const backImageElement = images[1];

    expect(frontImageElement).toHaveAttribute('src', frontImage.src);
    expect(frontImageElement).toHaveAttribute('alt', frontImage.alt);
    expect(backImageElement).toHaveAttribute('src', backImage.src);
    expect(backImageElement).toHaveAttribute('alt', backImage.alt);
  });

  it('should be able to rotate Card to up', () => {
    const { container } = render(
      <Card
        face="up"
        width="60px"
        height="120px"
        frontImage={frontImage}
        backImage={backImage}
      />
    );

    const card = container.firstChild;
    const frontCardFace = card.firstChild;
    const backCardFace = card.lastChild;

    expect(frontCardFace).toHaveStyle(
      'transform: perspective(200px) rotateY(0deg);'
    );
    expect(backCardFace).toHaveStyle(
      'transform: perspective(200px) rotateY(180deg);'
    );
  });

  it('should be able to rotate Card to down', () => {
    const { container } = render(
      <Card
        face="down"
        width="60px"
        height="120px"
        frontImage={frontImage}
        backImage={backImage}
      />
    );

    const card = container.firstChild;
    const frontCardFace = card.firstChild;
    const backCardFace = card.lastChild;

    expect(frontCardFace).toHaveStyle(
      'transform: perspective(200px) rotateY(-180deg);'
    );
    expect(backCardFace).toHaveStyle(
      'transform: perspective(200px) rotateY(0deg);'
    );
  });
});
