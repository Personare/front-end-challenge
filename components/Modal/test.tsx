import { render } from "@testing-library/react"
import Modal from './'

describe('components/Card', () => {
  it('Should match snapshot', () => {
    const { container } = render(<Modal onBackdropClick={jest.fn} ><h1>n1</h1></Modal>)
    expect(container).toMatchSnapshot()
  })
  
})
