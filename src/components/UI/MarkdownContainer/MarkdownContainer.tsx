import { Icon } from '@iconify/react'
import cn from 'classnames'
import { useRef, useState } from 'react'
import UseAnimations from 'react-useanimations'
import download from 'react-useanimations/lib/download'
import { useMarkdownContext } from '../../../context/MarkdownContext'
import { useThemeContext } from '../../../context/ThemeContext'
import MarkdownController from '../../../controllers/MarkdownController'
import { Icons } from '../../../utils/Icons'
import { animatedIconsPrimaryColor } from '../../../utils/consts'
import MarkdownParser from '../../MarkdownParser/MarkdownParser'
import MarkdownStats from '../../MarkdownStats/MarkdownStats'
import ActionButton from '../ActionButton/ActionButton'
import BreakLine from '../BreakLine/BreakLine'
import ContainerTitle from '../ContainerTitle/ContainerTitle'
import ControlsContainer from '../ControlsContainer/ControlsContainer'
import HeadersDropdown from '../HeadersDropdown/HeadersDropdown'
import styles from './index.module.scss'

const MarkdownContainer = () => {
	const { setMarkdown } = useMarkdownContext()
	const { isDark } = useThemeContext()

	const textareaRef = useRef<HTMLTextAreaElement | null>(null)

	const [textareaValue, setTextareaValue] = useState('')
	const [isHeaderDropdownOpen, setIsHeaderDropdownOpen] = useState(false)

	const markdownController = new MarkdownController(
		textareaRef.current,
		textareaValue,
		setTextareaValue,
		setMarkdown
	)

	function handleClear() {
		markdownController.clear()
	}

	function handleRestoreSession() {
		let savedMarkdown = localStorage.getItem('md-renaissance-session')
		if (savedMarkdown) {
			setMarkdown(savedMarkdown)
			if (textareaRef?.current) {
				setTextareaValue(savedMarkdown)
				textareaRef.current.value = savedMarkdown
			}
		}
	}

	return (
		<div className={styles.container}>
			<ContainerTitle title="Your markdown" />
			<BreakLine />
			<div
				className={cn(styles['content-container'], {
					[styles.dark]: isDark
				})}
			>
				<ControlsContainer>
					<ActionButton
						tooltipTitle="Bold"
						Icon={<Icon icon={Icons.BOLD} />}
						onClick={() => markdownController.handleInsert('bold')}
					/>
					<ActionButton
						tooltipTitle="Italic"
						Icon={<Icon icon={Icons.ITALIC} />}
						onClick={() => markdownController.handleInsert('italic')}
					/>
					<HeadersDropdown
						markdownController={markdownController}
						isShown={isHeaderDropdownOpen}
						setIsShown={setIsHeaderDropdownOpen}
					/>
					<ActionButton
						tooltipTitle="Link"
						Icon={<Icon icon={Icons.LINK} />}
						onClick={() => markdownController.handleInsert('link')}
					/>
					<ActionButton
						tooltipTitle="Clear"
						Icon={<Icon icon={Icons.CLEAR} />}
						onClick={handleClear}
					/>
					<ActionButton
						tooltipTitle="Restore session"
						Icon={
							<UseAnimations
								animation={download}
								strokeColor={isDark ? '#5c6361' : animatedIconsPrimaryColor}
								fillColor={isDark ? '#2e3432' : '#d1d1d1'}
							/>
						}
						onClick={handleRestoreSession}
					/>
				</ControlsContainer>

				<div className={styles['parser-container']}>
					<MarkdownParser
						textareaValue={textareaValue}
						setTextareaValue={setTextareaValue}
						ref={textareaRef}
					/>
				</div>
			</div>
			<div className={styles['stats-container']}>
				<MarkdownStats />
			</div>
		</div>
	)
}

export default MarkdownContainer
