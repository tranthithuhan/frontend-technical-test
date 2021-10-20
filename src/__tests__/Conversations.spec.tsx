import { render } from '@testing-library/react'
import Conversations from '../components/conversations/List'
import { MOCKED_CONVERSATIONS } from '../utils/__tests__/conversations.spec'
import { AppContext } from '../store/context'
import { MOCKED_USERS } from '../utils/__tests__/users.spec'
const MOCKED_STATE = {
  conversations: MOCKED_CONVERSATIONS,
  users: MOCKED_USERS,
  selectedConversation: null
}

describe('Conversations', () => {
  it('should render 3 conversations', () => {
    const { queryAllByTestId, getAllByTestId } = render(
      <AppContext.Provider value={ {state: MOCKED_STATE, dispatch: () => jest.fn()} }>
        <Conversations/>
      </AppContext.Provider>,
    )
    expect(getAllByTestId('conversation-list'))
      .toBeTruthy()
    expect(queryAllByTestId('conversation-item'))
      .toHaveLength(MOCKED_CONVERSATIONS.length)
  })
})