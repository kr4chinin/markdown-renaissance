import MarkdownParser from '../../MarkdownParser/MarkdownParser'
import BreakLine from '../BreakLine/BreakLine'
import ContainerTitle from '../ContainerTitle/ContainerTitle'
import styles from './index.module.scss'
import { Icon } from '@iconify/react'
import ActionButton from '../ActionButton/ActionButton'
import { Icons } from '../../../utils/Icons'
import { useState } from 'react'
import { useMarkdownContext } from '../../../context/MarkdownContext'
import MarkdownController from '../../../helpers/MarkdownController'
import ControlsContainer from '../ControlsContainer/ControlsContainer'
import HeadersDropdown from '../HeadersDropdown/HeadersDropdown'

const MarkdownContainer = () => {
	const [textareaValue, setTextareaValue] = useState('')
	const [textareaRef, setTextareaRef] = useState<HTMLTextAreaElement | null>(
		null
	)

	const [isHeaderDropdownOpen, setIsHeaderDropdownOpen] = useState(false)

	const { setMarkdown } = useMarkdownContext()

	const markdownController = new MarkdownController(
		textareaRef,
		textareaValue,
		setTextareaValue,
		setMarkdown
	)

	function handleClear() {
		markdownController.clear()
	}

	function handleOpenHeaderDropdown() {
		setIsHeaderDropdownOpen(true)
	}

	return (
		<div className={styles.container}>
			<ContainerTitle title="Your markdown" />
			<BreakLine />
			<div className={styles['content-container']}>
				<ControlsContainer>
					<ActionButton
						Icon={<Icon icon={Icons.BOLD} />}
						onClick={() => markdownController.handleInsert('bold')}
					/>
					<ActionButton
						Icon={<Icon icon={Icons.ITALIC} />}
						onClick={() => markdownController.handleInsert('italic')}
					/>
					<HeadersDropdown
						markdownController={markdownController}
						isShown={isHeaderDropdownOpen}
						setIsShown={setIsHeaderDropdownOpen}
					/>
					<ActionButton
						Icon={<Icon icon={Icons.LINK} />}
						onClick={() => markdownController.handleInsert('link')}
					/>
					<ActionButton
						Icon={<Icon icon={Icons.CLEAR} />}
						onClick={handleClear}
					/>
				</ControlsContainer>

				<div className={styles['parser-container']}>
					<MarkdownParser
						textareaValue={textareaValue}
						setTextareaValue={setTextareaValue}
						setTextareaRef={setTextareaRef}
					/>
				</div>
			</div>
			<div className={styles['stats-container']}></div>
		</div>
	)
}

export default MarkdownContainer
