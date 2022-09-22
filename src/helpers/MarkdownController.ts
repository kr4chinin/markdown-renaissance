import { Headers } from '../utils/headers'

class MarkdownController {
	private _textareaRef: HTMLTextAreaElement | null
	private _textareaValue: string
	private _setTextareaValue: (value: string) => void
	private _setMarkdown: (value: string) => void

	constructor(
		textareaRef: HTMLTextAreaElement | null,
		textareaValue: string,
		textareaValueSetter: (value: string) => void,
		markdownSetter: (value: string) => void
	) {
		this._textareaRef = textareaRef
		this._textareaValue = textareaValue
		this._setTextareaValue = textareaValueSetter
		this._setMarkdown = markdownSetter
	}

	clear() {
		if (!this._textareaRef) {
			return
		}

		this._setTextareaValue('')
		this._setMarkdown('')
		this._textareaRef.focus()
	}

	// Insert bold / italic / link text template or make selected text bold / italic / link
	handleInsert(option: 'bold' | 'italic' | 'link') {
		if (!this._textareaRef) {
			return
		}

		// Get selection start and end position
		const selectionStart = this._textareaRef.selectionStart
		const selectionEnd = this._textareaRef.selectionEnd

		if (selectionStart === null || selectionEnd === null) {
			return
		}

		const textBefore = this._textareaValue.slice(0, selectionStart)
		const textAfter = this._textareaValue.slice(selectionEnd)

		// Slice out chunk of selected text
		const selectedText = this._textareaValue.slice(selectionStart, selectionEnd)

		// Make selected text chunk bold / italic / link and insert it on its intial position (if no
		// selected text - we will insert just **** / ** / [](url) to the place where cursor was located)

		let result = ''

		switch (option) {
			case 'bold':
				result = `${textBefore}**${selectedText}**${textAfter}`
				break
			case 'italic':
				result = `${textBefore}*${selectedText}*${textAfter}`
				break
			case 'link':
				result = `${textBefore}[${selectedText}](url)${textAfter}`
				break
			default:
				return
		}

		this._setTextareaValue(result)
		this._setMarkdown(result)
		this._textareaRef.focus()
	}

	handleHeader(type: Headers) {
		if (!this._textareaRef) {
			return
		}

		// Get selection start and end position
		const selectionStart = this._textareaRef.selectionStart
		const selectionEnd = this._textareaRef.selectionEnd

		if (selectionStart === null || selectionEnd === null) {
			return
		}

		const textBefore = this._textareaValue.slice(0, selectionStart)
		const textAfter = this._textareaValue.slice(selectionEnd)

		// Slice out chunk of selected text
		const selectedText = this._textareaValue.slice(selectionStart, selectionEnd)

		// Insert header tag before selected chunk of text
		let result = ''

		switch (type) {
			case 'h1':
				result = `${textBefore}# ${selectedText}${textAfter}`
				break
			case 'h2':
				result = `${textBefore}## ${selectedText}${textAfter}`
				break
			case 'h3':
				result = `${textBefore}### ${selectedText}${textAfter}`
				break
			case 'h4':
				result = `${textBefore}#### ${selectedText}${textAfter}`
				break
			case 'h5':
				result = `${textBefore}##### ${selectedText}${textAfter}`
				break
			case 'h6':
				result = `${textBefore}###### ${selectedText}${textAfter}`
				break
			default:
				return
		}

		this._setTextareaValue(result)
		this._setMarkdown(result)
		this._textareaRef.focus()
	}
}

export default MarkdownController
