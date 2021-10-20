import React, { FC, useContext } from 'react'
import Users from './List'
import Modal from '../layouts/Modal'
import { useIntl } from '../../plugins/i18n'
import { createConversationsByUserId, getUserConversations } from '../../utils/conversations'
import { User } from '../../types/user'
import { AppContext } from '../../store/context'
import { FETCH_CONVERSATIONS_SUCCESS, SELECT_CONVERSATION } from '../../store/reducers'

type SelectUserModal = {
	modalIsOpen: boolean,
	closeModal: Function
}

const SelectUserModal:FC<SelectUserModal> = ({modalIsOpen, closeModal}) => {
	const { t } = useIntl()
	const { dispatch } = useContext(AppContext)
	
	const onSelectUser = (user: User) => {
		createConversationsByUserId(user)
			.then(conversation => {
				getUserConversations()
					.then(conversations => {
						dispatch({type: FETCH_CONVERSATIONS_SUCCESS, payload: conversations})
						dispatch({type: SELECT_CONVERSATION, payload: conversation})
					})
			})
		closeModal()
	}
	
	return (
		<Modal
			isOpen={modalIsOpen}
			closeModal={closeModal}
			modalTitle={t('common.modal.conversation.users.select-user')}
		>
			<Users onSelectUser={onSelectUser}/>
		</Modal>
	)
}

export default SelectUserModal