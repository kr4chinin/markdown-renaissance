import './index.scss'
import '../../../node_modules/highlight.js/styles/base16/papercolor-light.css'
import {
	ForwardedRef,
	forwardRef,
	useCallback,
	useEffect
} from 'react'
import { debounce } from '../../helpers/debounce'
import { useMarkdownContext } from '../../context/MarkdownContext'
import { handleUpdateHighlight } from '../../helpers/handleUpdateHighlight'
import { initialMarkdownValue } from '../../utils/initialMarkdownValue'
import { useThemeContext } from '../../context/ThemeContext'

interface MarkdownParserProps {
	textareaValue: string
	setTextareaValue: (value: string) => void
}

const MarkdownParser = forwardRef(
	(
		{ textareaValue, setTextareaValue }: MarkdownParserProps,
		ref: ForwardedRef<HTMLTextAreaElement | null>
	) => {
		const { isDark } = useThemeContext()

		const { setMarkdown } = useMarkdownContext()

		const handleChange = (value: string) => {
			setMarkdown(value)
		}

		const debouncedHandleChange = useCallback(debounce(handleChange, 250), [])

		function handleSyncScroll(element: HTMLElement) {
			// Scroll result to scroll coords of event - sync with textarea
			let resultElement = document.querySelector('#highlighting')!

			if (!(resultElement instanceof HTMLElement)) {
				return
			}

			resultElement.scrollTop = element.scrollTop
			resultElement.scrollLeft = element.scrollLeft
		}

		useEffect(() => {
			setTextareaValue(initialMarkdownValue)
			setMarkdown(initialMarkdownValue)
		}, [setTextareaValue, setMarkdown])

		useEffect(() => {
			handleUpdateHighlight(textareaValue)
		}, [textareaValue])

		return (
			<>
				<textarea
					className={isDark ? 'dark' : ''}
					id="editing"
					value={textareaValue}
					ref={ref}
					onInput={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
						handleSyncScroll(e.target)
						handleUpdateHighlight(e.target.value)
					}}
					onScroll={(e: React.UIEvent<HTMLTextAreaElement>) => {
						if (e.target instanceof HTMLTextAreaElement) {
							handleSyncScroll(e.target)
						}
					}}
					onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
						debouncedHandleChange(e.target.value)
						setTextareaValue(e.target.value)
					}}
					placeholder="Enter markdown..."
				/>

				<div
					id="highlighting"
					aria-hidden="true"
					style={{
						background: isDark ? '#1a1d1b' : ''
					}}
				>
					<code
						className="language-markdown"
						id="highlighting-content"
						style={{
							background: isDark ? '#1a1d1b' : ''
						}}
					></code>
				</div>
			</>
		)
	}
)

export default MarkdownParser
