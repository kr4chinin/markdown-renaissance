// Insert bold text template (****) or make selected text bold
export function handleInsertBold(
	textareaRef: HTMLTextAreaElement | null,
	textareaValue: string,
	setTextareaValue: (value: string) => void,
	setMarkdown: (value: string) => void,
) {
	const textarea = textareaRef

	if (!textarea) {
		return
	}

	// Get selection start and end position
	const selectionStart = textarea.selectionStart
	const selectionEnd = textarea.selectionEnd

	if (selectionStart === null || selectionEnd === null) {
		return
	}

	const textBefore = textareaValue.slice(0, selectionStart)
	const textAfter = textareaValue.slice(selectionEnd)

	// Slice out chunk of selected text
	const selectedText = textareaValue.slice(selectionStart, selectionEnd)

	// Make selected text chunk bold and insert it on its intial position (if no selected text - we will
	// insert just **** to the place where cursor was located)
	const result = textBefore + '**' + selectedText + '**' + textAfter

	setTextareaValue(result)
	setMarkdown(result)
	textarea.focus()
}
