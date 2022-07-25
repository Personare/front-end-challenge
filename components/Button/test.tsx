import { render, screen, fireEvent } from "@testing-library/react"
import Button from './'

const text = 'Testing button'

describe('components/Button', () => {
  it('Should match snapshot', () => {
    const { container } = render(<Button>{text}</Button>)
    expect(container).toMatchSnapshot()
  })

  it('Should call function onClick', () => {
    const onClick = jest.fn()
    render(<Button onClick={onClick}>{text}</Button>)

    fireEvent.click(screen.getByRole('button', { name: text }))

    expect(onClick).toBeCalled()
  })
})
