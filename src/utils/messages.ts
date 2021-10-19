import type { Conversation } from '../types/conversation'
import { Message } from '../types/message'
import BackendRequest from '../plugins/backend-request'
import { getLoggedUserId } from './getLoggedUserId'

export const getMessageByConversationId = (conversationId: Conversation['id']):Promise<Message[]> =>
	new BackendRequest({
		url: `messages/${conversationId}`,
		method: 'GET'
	}).exec().then(res => res.data)

export const deleteMessageById = (messageId: Message['id']):Promise<object> =>
	new BackendRequest({
		url: `messages/${messageId}`,
		method: 'DELETE'
	}).exec().then(res => res.data)

export const createMessageByConversationId = (conversationId: Conversation['id'], message: string):Promise<Message> =>
	new BackendRequest({
		url: `messages/${conversationId}`,
		method: 'POST',
		data: {
			authorId: getLoggedUserId(),
			conversationId: conversationId,
			body: message,
			timestamp: Date.now(),
		}
	}).exec().then(res => res.data)
