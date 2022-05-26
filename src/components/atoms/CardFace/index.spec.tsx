import React from 'react';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import CardFace from '.';

describe('CardFace component', () => {
  const imageSource = '/arcanofakepath';
  const imageAlt = 'Arcano';

  it('should render CardFace component with image props', () => {
    render(<CardFace imageSource={imageSource} imageAlt={imageAlt} />);

    const image = screen.getByRole('img');

    expect(image).toHaveAttribute('src', imageSource);
    expect(image).toHaveAttribute('alt', imageAlt);
  });

  it('should render CardFace with rotate applied', () => {
    const { container } = render(
      <CardFace imageSource={imageSource} imageAlt={imageAlt} rotate="180deg" />
    );

    const card = container.firstChild;

    expect(card).toHaveStyle('transform: perspective(200px) rotateY(180deg);');
  });
});
