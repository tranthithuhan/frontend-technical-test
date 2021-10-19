import React, { FC } from "react"
import { Message } from "../../types/message"
import styles from '../../styles/Messages.module.scss'
import UserIcon from '../../assets/user.png'
import Image from 'next/image'

type MessageProps = {
  sendByMe: boolean,
  message: Message
}

const Item: FC<MessageProps> = ({ message, sendByMe }) => {
  return (
    <div
      data-testid="message-item"
      className={`${styles.message} ${sendByMe ? styles.message__sendByMe : null}`}
    >
      {
        !sendByMe && (
          <div
            data-testid="message-send-byMe"
            className={styles.message__icon}
          >
            <Image src={UserIcon} alt="User logo" height={28} width={28} />
          </div>
        )
      }
      <div
        data-testid="message-body"
        className={`${styles.message__body} ${sendByMe ? styles.message__sendByMe__body : null}`}
      >
        { message.body }
      </div>
    </div>
  )
}

export default React.memo(Item, (props, nextProps)=> {
  if(props.message.id === nextProps.message.id) {
    return true
  }
})
