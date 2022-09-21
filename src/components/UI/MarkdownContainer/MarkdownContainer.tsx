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
import { handleInsertBold } from '../../../helpers/insertBold'

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
								handleInsertBold(
									textareaRef,
									textareaValue,
									setMarkdown,
									setTextareaValue
								)
							}
						/>
						<ActionButton
							Icon={<Icon icon={Icons.ITALIC} />}
							onClick={() => {}}
						/>
						<ActionButton
							Icon={<Icon icon={Icons.HEADER} />}
							onClick={() => {}}
						/>
						<ActionButton
							Icon={<Icon icon={Icons.LINK} />}
							onClick={() => {}}
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
