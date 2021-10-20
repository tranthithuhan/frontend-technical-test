import React, { createContext, useReducer } from 'react'
import { Conversation } from '../types/conversation'
import { User } from '../types/user'
import { reducer } from './reducers'


type InitialStateType = {
	conversations: Conversation[],
	users: User[];
	selectedConversation: Conversation,
}

const initialState = {
	conversations: [],
	users: [],
	selectedConversation: null,
}

const AppContext = createContext<{
	state: InitialStateType;
	dispatch: React.Dispatch<any>;
}>({
	state: initialState,
	dispatch: () => null
});

const { Provider } = AppContext;

const StateProvider = ( { children } ) => {
	const [state, dispatch] = useReducer(reducer, initialState)
	
	return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { AppContext, StateProvider }