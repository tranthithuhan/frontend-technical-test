import { getUsersIdsInConversations } from '../conversation'

const MOCKED_CONVERSATION = {
  recipientId: 1,
  recipientNickname: 'Thibaut',
  senderId: 2,
  senderNickname: 'Jeremie'
}

const MOCKED_CONVERSATIONS = [
  { ...MOCKED_CONVERSATION, id: 1 },
  { ...MOCKED_CONVERSATION, id: 2, senderId: 3 },
  { ...MOCKED_CONVERSATION, id: 3 },
]

describe('getUsersIdsInConversations', () => {
  it('should return logged user id', () => {
    expect(getUsersIdsInConversations(MOCKED_CONVERSATIONS)).toHaveLength(2)
  })
})