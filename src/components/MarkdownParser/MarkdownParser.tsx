import './index.scss'
import '../../../node_modules/highlight.js/styles/base16/papercolor-light.css'
import { FC, useCallback } from 'react'
import { debounce } from '../../helpers/debounce'
import { useMarkdownContext } from '../../context/MarkdownContext'
import { handleUpdate } from '../../helpers/handleUpdateHighlight'

interface MarkdownParserProps {
	textareaValue: string
	setTextareaValue: (value: string) => void
	setTextareaRef: (ref: HTMLTextAreaElement | null) => void
}

const MarkdownParser: FC<MarkdownParserProps> = ({
	textareaValue,
	setTextareaValue,
	setTextareaRef
}) => {
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

	return (
		<>
			<textarea
				id="editing"
				value={textareaValue}
				ref={setTextareaRef}
				onInput={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
					handleSyncScroll(e.target)
					handleUpdate(e.target.value)
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

			<div id="highlighting" aria-hidden="true">
				<code className="language-markdown" id="highlighting-content"></code>
			</div>
		</>
	)
}

export default MarkdownParser
