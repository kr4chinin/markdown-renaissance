import styles from './index.module.scss'
import cn from 'classnames'
import { FC, useRef } from 'react'
import { useClickOutside } from '../../../hooks/useClickOutside'
import ActionButton from '../ActionButton/ActionButton'
import { Icon } from '@iconify/react'
import { Icons } from '../../../utils/Icons'
import { headers } from '../../../utils/headers'
import MarkdownController from '../../../helpers/MarkdownController'
import Tooltip from '@reach/tooltip'
import '@reach/tooltip/styles.css'
import { useThemeContext } from '../../../context/ThemeContext'

interface HeadersDropdownProps {
	isShown: boolean
	setIsShown: React.Dispatch<React.SetStateAction<boolean>>
	markdownController: MarkdownController
}

const HeadersDropdown: FC<HeadersDropdownProps> = ({
	isShown,
	setIsShown,
	markdownController
}) => {
	const { isDark } = useThemeContext()

	const triggerRef = useRef<HTMLDivElement>(null)
	const dropdownRef = useRef<HTMLDivElement>(null)

	function toggleDropdown() {
		setIsShown(prev => !prev)
	}

	useClickOutside(dropdownRef, triggerRef, () => setIsShown(false))

	return (
		<Tooltip
			label="Headers"
			style={{
				backgroundColor: isDark ? '#3a4f4d' : '',
				border: isDark ? '1px solid #533c3c' : '',
				color: isDark ? '#95a59f' : ''
			}}
		>
			<div
				onClick={toggleDropdown}
				ref={triggerRef}
				className={cn(styles.trigger, { [styles.dark]: isDark })}
				role="button"
			>
				<Icon icon={Icons.HEADER} />
				<div
					className={cn(styles.dropdown, { [styles.active]: isShown })}
					ref={dropdownRef}
				>
					<div className={cn(styles.menu, { [styles.active]: isShown })}>
						{headers.map(header => (
							<ActionButton
								key={header}
								Icon={
									<Icon
										icon={`ci:heading-${header}`}
										style={{ width: 17, height: 17 }}
									/>
								}
								onClick={() => markdownController.handleHeader(header)}
							/>
						))}
					</div>
				</div>
			</div>
		</Tooltip>
	)
}

export default HeadersDropdown
