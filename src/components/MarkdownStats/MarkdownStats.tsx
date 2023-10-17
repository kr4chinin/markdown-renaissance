import { Icon } from '@iconify/react'
import { useMarkdownContext } from '../../context/MarkdownContext'
import {
	calculateCharacters,
	calculateWords
} from '../../helpers/markdownCalculations'
import { Icons } from '../../utils/Icons'
import MarkdownStatsSection from './MarkdownStatsSection'
import styles from './index.module.scss'

const MarkdownStats = () => {
	const { markdown } = useMarkdownContext()

	return (
		<div className={styles.container}>
			<MarkdownStatsSection Icon={<Icon icon={Icons.WORDS} />}>
				<p>
					Words: <span>{calculateWords(markdown)}</span>
				</p>
			</MarkdownStatsSection>
			<MarkdownStatsSection Icon={<Icon icon={Icons.CHARACTERS} />}>
				<div className={styles.info}>
					<p>
						Characters: <span>{calculateCharacters(markdown)}</span>
					</p>
				</div>
			</MarkdownStatsSection>
		</div>
	)
}

export default MarkdownStats
