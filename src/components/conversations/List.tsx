import React, { FC, useContext, useState } from 'react'
import { AppContext } from '../../store/context'
import styles from '../../styles/Conversations.module.scss'
import ConversationItem from './Item';
import { getOtherUserId } from '../../utils/conversations'
import { getUserInListByUserId } from '../../utils/users'
import { Conversation } from '../../types/conversation'
import { SELECT_CONVERSATION } from '../../store/reducers'
import { useIntl } from '../../plugins/i18n'
import EditIcon from '../../assets/edit.png'
import Image from 'next/image'
import SelectUserModal from '../users/SelecUsersModal'

const List: FC = () => {
	const { t } = useIntl()
	const { state, dispatch } = useContext(AppContext)
	const [modalIsOpen, setIsOpen] = useState(false);
	
	const openModal = () => {
		setIsOpen(true);
	}
	const closeModal = () => {
		setIsOpen(false);
	}
	
	const { conversations, users,  selectedConversation } = state
	const onSelectConversation = (conversation: Conversation) => {
		dispatch({type: SELECT_CONVERSATION, payload: conversation})
	}
	
	return (
		<div
			data-testid="conversation-list"
			className={styles.conversations}
		>
			{
				modalIsOpen &&
				<SelectUserModal
					modalIsOpen={modalIsOpen}
					closeModal={closeModal}
				/>
			}
			<div className={styles.conversations__header}>
				{ t('common.discussions') }
				<div
					className={styles.conversations__header__editIcon}
					onClick={openModal}
				>
					<Image
						src={EditIcon}
						alt="Edit icon"
						height={20} width={20}
					/>
				</div>
			</div>
			
			<div className={styles.conversations__body}>
				{
					conversations.map(conversation => {
						const otherUserId = getOtherUserId(conversation)
						const otherUser = getUserInListByUserId(users, otherUserId)
						const isSelected = (selectedConversation || {}).id === conversation.id
						
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