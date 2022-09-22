import styles from './index.module.scss'
import { Remarkable } from 'remarkable'
import { useMarkdownContext } from '../../context/MarkdownContext'

const md = new Remarkable({
	linkTarget: '_blank'
})

const PreviewParser = () => {
	const { markdown } = useMarkdownContext()

	return (
		<pre
			className={styles.container}
			dangerouslySetInnerHTML={{ __html: md.render(markdown) }}
		/>
	)
}

export default PreviewParser
