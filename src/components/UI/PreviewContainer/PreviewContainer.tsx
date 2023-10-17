import cn from 'classnames'
import { lazy, Suspense, useState } from 'react'
import UseAnimations from 'react-useanimations'
import plusToX from 'react-useanimations/lib/plusToX'
import trash from 'react-useanimations/lib/trash'
import { useMarkdownContext } from '../../../context/MarkdownContext'
import { useThemeContext } from '../../../context/ThemeContext'
import { animatedIconsPrimaryColor } from '../../../utils/consts'
import ActionButton from '../ActionButton/ActionButton'
import BreakLine from '../BreakLine/BreakLine'
import ContainerTitle from '../ContainerTitle/ContainerTitle'
import ControlsContainer from '../ControlsContainer/ControlsContainer'
import styles from './index.module.scss'

const PreviewParser = lazy(() => import('../../PreviewParser/PreviewParser'))

const PreviewContainer = () => {
	const { isDark } = useThemeContext()
	const { markdown } = useMarkdownContext()

	const [showPreview, setShowPreview] = useState(false)
	const [isSavedActive, setIsSavedActive] = useState(false)

	function handleSaveSession() {
		localStorage.setItem('md-renaissance-session', markdown)
	}

	function handleDeleteSession() {
		localStorage.removeItem('md-renaissance-session')
	}

	function toggleShowPreview() {
		setShowPreview(prev => !prev)
	}

	return (
		<div className={cn(styles.container, { [styles.dark]: isDark })}>
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
								strokeColor={isDark ? '#5c6361' : animatedIconsPrimaryColor}
							/>
						}
						onClick={handleDeleteSession}
					/>
					<ActionButton
						tooltipTitle={isSavedActive ? 'Delete session' : 'Save session'}
						Icon={
							<UseAnimations
								animation={plusToX}
								strokeColor={isDark ? '#5c6361' : animatedIconsPrimaryColor}
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
					{showPreview && (
						<Suspense fallback={<p className={styles.loading}>Loading...</p>}>
							<PreviewParser />
						</Suspense>
					)}
				</div>
			</div>
			<div className={styles['stats-container']}>
				<ActionButton
					isActive={showPreview}
					Icon={<>1</>}
					onClick={toggleShowPreview}
				/>
				<p>Show preview</p>
			</div>
		</div>
	)
}

export default PreviewContainer
