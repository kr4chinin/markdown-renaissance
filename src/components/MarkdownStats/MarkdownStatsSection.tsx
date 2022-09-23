import ActionButton from '../UI/ActionButton/ActionButton'
import styles from './index.module.scss'
import UseAnimations from 'react-useanimations'
import visibility from 'react-useanimations/lib/visibility'
import { FC, useState } from 'react'
import cn from 'classnames'
import { useThemeContext } from '../../context/ThemeContext'
import { animatedIconsPrimaryColor } from '../../utils/consts'

interface MarkdownStatsSectionProps {
	Icon: React.ReactNode
	children: React.ReactNode
}

const MarkdownStatsSection: FC<MarkdownStatsSectionProps> = ({
	Icon,
	children
}) => {
	const { isDark } = useThemeContext()
	const [isShown, setIsShown] = useState(true)

	function toggle() {
		setIsShown(prev => !prev)
	}

	return (
		<div className={cn(styles.section, { [styles.dark]: isDark })}>
			<ActionButton
				tooltipTitle={isShown ? 'Hide' : 'Show'}
				isActive={!isShown}
				Icon={
					<UseAnimations
						animation={visibility}
						speed={2}
						strokeColor={isDark ? '#5c6361' : animatedIconsPrimaryColor}
					/>
				}
				onClick={toggle}
			/>
			{Icon}
			{isShown && <div className={styles.info}>{children}</div>}
		</div>
	)
}

export default MarkdownStatsSection
