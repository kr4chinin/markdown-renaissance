import ReactDOM from 'react-dom/client'
import App from './App'
import { MarkdownContextProvider } from './context/MarkdownContext'
import './styles/index.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<MarkdownContextProvider>
		<App />
	</MarkdownContextProvider>
)
