import Modal from 'react-modal'

import styles from '../../styles/Modal.module.scss'
import React, { FC, ReactNode } from 'react'

type ModalProps = {
	children: ReactNode,
	isOpen: boolean,
	closeModal: Function,
	modalTitle?: string,
}

const ModalContainer: FC<ModalProps> = ({
	children,
	isOpen,
	closeModal,
	modalTitle,
}) => {
	const handleCloseModal = () => {
		closeModal()
	}
	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={closeModal}
			contentLabel="Example Modal"
			className={styles.modal}
			overlayClassName={styles.overlay}
		>
			<div className={styles.modal__closeIcon} onClick={handleCloseModal}>x</div>
			{
				!!modalTitle &&
					<div
						className={styles.modal__header}
						data-testid="modal-header"
					>
						{ modalTitle }
					</div>
			}
			<div className={styles.modal__content} data-testid="modal-content">
				{ children }
			</div>
		</Modal>
	)
}

export default ModalContainer