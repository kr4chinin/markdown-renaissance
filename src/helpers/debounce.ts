export const debounce = (func: (...args: any[]) => void, delay: number) => {
	let timer: ReturnType<typeof setTimeout> | null = null
	return function (...args: any[]) {
		const context = window

		if (timer) clearTimeout(timer)

		timer = setTimeout(() => {
			timer = null
			func.apply(context, args)
		}, delay)
	}
}
