import { FC } from 'react'
import styles from './index.module.scss'

interface NavbarButtonProps {
	Icon: React.ReactNode
	onClick: () => void
}

const NavbarButton: FC<NavbarButtonProps> = ({ Icon, onClick }) => {
	return (
		<button onClick={onClick} className={styles['navbar-btn']}>
			{Icon}
		</button>
	)
}

export default NavbarButton
