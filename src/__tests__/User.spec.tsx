import { render } from '@testing-library/react'
import User from '../components/users/User'
import { MOCKED_USER, MOCKED_USER_NICKNAME } from '../utils/__tests__/users.spec'

describe('User', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(
      <User user={MOCKED_USER} onSelectUser={() => jest.fn()}/>,
    )
    
    expect(getByTestId('user-icon'))
      .toBeTruthy()
    expect(getByTestId('user-nickname'))
      .toBeTruthy()
    expect(getByTestId('user-nickname').textContent)
      .toBe(MOCKED_USER_NICKNAME)
  })
})