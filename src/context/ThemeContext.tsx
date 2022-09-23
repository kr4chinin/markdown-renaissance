import { createContext, FC, useContext, useState } from 'react'

export type Theme = 'light' | 'dark'

const ThemeContext = createContext({
	theme: 'light' as Theme,
	setTheme: (theme: Theme) => {}
})

export const useThemeContext = () => {
	return useContext(ThemeContext)
}

interface ThemeContextProviderProps {
	children: React.ReactNode
}

export const ThemeContextProvider: FC<ThemeContextProviderProps> = ({
	children
}) => {
	const [theme, setTheme] = useState<Theme>('light')

	return (
		<ThemeContext.Provider
			value={{
				theme,
				setTheme
			}}
		>
			{children}
		</ThemeContext.Provider>
	)
}
