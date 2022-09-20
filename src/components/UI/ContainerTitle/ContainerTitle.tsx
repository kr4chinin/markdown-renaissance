import styles from './index.module.scss'
import { ReactComponent as Greek } from '../../../assets/icons/greek.svg'
import { FC } from 'react'

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
	return (
		<div className={styles.container} style={{ width, height }}>
			<Greek />
			<h2>{title}</h2>
			<Greek />
		</div>
	)
}

export default ContainerTitle
