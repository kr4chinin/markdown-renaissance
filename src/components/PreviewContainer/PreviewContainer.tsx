import styles from './index.module.scss'

const PreviewContainer = () => {
	return (
		<div>
			<div className={styles.container}>
				<div className={styles['title-container']}>
					<h2>Your markdown</h2>
				</div>
                <div>Line + svg + line</div>
				<div className={styles['content-container']}>
					<div className={styles['controls-container']}></div>
					<div className={styles['parser-container']}></div>
				</div>
				<div className={styles['stats-container']}></div>
			</div>
		</div>
	)
}

export default PreviewContainer
