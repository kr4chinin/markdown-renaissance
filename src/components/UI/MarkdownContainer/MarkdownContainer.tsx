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

const MarkdownContainer = () => {
	const [textareaValue, setTextareaValue] = useState('')
	const [textareaRef, setTextareaRef] = useState<HTMLTextAreaElement | null>(
		null
	)

	const { setMarkdown } = useMarkdownContext()

	const markdownController = new MarkdownController(
		textareaRef,
		textareaValue,
		setTextareaValue,
		setMarkdown
	)

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
					<ActionButton
						Icon={<Icon icon={Icons.HEADER} />}
						onClick={() => {}}
					/>
					<ActionButton
						Icon={<Icon icon={Icons.LINK} />}
						onClick={() => markdownController.handleInsert('link')}
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
