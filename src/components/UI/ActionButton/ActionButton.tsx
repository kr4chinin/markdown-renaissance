import { Tooltip } from '@reach/tooltip'
import '@reach/tooltip/styles.css'
import cn from 'classnames'
import { FC } from 'react'
import { useThemeContext } from '../../../context/ThemeContext'
import styles from './index.module.scss'

interface ActionButtonProps {
	Icon: React.ReactNode
	onClick: () => void
	tooltipTitle?: string
	isActive?: boolean
}

const ActionButton: FC<ActionButtonProps> = ({
	Icon,
	onClick,
	tooltipTitle,
	isActive = false
}) => {
	const { isDark } = useThemeContext()

	// If user specified tooltipTitle, then show tooltip
	if (tooltipTitle) {
		return (
			<Tooltip
				label={tooltipTitle}
				style={{
					backgroundColor: isDark ? '#3a4f4d' : '',
					border: isDark ? '1px solid #533c3c' : '',
					color: isDark ? '#95a59f' : ''
				}}
			>
				<button
					type="button"
					className={cn(
						styles['action-btn'],
						{ [styles.active]: isActive },
						{ [styles.dark]: isDark }
					)}
					onClick={onClick}
				>
					{Icon}
				</button>
			</Tooltip>
		)
	}

	// Otherwise render ordinary ActionButton
	return (
		<button
			type="button"
			className={cn(
				styles['action-btn'],
				{ [styles.active]: isActive },
				{ [styles.dark]: isDark }
			)}
			onClick={onClick}
		>
			{Icon}
		</button>
	)
}

export default ActionButton
