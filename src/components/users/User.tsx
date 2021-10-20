import React, { FC } from 'react'
import { User } from '../../types/user'
import UserIcon from '../../assets/user.png'
import Image from 'next/image'
import styles from '../../styles/Users.module.scss'

type UserProps = {
	user: User,
	onSelectUser: Function
}

const Item:FC<UserProps> = ({ user, onSelectUser }) => {
	const handleSelectUser = () => {
		onSelectUser(user)
	}
	
	return (
		<div className={styles.user} onClick={handleSelectUser}>
			<Image
				src={UserIcon}
				alt="User logo"
				height={56}
				width={56}
				data-testid="user-icon"
			/>
			<div
				data-testid="user-nickname"
				className={styles.user__nickname}
			>
				{user.nickname}
			</div>
		</div>
	)
}

export default Item