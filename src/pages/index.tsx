import type { FC } from 'react'
import styles from '../styles/Layout.module.scss'
import { useContext, useEffect } from 'react'
import { getUserConversations, getUsersInConversations } from '../utils/conversations'
import { AppContext } from '../store/context'
import { FETCH_CONVERSATIONS_SUCCESS, FETCH_USERS_SUCCESS, SELECT_CONVERSATION } from '../store/reducers'
import Conversations from "../components/conversations/List";
import Messages from '../components/messages/List'

const Home: FC = () => {
  const { dispatch } = useContext(AppContext)
  
  useEffect(() => {
    getUserConversations()
      .then(conversations => {
        dispatch({type: FETCH_CONVERSATIONS_SUCCESS, payload: conversations})
        getUsersInConversations(conversations)
          .then(users =>
            dispatch({type: FETCH_USERS_SUCCESS, payload: users})
          )
        
        if(!!conversations && conversations.length)
          dispatch({type: SELECT_CONVERSATION, payload: conversations[0] || {}})
      })
  }, [])

  return (
    <div className={styles.body}>
      <Conversations/>
      <Messages />
    </div>
  )
}

export default Home