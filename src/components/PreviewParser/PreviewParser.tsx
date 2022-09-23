import styles from './index.module.scss'
import { Remarkable } from 'remarkable'
import { useMarkdownContext } from '../../context/MarkdownContext'
import cn from 'classnames'
import { useThemeContext } from '../../context/ThemeContext'

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
