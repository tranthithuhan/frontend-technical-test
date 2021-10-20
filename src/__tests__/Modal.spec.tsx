import { render } from '@testing-library/react'
import Modal from '../components/layouts/Modal'

describe('Modal', () => {
  it('should render a header and a modal content', () => {
    const { getAllByTestId, getByTestId } = render(
      <Modal isOpen={true} closeModal={() => jest.fn()} modalTitle="This is a modal">
        Hello world!
      </Modal>,
    )
    expect(getAllByTestId('modal-header'))
      .toBeTruthy()
    expect(getAllByTestId('modal-content'))
      .toBeTruthy()
    expect(getByTestId('modal-header').textContent)
      .toBe("This is a modal")
    expect(getByTestId('modal-content').textContent)
      .toBe("Hello world!")
  })
  
  it('should render only a modal content', () => {
    const { getAllByTestId, getByTestId, queryByTestId } = render(
      <Modal isOpen={true} closeModal={() => jest.fn()}>
        Hello world!
      </Modal>,
    )
    expect(queryByTestId('modal-header'))
      .toBeNull()
    expect(getAllByTestId('modal-content'))
      .toBeTruthy()
    expect(getByTestId('modal-content').textContent)
      .toBe("Hello world!")
  })
})