import React from 'react';

import { act, fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Cards from '.';

describe('Cards component', () => {
  const data = {
    imagesUrl: 'https://fakeurl.com/',
    imageBackCard: '/fakepath',
    cards: [
      { name: 'O MAGO', image: 'arcano1.jpg' },
      { name: 'A SACERDOTISA', image: 'arcano2.jpg' },
      { name: 'A IMPERATRIZ', image: 'arcano3.jpg' },
      { name: 'O IMPERADOR', image: 'arcano4.jpg' },
      { name: 'O PAPA', image: 'arcano5.jpg' },
    ],
  };

  beforeEach(() => {
    jest.useFakeTimers();
    jest.spyOn(global.Math, 'random').mockReturnValue(0.1);
  });

  afterEach(() => {
    jest.spyOn(global.Math, 'random').mockRestore();
  });

  it('should render a list with all cards provided', () => {
    render(<Cards activated={false} data={data} />);

    const cards = screen.getAllByRole('listitem');

    expect(cards).toHaveLength(5);
  });

  it('should not be able to choose a card when component is not activated', () => {
    const { container, queryByText } = render(
      <Cards activated={false} data={data} />
    );

    const card = container.querySelector('li[value="O MAGO"]');
    fireEvent.click(card);
    const selectedCard = queryByText('O MAGO');

    expect(selectedCard).toBeNull();
  });

  it('should not be able to choose a card when rotating or shuffling cards', () => {
    const { container, queryByText } = render(
      <Cards activated={true} data={data} />
    );

    const card = container.querySelector('li[value="O MAGO"]');
    fireEvent.click(card);
    const selectedCard = queryByText('O MAGO');

    expect(selectedCard).toBeNull();
  });

  it('should be able to shuffle cards', () => {
    const { getAllByRole } = render(<Cards activated={true} data={data} />);

    act(() => {
      jest.advanceTimersByTime(1500);
    });
    const cards = getAllByRole('listitem');

    expect(cards[0]).toHaveAttribute('value', 'O PAPA');
    expect(cards[1]).toHaveAttribute('value', 'O IMPERADOR');
    expect(cards[2]).toHaveAttribute('value', 'A IMPERATRIZ');
    expect(cards[3]).toHaveAttribute('value', 'A SACERDOTISA');
    expect(cards[4]).toHaveAttribute('value', 'O MAGO');
  });

  it('should be able to choose a card after shuffle cards', async () => {
    const { container, getByText } = render(
      <Cards activated={true} data={data} />
    );

    act(() => {
      jest.advanceTimersByTime(1500);
    });
    const card = container.querySelector('li[value="O MAGO"]');
    fireEvent.click(card);

    expect(getByText('O MAGO')).toBeInTheDocument();
  });

  it('should not be able to choose a card after having chosen a card', async () => {
    const { container } = render(<Cards activated={true} data={data} />);

    act(() => {
      jest.advanceTimersByTime(1500);
    });
    const card = container.querySelector('li[value="O MAGO"]');
    fireEvent.click(card);
    fireEvent.mouseDown(document.body);
    fireEvent.click(card);
    const selectedCard = container.querySelector('ul > div');

    expect(selectedCard).toHaveStyle('display: none');
  });
});
