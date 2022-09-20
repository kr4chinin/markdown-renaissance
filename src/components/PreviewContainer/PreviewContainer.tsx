import PreviewParser from '../PreviewParser/PreviewParser'
import styles from './index.module.scss'

const PreviewContainer = () => {
	return (
		<div>
			<div className={styles.container}>
				<div className={styles['title-container']}>
					<p>Icon</p>
					<h2>Preview</h2>
					<p>Icon</p>
				</div>
				<div>Line + svg + line</div>
				<div className={styles['content-container']}>
					<div className={styles['controls-container']}></div>
					<div className={styles['parser-container']}>
                        <PreviewParser />
                    </div>
				</div>
				<div className={styles['stats-container']}></div>
			</div>
		</div>
	)
}

export default PreviewContainer
