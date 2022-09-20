import PreviewParser from '../../PreviewParser/PreviewParser'
import BreakLine from '../BreakLine/BreakLine'
import ContainerTitle from '../ContainerTitle/ContainerTitle'
import styles from './index.module.scss'

const PreviewContainer = () => {
	return (
		<div>
			<div className={styles.container}>
				<ContainerTitle title="Preview" />
                <BreakLine />
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
