export function calculateWords(markdown: string): number {
	return (
		markdown
			.split(' ')

			// Replacing all non-word characters with an empty string
			.map(word => word.replace(/\W/g, ''))

			// Filtering out empty strings
			.filter(word => word.length > 0).length
	)
}

export function calculateCharacters(markdown: string): number {
	return markdown.length
}
