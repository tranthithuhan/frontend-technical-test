import { render } from '@testing-library/react'
import Messages from '../components/messages/List'
import { MOCKED_CONVERSATIONS } from '../utils/__tests__/conversations.spec'
import { AppContext } from '../store/context'
import { MOCKED_USERS } from '../utils/__tests__/users.spec'
const MOCKED_STATE = {
  conversations: MOCKED_CONVERSATIONS,
  users: MOCKED_USERS,
  selectedConversationId: 1
}

describe('Messages', () => {
  it('should render 3 conversations', () => {
    const { getAllByTestId } = render(
      <AppContext.Provider value={ {state: MOCKED_STATE, dispatch: () => jest.fn()} }>
        <Messages />
      </AppContext.Provider>,
    )
    expect(getAllByTestId('message-list'))
      .toBeTruthy()
  })
})