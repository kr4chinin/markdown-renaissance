import Navbar from './components/Navbar/Navbar'
import MarkdownContainer from './components/UI/MarkdownContainer/MarkdownContainer'
import PreviewContainer from './components/UI/PreviewContainer/PreviewContainer'
import styles from './styles/App.module.scss'

const App = () => {
	return (
        <div className={styles.container}>
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
