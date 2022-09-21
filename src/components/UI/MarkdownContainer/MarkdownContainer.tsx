import MarkdownParser from '../../MarkdownParser/MarkdownParser'
import BreakLine from '../BreakLine/BreakLine'
import ContainerTitle from '../ContainerTitle/ContainerTitle'
import styles from './index.module.scss'
import { Icon } from '@iconify/react'
import ActionButton from '../ActionButton/ActionButton'
import { Icons } from '../../../utils/Icons'
import { ReactComponent as Papyrus } from '../../../assets/icons/papyrus.svg'
import { useState } from 'react'
import { useMarkdownContext } from '../../../context/MarkdownContext'
import { MarkdownController } from '../../../helpers/MarkdownController'

const MarkdownContainer = () => {
	const [textareaValue, setTextareaValue] = useState('')
	const [textareaRef, setTextareaRef] = useState<HTMLTextAreaElement | null>(
		null
	)

	const { setMarkdown } = useMarkdownContext()

	return (
		<div className={styles.container}>
			<ContainerTitle title="Your markdown" />
			<BreakLine />
			<div className={styles['content-container']}>
				<div className={styles['controls-container']}>
					<Papyrus className={styles['side-icon']} />
					<div className={styles.buttons}>
						<ActionButton
							Icon={<Icon icon={Icons.BOLD} />}
							onClick={() =>
								MarkdownController.handleInsert(
									'bold',
									textareaRef,
									textareaValue,
									setMarkdown,
									setTextareaValue
								)
							}
						/>
						<ActionButton
							Icon={<Icon icon={Icons.ITALIC} />}
							onClick={() =>
								MarkdownController.handleInsert(
									'italic',
									textareaRef,
									textareaValue,
									setMarkdown,
									setTextareaValue
								)
							}
						/>
						<ActionButton
							Icon={<Icon icon={Icons.HEADER} />}
							onClick={() =>
								MarkdownController.handleInsert(
									'italic',
									textareaRef,
									textareaValue,
									setMarkdown,
									setTextareaValue
								)
							}
						/>
						<ActionButton
							Icon={<Icon icon={Icons.LINK} />}
							onClick={() =>
								MarkdownController.handleInsert(
									'link',
									textareaRef,
									textareaValue,
									setMarkdown,
									setTextareaValue
								)
							}
						/>
					</div>
				</div>
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
