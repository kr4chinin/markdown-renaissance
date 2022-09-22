import { Icon } from '@iconify/react'
import { useMarkdownContext } from '../../../context/MarkdownContext'
import { Icons } from '../../../utils/Icons'
import PreviewParser from '../../PreviewParser/PreviewParser'
import ActionButton from '../ActionButton/ActionButton'
import BreakLine from '../BreakLine/BreakLine'
import ContainerTitle from '../ContainerTitle/ContainerTitle'
import ControlsContainer from '../ControlsContainer/ControlsContainer'
import styles from './index.module.scss'

const PreviewContainer = () => {
	const { markdown } = useMarkdownContext()

	function handleSaveSession() {
		localStorage.setItem('md-renaissance-session', markdown)
	}

	function handleDeleteSession() {
		localStorage.removeItem('md-renaissance-session')
	}

	return (
		<div className={styles.container}>
			<ContainerTitle title="Preview" />
			<BreakLine />
			<div className={styles['content-container']}>
				<ControlsContainer>
					<ActionButton
						Icon={<Icon icon={Icons.DELETE_SAVED} />}
						onClick={handleDeleteSession}
					/>
					<ActionButton
						Icon={<Icon icon={Icons.SAVE} />}
						onClick={handleSaveSession}
					/>
				</ControlsContainer>
				<div className={styles['parser-container']}>
					<PreviewParser />
				</div>
			</div>
			<div className={styles['stats-container']}></div>
		</div>
	)
}

export default PreviewContainer
