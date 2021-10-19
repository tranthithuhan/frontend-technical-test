import { render } from '@testing-library/react'
import Message from '../components/messages/Item'

export const MOCKED_MESSAGE_BODY = 'hello'
export const MOCKED_MESSAGE ={
  "authorId": 1,
  "conversationId": 1,
  "body": MOCKED_MESSAGE_BODY,
  "timestamp": 1634120528819,
  "id": 5
}

describe('Message', () => {
  it('should render correctly', () => {
    const { getByTestId, queryByTestId } = render(
      <Message sendByMe={true} message={MOCKED_MESSAGE}/>,
    )
    
    expect(getByTestId('message-item'))
      .toBeTruthy()
    expect(queryByTestId('message-send-byMe'))
      .toBeNull()
    expect(getByTestId('message-body').textContent)
      .toBe(MOCKED_MESSAGE_BODY)
  })
})