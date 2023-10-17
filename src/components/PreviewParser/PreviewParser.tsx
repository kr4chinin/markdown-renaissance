import cn from 'classnames'
import { Remarkable } from 'remarkable'
import { useMarkdownContext } from '../../context/MarkdownContext'
import { useThemeContext } from '../../context/ThemeContext'
import styles from './index.module.scss'

const md = new Remarkable({
	linkTarget: '_blank'
})

const PreviewParser = () => {
	const { isDark } = useThemeContext()
	const { markdown } = useMarkdownContext()

	return (
		<pre
			className={cn(styles.container, { [styles.dark]: isDark })}
			dangerouslySetInnerHTML={{ __html: md.render(markdown) }}
		/>
	)
}

export default PreviewParser
