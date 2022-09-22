import { FC } from 'react'
import styles from './index.module.scss'
import cn from 'classnames'

interface ActionButtonProps {
    Icon: React.ReactNode
    onClick: () => void
    isActive?: boolean
}

const ActionButton: FC<ActionButtonProps> = ({
    Icon,
    onClick,
    isActive = false
}) => {

    return (
        <button className={cn(styles['action-btn'], {[styles.active]: isActive})} onClick={onClick}>
            {Icon}
        </button>
    )
}

export default ActionButton