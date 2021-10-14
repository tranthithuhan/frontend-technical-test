import Image from 'next/image'
import Logo from '../../assets/lbc-logo.webp'

import styles from '../../styles/Layout.module.scss'

const Topbar = () => {
	return (
		<div className={styles.topbar}>
			<Image src={Logo} alt="Leboncoin's logo" width={133} />
		</div>
	)
}

export default Topbar