import React, { Dispatch, FC } from 'react'
import { Conversation } from '../../types/conversation';
import Image from 'next/image'
import UserIcon from '../../assets/user.png'
import styles from '../../styles/Conversations.module.scss'
import { User } from '../../types/user';
import moment from 'moment'

type ConversationProps = {
	conversation: Conversation,
	user: User,
	isSelected: boolean,
	onSelectConversation: Dispatch<any>
}

const Item: FC<ConversationProps> = ({ conversation, user, isSelected, onSelectConversation }) => {
	const date = moment.unix(conversation.lastMessageTimestamp).format('DD/MM/YYYY HH:mm')
	const handleSelectConversation = () => {
		onSelectConversation(conversation)
	}
	
	return (
		<div
			className={`${styles.conversation} ${isSelected ? styles.conversation__isSelected : null}`}
			onClick={handleSelectConversation}
		>
			<div
				data-testid="user-icon"
				className={styles.conversation__userIcon}
			>
				<Image src={UserIcon} alt="User logo" height={56} width={56} />
			</div>
			<div className={styles.conversation__info}>
				{
					!!user &&
					<div
						data-testid="user-nickname"
						className={styles.conversation__info__nickname}
					>
						{ user.nickname }
					</div>
				}
				<div
					data-testid="conversation-date"
					className={styles.conversation__info__date}
				>
					{ date }
				</div>
			</div>
		</div>
	)
}

export default Item