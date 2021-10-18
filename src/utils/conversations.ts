import type { Conversation } from '../types/conversation'
import type { User } from '../types/user'
import BackendRequest from '../plugins/backend-request'
import { getLoggedUserId } from './getLoggedUserId'
import { getUserByUserId, isMe } from './users'

export const getConversationsByUserId = (userId: User['id']):Promise<Conversation[]> =>
	new BackendRequest({
		url: `conversations/${userId}`,
		method: 'GET'
	}).exec().then(res => res.data)

export const getUserConversations = ():Promise<Conversation[]> =>
	getConversationsByUserId(getLoggedUserId())

export const getOtherUserId = (conversation: Conversation):User['id'] => {
	return isMe(conversation.senderId) ? conversation.recipientId : conversation.senderId
}

export const getUsersIdsInConversations = (conversations: Conversation[]): User['id'][] => {
	return conversations.reduce((userIds: User['id'][], conversation: Conversation) => {
		const otherUserId = getOtherUserId(conversation)
		
		if (!userIds.find(id => id == otherUserId)) userIds.push(otherUserId)
		
		return userIds
	}, [])
}

export const getUsersInConversations = (conversations: Conversation[]):Promise<User[]> => {
	const getUserPromises = getUsersIdsInConversations(conversations)
		.map(userId => getUserByUserId(userId))
	
	return Promise.all(getUserPromises)
}

export const deleteConversationsById = (conversationId: Conversation['id']):Promise<object> =>
	new BackendRequest({
		url: `conversations/${conversationId}`,
		method: 'DELETE'
	}).exec().then(res => res.data)

export const createConversationsByUserId = (userId: User['id'], conversation: Conversation):Promise<Conversation> =>
	new BackendRequest({
		url: `conversations/${userId}`,
		method: 'POST',
		data: conversation
	}).exec().then(res => res.data)
