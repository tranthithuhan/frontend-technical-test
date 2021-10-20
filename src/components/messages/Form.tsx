import { Dispatch, FC, useState } from 'react'
import { createMessageByConversationId } from '../../utils/messages'
import styles from '../../styles/Messages.module.scss'
import { useIntl } from '../../plugins/i18n'

type MessageFormProps = {
	conversationId: number,
	updateMessage(): void
}

const MessageForm: FC<MessageFormProps> = ({conversationId, updateMessage}) => {
	const { t } = useIntl()
	const [newMessage, setNewMessage]: [string, Dispatch<string>] = useState('')
	
	const handleOnChange = (e) => {
		setNewMessage(e.target.value)
	}
	
	const handleKeyPress = (e) => {
		if (e.key === 'Enter') {
			handleCreateMessage()
		}
	}
	
	const handleCreateMessage = () => {
		return createMessageByConversationId(conversationId, newMessage)
			.then(() => {
				updateMessage()
				setNewMessage('')
			})
	}
	
	return (
		<div className={ styles.messageForm }>
			<input
				className={ styles.messageForm__input }
				type="text"
				value={ newMessage }
				onChange={ handleOnChange }
				onKeyPress={ handleKeyPress }
			/>
			<button
				onClick={ handleCreateMessage }
				className={ styles.messageForm__button }
			>
				{t('common.send')}
			</button>
		</div>
	)
}


export default MessageForm