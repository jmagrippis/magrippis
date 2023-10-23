'use client'

import {useState} from 'react'
import cn from 'classnames'

const Demonstration = () => {
	const [tapped, setTapped] = useState(false)

	return (
		<div className="py-4">
			<button
				className={cn(
					'shadow-lg w-full rounded border-4 p-4 text-center transition duration-300 focus:outline-none',
					{
						'border-secondary-100 bg-secondary-200 text-secondary-900': tapped,
						'border-primary-400 bg-primary-600 text-primary-100 focus:border-secondary-100':
							!tapped,
					},
				)}
				onClick={() => setTapped(!tapped)}
			>
				🤜 Tap this React Component 🤛
			</button>
		</div>
	)
}

export default Demonstration
