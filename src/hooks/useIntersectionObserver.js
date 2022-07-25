import { useEffect, useRef, useState } from "react"

export default function useIntersectionObserver(options) {
	const containerRef = useRef(null)
	const [isIntersecting, setIntersecting] = useState(true)

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				setIntersecting(entry.isIntersecting)
			})
		}, options)

		if (containerRef.current) {
			observer.observe(containerRef.current)
		}
	}, [containerRef, options])

	return [containerRef, isIntersecting]
}
