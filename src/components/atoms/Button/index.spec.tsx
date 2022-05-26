import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import Button from '.';

describe('Button component', () => {
  it('should render button', () => {
    render(<Button text="button" />);

    const button = screen.getByRole('button', { name: 'button' });

    expect(button).toBeInTheDocument();
  });

  it('should render disabled button', () => {
    render(<Button text="button" disabled />);

    const disabledButton = screen.getByRole('button', { name: 'button' });

    expect(disabledButton).toBeDisabled();
  });

  it('should render button with a onClick event', () => {
    const handleClick = jest.fn();
    render(<Button text="button" onClick={handleClick} />);

    const clickableButton = screen.getByRole('button', { name: 'button' });
    fireEvent.click(clickableButton);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
