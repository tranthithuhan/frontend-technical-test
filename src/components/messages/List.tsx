import React, { Dispatch, FC, useCallback, useContext, useEffect, useRef, useState } from 'react'
import { Message } from '../../types/message'
import MessageItem from './Item'
import MessageForm from './Form'
import styles from '../../styles/Messages.module.scss'
import Image from 'next/image'
import UserIcon from '../../assets/user.png'
import { scrollTo } from '../../utils/scroll'
import { getMessageByConversationId } from '../../utils/messages'
import { AppContext } from '../../store/context'
import { getUserInListByUserId, isMe } from '../../utils/users'
import { getOtherUserId } from '../../utils/conversations'

const Messages: FC = () => {
	const messageEndRef = useRef(null)
	const { state } = useContext(AppContext)
	const { selectedConversation, users } = state
	const [messages, setMessages]: [Message[], Dispatch<Message[]>] = useState([])
	const userId = getOtherUserId(selectedConversation)
	const user = getUserInListByUserId(users, userId)
	
	const getMessage = useCallback(() => {
		return getMessageByConversationId((selectedConversation || {}).id)
			.then(messages => {
				return setMessages(messages)
			})
	}, [(selectedConversation || {}).id])
	
	useEffect(() => {
		getMessage()
			.then(() => {
				scrollTo(messageEndRef)
			})
	}, [(selectedConversation || {}).id])
	
	useEffect(() => {
		const interval = setInterval(() => {
			getMessage()
		}, 500)
		return () => clearInterval(interval)
	}, [(selectedConversation || {}).id])
	
	const updateMessages = useCallback(() => {
		getMessage()
			.then(() => scrollTo(messageEndRef))
	}, [(selectedConversation || {}).id])
	
	return (
		<div
			className={ styles.messages }
			data-testid="message-list"
		>
			<div className={ styles.messages__header }>
				<div className={ styles.messages__header__userIcon }>
					<Image src={ UserIcon } alt="User logo" height={ 56 } width={ 56 }/>
				</div>
				{ !!user && <div>{ user.nickname }</div> }
			</div>
			<div className={ styles.messages__wrapper }>
				{
					messages && messages.map(message => {
						const sendByMe = isMe(message.authorId)
						
						return (
							<MessageItem
								message={ message }
								sendByMe={ sendByMe }
								key={ message.id }
							/>
						)
					})
				}
				<div ref={ messageEndRef }/>
			</div>
			<MessageForm
				conversationId={ (selectedConversation || {}).id }
				updateMessage={ updateMessages }
			/>
		</div>
	)
}

export default Messages