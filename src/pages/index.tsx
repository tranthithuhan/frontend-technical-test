import type { FC } from 'react'
import styles from '../styles/Layout.module.scss'
import { useIntl } from '../plugins/i18n'

const Home: FC = () => {
  const { t } = useIntl()

  return (
    <div className={styles.body}>
      <h1 className={styles.title}>
        { t('common.hello') }
      </h1>
    </div>
  )
}

export default Home