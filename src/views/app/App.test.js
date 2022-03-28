import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from './App';

describe('App test', () => {
  it('renders correctly', () => {
    render(<App />)

    expect(screen.getByText('Tarô O Jogo')).toBeInTheDocument()
  })
})