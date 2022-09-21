import { createContext, FC, useContext, useMemo, useState } from 'react'

const MarkdownContext = createContext<{
	markdown: string
	setMarkdown: (markdown: string) => void
}>({
	markdown: '',
	setMarkdown: () => {}
})

export const useMarkdownContext = () => {
	return useContext(MarkdownContext)
}

interface MarkdownContextProviderProps {
	children: React.ReactNode
}

export const MarkdownContextProvider: FC<MarkdownContextProviderProps> = ({
	children
}) => {
	const [markdown, setMarkdown] = useState('')

	return (
		<MarkdownContext.Provider
			value={useMemo(() => ({ markdown, setMarkdown }), [markdown])}
		>
			{children}
		</MarkdownContext.Provider>
	)
}
