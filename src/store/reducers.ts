export const FETCH_CONVERSATIONS_SUCCESS = 'FETCH_CONVERSATIONS_SUCCESS'
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
export const SELECT_CONVERSATION = 'SELECT_CONVERSATION'


export const reducer = (state, action) => {
	switch (action.type) {
		case FETCH_CONVERSATIONS_SUCCESS:
			return {
				...state,
				conversations: action.payload
			}
		
		case FETCH_USERS_SUCCESS:
			return {
				...state,
				users: action.payload
			}
			
		case SELECT_CONVERSATION:
			return {
				...state,
				selectedConversationId: action.payload
			}
		
		default:
			return state
	}
}
