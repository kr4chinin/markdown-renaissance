import { FC } from 'react'
import { ReactComponent as Papyrus } from '../../../assets/icons/papyrus.svg'
import styles from './index.module.scss'

interface ControlsContainerProps {
	children: React.ReactNode
}

const ControlsContainer: FC<ControlsContainerProps> = ({ children }) => {
	return (
		<div className={styles['controls-container']}>
			<Papyrus className={styles['side-icon']} />
			<div className={styles.buttons}>{children}</div>
		</div>
	)
}

export default ControlsContainer
