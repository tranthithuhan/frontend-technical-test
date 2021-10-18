import { render } from '@testing-library/react'
import Conversation from '../components/conversations/Item'
import { MOCKED_CONVERSATION } from '../utils/__tests__/conversations.spec'
import { MOCKED_USER, MOCKED_USER_NICKNAME } from '../utils/__tests__/users.spec'


describe('Conversations', () => {
  it('should render correctly App', () => {
    const { getByTestId } = render(
      <Conversation
        conversation={MOCKED_CONVERSATION}
        user={MOCKED_USER}
        isSelected={true}
        onSelectConversation={jest.fn()}
      />,
    )
    expect(getByTestId('user-nickname'))
      .toBeTruthy()
    expect(getByTestId('user-icon'))
      .toBeTruthy()
    expect(getByTestId('conversation-date'))
      .toBeTruthy()
    expect(getByTestId('user-nickname').textContent)
      .toBe(MOCKED_USER_NICKNAME)
  })
})