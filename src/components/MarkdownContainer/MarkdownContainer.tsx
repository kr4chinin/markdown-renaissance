import MarkdownParser from '../MarkdownParser/MarkdownParser'
import styles from './index.module.scss'

const MarkdownContainer = () => {
	return (
		<div className={styles.container}>
			<div className={styles['title-container']}>
				<p>Icon</p>
				<h2>Your markdown</h2>
				<p>Icon</p>
			</div>
			<div>Line + svg + line</div>
			<div className={styles['content-container']}>
				<div className={styles['controls-container']}></div>
				<div className={styles['parser-container']}>
					<MarkdownParser />
				</div>
			</div>
			<div className={styles['stats-container']}></div>
		</div>
	)
}

export default MarkdownContainer
