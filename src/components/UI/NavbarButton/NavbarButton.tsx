import { FC } from 'react'
import { useThemeContext } from '../../../context/ThemeContext'
import styles from './index.module.scss'
import cn from 'classnames'

interface NavbarButtonProps {
	Icon: React.ReactNode
	onClick: () => void
}

const NavbarButton: FC<NavbarButtonProps> = ({ Icon, onClick }) => {
	const { theme } = useThemeContext()

	return (
		<button
			onClick={onClick}
			className={cn(styles['navbar-btn'], { [styles.dark]: theme === 'dark' })}
		>
			{Icon}
		</button>
	)
}

export default NavbarButton
