import type { FC } from 'react'
import styles from '../styles/Layout.module.scss'
import { useIntl } from '../plugins/i18n'
import { useContext, useEffect } from 'react'
import { getUserConversations, getUsersInConversations } from '../utils/conversation'
import { AppContext } from '../store/context'
import { FETCH_CONVERSATIONS_SUCCESS, FETCH_USERS_SUCCESS } from '../store/reducers'

const Home: FC = () => {
  const { t } = useIntl()
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
      <h1 className={styles.title}>
        { t('common.hello') }
      </h1>
    </div>
  )
}

export default Home