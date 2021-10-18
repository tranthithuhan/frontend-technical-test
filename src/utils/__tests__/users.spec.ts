import { getUserInListByUserId, isMe } from '../users'

const MOCKED_LOGGED_USER = 1
export const MOCKED_USER_NICKNAME = "Jeremie"
export const MOCKED_USER = {
  "id": 2,
  "nickname": MOCKED_USER_NICKNAME,
  "token": "xxxx"
}
export const MOCKED_USERS = [
  {
    "id": 1,
    "nickname": "Thibaut",
    "token": "xxxx"
  },
  MOCKED_USER
]

describe('isMe', () => {
  it('should return true', () => {
    expect(isMe(MOCKED_LOGGED_USER)).toBeTruthy()
  })
})

describe('getUserInListByUserId', () => {
  it('should return user with id 2', () => {
    expect(
      getUserInListByUserId(MOCKED_USERS, 2)
    )
      .toMatchObject({
        "id": 2,
        "nickname": "Jeremie",
        "token": "xxxx"
      })
  })
})