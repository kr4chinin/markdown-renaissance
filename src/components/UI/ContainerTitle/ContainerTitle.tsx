import cn from 'classnames'
import { FC, memo } from 'react'
import { ReactComponent as Greek } from '../../../assets/icons/greek.svg'
import { useThemeContext } from '../../../context/ThemeContext'
import styles from './index.module.scss'

interface ContainerTitleProps {
	title: string
	width?: string
	height?: string
}

const ContainerTitle: FC<ContainerTitleProps> = ({
	title,
	width = '465px',
	height = '66px'
}) => {
	const { isDark } = useThemeContext()

	return (
		<div
			className={cn(styles.container, { [styles.dark]: isDark })}
			style={{ width, height }}
		>
			<Greek />
			<h2>{title}</h2>
			<Greek />
		</div>
	)
}

export default memo(ContainerTitle)
