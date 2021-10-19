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
import { getConversationInListByConversationId, getOtherUserId } from '../../utils/conversations'

const Messages: FC = () => {
	const messageEndRef = useRef(null)
	const { state } = useContext(AppContext)
	const { selectedConversationId, users, conversations } = state
	const [messages, setMessages]: [Message[], Dispatch<Message[]>] = useState([])
	const selectedConversation = getConversationInListByConversationId(conversations, selectedConversationId)
	const userId = getOtherUserId(selectedConversation)
	const user = getUserInListByUserId(users, userId)
	
	useEffect(() => {
		const interval = setInterval(() => {
			updateMessages()
		}, 500)
		return () => clearInterval(interval)
	}, [selectedConversationId])
	
	const updateMessages = useCallback(() => {
    debugger
		if (selectedConversationId)
			getMessageByConversationId(selectedConversationId)
				.then(messages => {
					setMessages(messages)
          scrollTo(messageEndRef)
				})
	}, [selectedConversationId])
	
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
				conversationId={ selectedConversationId }
				updateMessage={ updateMessages }
			/>
		</div>
	)
}

export default Messages