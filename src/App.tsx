import cn from 'classnames'
import Navbar from './components/Navbar/Navbar'
import MarkdownContainer from './components/UI/MarkdownContainer/MarkdownContainer'
import PreviewContainer from './components/UI/PreviewContainer/PreviewContainer'
import { useThemeContext } from './context/ThemeContext'
import styles from './styles/App.module.scss'

const App = () => {
	const { isDark } = useThemeContext()

	if (isDark) {
		document.body.style.backgroundColor = '#1d2724'
	} else {
		document.body.style.backgroundColor = 'whitesmoke'
	}

	return (
		<div className={cn(styles.container, { [styles.dark]: isDark })}>
			<Navbar />
			<h1 className={styles.title}>Markdown Renaissance</h1>
			<div className={styles.content}>
				<MarkdownContainer />
				<PreviewContainer />
			</div>
		</div>
	)
}

export default App
