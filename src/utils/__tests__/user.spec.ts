import { isMe } from '../user'

const MOCKED_LOGGED_USER = 1

describe('isMe', () => {
  it('should return true', () => {
    expect(isMe(MOCKED_LOGGED_USER)).toBeTruthy()
  })
})