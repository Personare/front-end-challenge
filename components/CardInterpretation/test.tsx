import { render, screen } from "@testing-library/react"
import CardInterpretation from './'

const image = 'test.jpg'
const name = 'test'
const imageUrl = 'http://www.com.br'

describe('components/CardInterpretation', () => {
  it('Should match snapshot', () => {
    const { container } = render(<CardInterpretation image={image} name={name} imagesUrl={imageUrl} />)
    expect(container).toMatchSnapshot()
  })

  it('Should show name', () => {
    render(<CardInterpretation image={image} name={name} imagesUrl={imageUrl} />)
    expect(screen.getByText(name)).toBeInTheDocument()
  })
})
