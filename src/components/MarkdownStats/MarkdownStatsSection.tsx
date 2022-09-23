import ActionButton from '../UI/ActionButton/ActionButton'
import styles from './index.module.scss'
import UseAnimations from 'react-useanimations'
import visibility from 'react-useanimations/lib/visibility'
import { FC, useState } from 'react'

interface MarkdownStatsSectionProps {
    Icon: React.ReactNode
    children: React.ReactNode
}

const MarkdownStatsSection: FC<MarkdownStatsSectionProps> = ({Icon, children}) => {

    const [isShown, setIsShown] = useState(true)

    function toggle() {
        setIsShown(prev => !prev)
    }

	return (
		<div className={styles.section}>
			<ActionButton
				tooltipTitle={isShown ? 'Hide' : 'Show'}
				isActive={!isShown}
				Icon={<UseAnimations animation={visibility} speed={2} />}
				onClick={toggle}
			/>
			{Icon}
			{isShown && (
				<div className={styles.info}>
                    {children}
				</div>
			)}
		</div>
	)
}

export default MarkdownStatsSection
