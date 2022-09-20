import styles from './styles/App.module.css'

const App = () => {
	return (
        <div className={styles.container}>
            {/* <Navbar /> */}
            <h1 className={styles.title}>Markdown Renaissance</h1>
            <div className={styles.content}>
                <div className={styles['markdown-container']}>

                </div>
                <div className={styles['preview-container']}>

                </div>
            </div>
        </div>
    )
}

export default App
