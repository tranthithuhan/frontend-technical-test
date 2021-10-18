import type { Conversation } from '../types/conversation'
import { Message } from '../types/message'
import BackendRequest from '../plugins/backend-request'

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

export const createMessageByConversationId = (conversationId: Conversation['id'], message: Message):Promise<Message> =>
	new BackendRequest({
		url: `conversations/${conversationId}`,
		method: 'POST',
		data: message
	}).exec().then(res => res.data)
