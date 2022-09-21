import { FC } from 'react'
import styles from './index.module.scss'

interface ActionButtonProps {
    Icon: React.ReactNode
    onClick: () => void
}

const ActionButton: FC<ActionButtonProps> = ({
    Icon,
    onClick
}) => {
    return (
        <button className={styles['action-btn']} onClick={onClick}>
            {Icon}
        </button>
    )
}

export default ActionButton