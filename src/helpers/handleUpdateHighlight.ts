import hljs from "highlight.js"

export function handleUpdateHighlight(text: string) {
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
