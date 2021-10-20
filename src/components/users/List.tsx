import { FC, useContext, useEffect } from 'react'
import { getAllUser } from '../../utils/users'
import { AppContext } from '../../store/context'
import { FETCH_USERS_SUCCESS, SELECT_USER } from '../../store/reducers'
import Item from './User'
import styles from '../../styles/Users.module.scss'
import { User } from '../../types/user'
import { getLoggedUserId } from '../../utils/getLoggedUserId'

type UsersProps = {
	onSelectUser: Function
}
const List:FC<UsersProps> = ({onSelectUser}) => {
	const { dispatch, state } = useContext(AppContext)
	const { users } = state
	
	useEffect(() => {
		getAllUser()
			.then(users => dispatch({type: FETCH_USERS_SUCCESS, payload: users}))
	}, [])
	
	const handleSelectUser = (user: User) => {
		dispatch({type: SELECT_USER, payload: user})
		onSelectUser(user)
	}
	
	return (
		<div className={styles.users}>
			{
				users.map(user => {
					if (user.id === getLoggedUserId())
						return null
					
					return <Item user={user} onSelectUser={handleSelectUser}/>
				})
			}
		</div>
	)
}

export default List