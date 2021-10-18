import type { User } from '../types/user'
import BackendRequest from '../plugins/backend-request'
import { getLoggedUserId } from './getLoggedUserId'

export const getAllUser = ():Promise<User[]> =>
	new BackendRequest({
		url: `users`,
		method: 'GET'
	}).exec().then(res => res.data)

export const getUserByUserId = (userId: User['id']):Promise<User> =>
	new BackendRequest({
		url: `users/${userId}`,
		method: 'GET'
	}).exec().then(res => res.data)

export const isMe = (userId: User['id']) => userId === getLoggedUserId()