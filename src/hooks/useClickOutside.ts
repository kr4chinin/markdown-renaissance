import { useEffect } from 'react'

export function useClickOutside(
	popRef: React.RefObject<HTMLElement>,
	triggerRef: React.RefObject<HTMLElement>,
	func: () => void
) {
	useEffect(() => {
		function handleClickOutside(e: MouseEvent) {
			if (e.target === triggerRef.current) {
				return
			}

			if (triggerRef?.current && triggerRef.current.children) {
				for (let i = 0; i < triggerRef.current.children.length; i++) {
					if (e.target === triggerRef.current.children[i]) {
						return
					}
				}
			}

			if (popRef.current && !popRef.current.contains(e.target as Node)) {
				func()
			}
		}

		document.addEventListener('mousedown', handleClickOutside)
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [popRef, triggerRef, func])
}
