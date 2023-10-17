import { Icon } from '@iconify/react'
import UseAnimations from 'react-useanimations'
import github from 'react-useanimations/lib/github'
import { useThemeContext } from '../../context/ThemeContext'
import { Icons } from '../../utils/Icons'
import { animatedIconsPrimaryColor } from '../../utils/consts'
import NavbarButton from '../UI/NavbarButton/NavbarButton'
import styles from './index.module.scss'

const Navbar = () => {
	const { isDark, setTheme } = useThemeContext()

	function handleNavigateToGithub() {
		window.open('https://github.com/kr4chinin/markdown-renaissance')
	}

	function handleToggleTheme() {
		setTheme(!isDark ? 'dark' : 'light')
	}

	return (
		<div className={styles.container}>
			<NavbarButton
				Icon={<Icon icon={Icons.THEME} />}
				onClick={handleToggleTheme}
			/>
			<NavbarButton
				Icon={
					<UseAnimations
						animation={github}
						size={32}
						strokeColor={isDark ? '#5c6361' : animatedIconsPrimaryColor}
					/>
				}
				onClick={handleNavigateToGithub}
			/>
		</div>
	)
}

export default Navbar
