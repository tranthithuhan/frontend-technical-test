import { getOtherUserId, getUsersIdsInConversations } from '../conversations'

export const MOCKED_CONVERSATION = {
  id: 1,
  recipientId: 1,
  recipientNickname: 'Thibaut',
  senderId: 2,
  senderNickname: 'Jeremie',
  lastMessageTimestamp: 1634123191556
}

export const MOCKED_CONVERSATIONS = [
  { ...MOCKED_CONVERSATION, senderId: 3 },
  { ...MOCKED_CONVERSATION, id: 2 },
  { ...MOCKED_CONVERSATION, id: 3 },
]

describe('getUsersIdsInConversations', () => {
  it('should return all user id other than logged user in the conversation', () => {
    expect(getUsersIdsInConversations(MOCKED_CONVERSATIONS)).toHaveLength(2)
  })
})

describe('getUsersIdsInConversations', () => {
  it('should return all user id other than logged user in the conversation', () => {
    expect(getOtherUserId(MOCKED_CONVERSATION)).toBe(2)
  })
})
