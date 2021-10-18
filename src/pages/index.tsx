import type { FC } from 'react'
import styles from '../styles/Layout.module.scss'
import { useContext, useEffect } from 'react'
import { getUserConversations, getUsersInConversations } from '../utils/conversations'
import { AppContext } from '../store/context'
import { FETCH_CONVERSATIONS_SUCCESS, FETCH_USERS_SUCCESS } from '../store/reducers'
import Conversations from "../components/conversations/List";


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
      })
    
    
  }, [])

  return (
    <div className={styles.body}>
      <Conversations/>
    </div>
  )
}

export default Home