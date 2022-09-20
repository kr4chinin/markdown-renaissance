import MarkdownParser from '../../MarkdownParser/MarkdownParser'
import BreakLine from '../BreakLine/BreakLine'
import ContainerTitle from '../ContainerTitle/ContainerTitle'
import styles from './index.module.scss'

const MarkdownContainer = () => {
	return (
		<div className={styles.container}>
            <ContainerTitle title='Your markdown' />
            <BreakLine />
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
