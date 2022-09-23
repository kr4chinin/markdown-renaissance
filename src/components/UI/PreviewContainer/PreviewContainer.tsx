import { useMarkdownContext } from '../../../context/MarkdownContext'
import { useState } from 'react'
import PreviewParser from '../../PreviewParser/PreviewParser'
import ActionButton from '../ActionButton/ActionButton'
import BreakLine from '../BreakLine/BreakLine'
import ContainerTitle from '../ContainerTitle/ContainerTitle'
import ControlsContainer from '../ControlsContainer/ControlsContainer'
import styles from './index.module.scss'
import plusToX from 'react-useanimations/lib/plusToX'
import trash from 'react-useanimations/lib/trash'
import UseAnimations from 'react-useanimations'
import { animatedIconsPrimaryColor } from '../../../utils/consts'

const PreviewContainer = () => {
	const { markdown } = useMarkdownContext()
	const [isSavedActive, setIsSavedActive] = useState(false)

	function handleSaveSession(): void {
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
						tooltipTitle="Delete session"
						Icon={
							<UseAnimations
								animation={trash}
								size={22}
								strokeColor={animatedIconsPrimaryColor}
							/>
						}
						onClick={handleDeleteSession}
					/>
					<ActionButton
						tooltipTitle={isSavedActive ? 'Delete session' : 'Save session'}
						Icon={
							<UseAnimations
								animation={plusToX}
								strokeColor={animatedIconsPrimaryColor}
							/>
						}
						onClick={() => {
							setIsSavedActive(prev => !prev)
							isSavedActive ? handleDeleteSession() : handleSaveSession()
						}}
						isActive={isSavedActive}
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
