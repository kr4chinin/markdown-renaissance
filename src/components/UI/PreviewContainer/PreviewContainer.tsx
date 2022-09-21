import { Icon } from '@iconify/react'
import { Icons } from '../../../utils/Icons'
import PreviewParser from '../../PreviewParser/PreviewParser'
import ActionButton from '../ActionButton/ActionButton'
import BreakLine from '../BreakLine/BreakLine'
import ContainerTitle from '../ContainerTitle/ContainerTitle'
import ControlsContainer from '../ControlsContainer/ControlsContainer'
import styles from './index.module.scss'

const PreviewContainer = () => {
	return (
		<div>
			<div className={styles.container}>
				<ContainerTitle title="Preview" />
				<BreakLine />
				<div className={styles['content-container']}>
					<ControlsContainer>
						<ActionButton
							Icon={<Icon icon={Icons.SAVE} />}
							onClick={() => {}}
						/>
					</ControlsContainer>
					<div className={styles['parser-container']}>
						<PreviewParser />
					</div>
				</div>
				<div className={styles['stats-container']}></div>
			</div>
		</div>
	)
}

export default PreviewContainer
