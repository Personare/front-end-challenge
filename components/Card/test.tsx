import { render } from "@testing-library/react"
import Card from './'

describe('components/Card', () => {
  it('Should match snapshot', () => {
    const { container } = render(<Card image='test.jpg' name='test' imagesUrl='http://www.com.br' />)
    expect(container).toMatchSnapshot()
  })
  
})
