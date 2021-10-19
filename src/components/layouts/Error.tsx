import React, { FC } from 'react';
import styles from '../../styles/Errors.module.scss'
import { useIntl } from '../../plugins/i18n'

interface ErrorProps {
	errorCode: number;
}

const Error: FC<ErrorProps> = ({ errorCode }) => {
	const { t } = useIntl()
	
	return (
		<div className={styles.errors}>
			<div
				data-testid="error-title"
				className={styles.errors__title}
			>
				{t(`error.${errorCode}.title`)}
			</div>
			<div
				className={styles.errors__message}
				data-testid="error-message"
			>
				{t(`error.${errorCode}.message`)}
			</div>
		</div>
	);
};

export default Error;
