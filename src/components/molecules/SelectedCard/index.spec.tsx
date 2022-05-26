import React from 'react';

import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import SelectedCard from '.';

describe('Selected Card component', () => {
  const frontImage = { src: '/arcanofakepath', alt: 'Arcano' };
  const backImage = { src: '/backgroundfakepath', alt: 'Fundo' };

  it('should render Selected Card with name provided', () => {
    const { getByText } = render(
      <SelectedCard
        name="O MAGO"
        frontImage={frontImage}
        backImage={backImage}
      />
    );

    expect(getByText('O MAGO')).toBeInTheDocument();
  });

  it('should render Selected Card with front and back images', () => {
    render(
      <SelectedCard
        name="O MAGO"
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

  it('should hide Selected Card when click outside of component', () => {
    const { container } = render(
      <SelectedCard
        name="O MAGO"
        frontImage={frontImage}
        backImage={backImage}
      />
    );

    const selectedCard = container.firstChild;
    fireEvent.click(selectedCard);

    expect(selectedCard).toHaveStyle('display: block');

    fireEvent.mouseDown(document.body);

    expect(selectedCard).toHaveStyle('display: none');
  });
});
