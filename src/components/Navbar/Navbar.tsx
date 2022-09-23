import { Icon } from '@iconify/react'
import { Icons } from '../../utils/Icons'
import NavbarButton from '../UI/NavbarButton/NavbarButton'
import styles from './index.module.scss'
import UseAnimations from 'react-useanimations'
import github from 'react-useanimations/lib/github'
import { useThemeContext } from '../../context/ThemeContext'

const Navbar = () => {

    const {theme, setTheme} = useThemeContext()

	function handleNavigateToGithub() {
		window.open('https://github.com/kr4chinin/markdown-renaissance')
	}

    function handleToggleTheme() {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

	return (
		<div className={styles.container}>
			<NavbarButton Icon={<Icon icon={Icons.THEME} />} onClick={handleToggleTheme} />
			<NavbarButton
				Icon={
					<UseAnimations animation={github} size={32} strokeColor="#545454" />
				}
				onClick={handleNavigateToGithub}
			/>
		</div>
	)
}

export default Navbar
