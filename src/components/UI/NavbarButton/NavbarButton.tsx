import { FC } from 'react'
import { useThemeContext } from '../../../context/ThemeContext'
import styles from './index.module.scss'
import cn from 'classnames'

interface NavbarButtonProps {
	Icon: React.ReactNode
	onClick: () => void
}

const NavbarButton: FC<NavbarButtonProps> = ({ Icon, onClick }) => {
	const { isDark } = useThemeContext()

	return (
		<button
			onClick={onClick}
			className={cn(styles['navbar-btn'], { [styles.dark]: isDark })}
		>
			{Icon}
		</button>
	)
}

export default NavbarButton
