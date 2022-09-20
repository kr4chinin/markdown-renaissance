import './index.scss'
import hljs from 'highlight.js/lib/common'
import '../../../node_modules/highlight.js/styles/base16/papercolor-light.css'

const MarkdownParser = () => {
	function update(text: any) {
		let result_element = document.querySelector('#highlighting-content')!

		// Handle final newlines (<code /> for aesthetic reasons do not show last line if it is empty, so
        // we add a newline to the end of the text to make sure it is shown and to avoid bugs with caret position)
		if (text[text.length - 1] === '\n') {
			// If the last character is a newline character, add a placeholder space character to the final line
			text += ' ' 
		}

		// Update the result element, replacing html special characters with their html entities prevents
        // new HTML tags from being created, allowing the actual source code displays instead of the browser
        // attempting to render the code (this will help to handle new line functionality)
		result_element.innerHTML = text
			.replace(new RegExp('&', 'g'), '&')
			.replace(new RegExp('<', 'g'), '<')
        
		// Syntax highlight with highlight.js package
		hljs.highlightElement(result_element as HTMLElement)
	}

	function sync_scroll(element: any) {
		// Scroll result to scroll coords of event - sync with textarea 
		let result_element = document.querySelector('#highlighting')!

		result_element.scrollTop = element.scrollTop
		result_element.scrollLeft = element.scrollLeft
	}

	return (
		<>
			<textarea
				id="editing"
				onInput={(e: any) => {
					sync_scroll(e.target)
					update(e.target.value)
				}}
				onScroll={e => {
					sync_scroll(e.target)
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
