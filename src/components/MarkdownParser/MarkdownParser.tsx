import './index.scss'
import hljs from 'highlight.js/lib/common'
import '../../../node_modules/highlight.js/styles/base16/papercolor-light.css'
import { useCallback, useState } from 'react'
import { debounce } from '../../helpers/debounce'
import { useMarkdownContext } from '../../context/MarkdownContext'

const MarkdownParser = () => {
	const { setMarkdown } = useMarkdownContext()

	const handleChange = (value: string) => {
		setMarkdown(value)
	}

	const debouncedHandleChange = useCallback(debounce(handleChange, 500), [])

	function handleUpdate(text: string) {
		let resultElement = document.querySelector('#highlighting-content')!

		if (!(resultElement instanceof HTMLElement)) {
			return
		}

		// Handle final newlines (<code /> for aesthetic reasons do not show last line if it is empty, so
		// we add a newline to the end of the text to make sure it is shown and to avoid bugs with caret position)
		if (text[text.length - 1] === '\n') {
			// If the last character is a newline character, add a placeholder space character to the final line
			text += ' '
		}

		// Update the result element, replacing html special characters with their html entities prevents
		// new HTML tags from being created, allowing the actual source code displays instead of the browser
		// attempting to render the code (this will help to handle new line functionality)
		resultElement.innerHTML = text
			.replace(new RegExp('&', 'g'), '&')
			.replace(new RegExp('<', 'g'), '<')

		// Syntax highlight with highlight.js package
		hljs.highlightElement(resultElement)
	}

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
