import styles from './index.module.scss'

const BreakLine = () => {
	return (
		<div className={styles.container}>
			<hr />

			<svg
				viewBox="0 0 174 73"
				stroke="hsl(217, 10%, 60%)"
				strokeWidth={6}
				width={48}
				height={48}
			>
				<path
					d="M3 9.99C10.29 5.33 19.542 3 30.755 3c15.967 0 41.397 6.507 76.29 19.52 24.208 7.332 39.965 11.081 47.271 11.248 10.96.25 16.11-3.78 16.11-9.803 0-6.024-3.25-12.385-16.11-12.385-8.573 0-28.014 4.934-58.323 14.803-35.14 13.445-57.625 20.942-67.454 22.49-14.744 2.322-21.735-3.01-21.735-8.443 0-5.434 2.58-10.754 21.735-11.558 12.77-.536 27.549 2.393 44.334 8.785 29.623 13.64 49.987 20.461 61.093 20.461 16.658 0 14.343-15.158 0-15.69-20.122-.746-44.507 8.21-73.154 26.868"
					fill="none"
					fillRule="evenodd"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
			</svg>

            <hr />
		</div>
	)
}

export default BreakLine
