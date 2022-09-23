import { FC } from 'react'
import styles from './index.module.scss'
import cn from 'classnames'
import Tooltip from '@reach/tooltip'
import '@reach/tooltip/styles.css'

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
    // If user specified tooltipTitle, then show tooltip
	if (tooltipTitle) {
		return (
			<Tooltip label={tooltipTitle}>
				<button
					className={cn(styles['action-btn'], { [styles.active]: isActive })}
					onClick={onClick}
				>
					{Icon}
				</button>
			</Tooltip>
		)
	}

    // Else render ordinary ActionButton
	return (
		<button
			className={cn(styles['action-btn'], { [styles.active]: isActive })}
			onClick={onClick}
		>
			{Icon}
		</button>
	)
}

export default ActionButton
