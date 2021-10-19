import { FC, useContext } from 'react'
import { AppContext } from '../../store/context'
import styles from '../../styles/Conversations.module.scss'
import ConversationItem from './Item';
import { getOtherUserId } from '../../utils/conversations'
import { getUserInListByUserId } from '../../utils/users'
import { Conversation } from '../../types/conversation'
import { SELECT_CONVERSATION } from '../../store/reducers'
import { useIntl } from '../../plugins/i18n'

const List: FC = () => {
	const { t } = useIntl()
	const { state, dispatch } = useContext(AppContext)
	
	const { conversations, users,  selectedConversationId } = state
	const onSelectConversation = (conversationId: Conversation['id']) => {
		dispatch({type: SELECT_CONVERSATION, payload: conversationId})
	}
	return (
		<div
			data-testid="conversation-list"
			className={styles.conversations}
		>
			<div className={styles.conversations__header}>
				{ t('common.discussions') }
			</div>
			
			<div className={styles.conversations__body}>
				{
					conversations.map(conversation => {
						const otherUserId = getOtherUserId(conversation)
						const otherUser = getUserInListByUserId(users, otherUserId)
						const isSelected = selectedConversationId === conversation.id
						
						return (
							<div
								data-testid="conversation-item"
								key={conversation.id}
							>
								<ConversationItem
									conversation={conversation}
									user={otherUser}
									isSelected={isSelected}
									onSelectConversation={onSelectConversation}
								/>
							</div>
						)
					})
				}
			</div>
		</div>
	)
}

export default List