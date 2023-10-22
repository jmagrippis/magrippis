'use client'

import {useEffect, useState} from 'react'

const MIN_TYPING_MS = 70
const MAX_TYPING_MS = 110
const DELETING_MS = 50
const PAUSED_MS = 1500

type TypingState = 'typing' | 'deleting' | 'paused'

type Props = {
	titles: {article: string; title: string}[]
}

const Typing = ({titles}: Props) => {
	const [typingState, setTypingState] = useState<TypingState>('typing')
	const [selectedTitleIndex, setSelectedTitleIndex] = useState(0)
	const [typedLength, setTypedLength] = useState(0)

	useEffect(() => {
		const createNextTimeout = ({
			typedLength,
			typingState,
			selectedTitleIndex,
		}: {
			typedLength: number
			typingState: TypingState
			selectedTitleIndex: number
		}) => {
			switch (typingState) {
				case 'typing':
					return setTimeout(() => {
						setTypedLength(typedLength + 1)
						if (typedLength + 1 === titles[selectedTitleIndex].title.length) {
							setTypingState('paused')
						}
					}, Math.floor(Math.random() * (MAX_TYPING_MS - MIN_TYPING_MS + 1) + MIN_TYPING_MS))
				case 'deleting':
					return setTimeout(() => {
						const nextTitleIndex = titles[selectedTitleIndex + 1]
							? selectedTitleIndex + 1
							: 0
						if (
							titles[selectedTitleIndex].title.slice(0, typedLength) ===
							titles[nextTitleIndex].title.slice(0, typedLength)
						) {
							setSelectedTitleIndex(nextTitleIndex)
							setTypingState('typing')
							return
						}

						setTypedLength(typedLength - 1)
					}, DELETING_MS)
				case 'paused':
					return setTimeout(() => {
						setTypingState('deleting')
					}, PAUSED_MS)
				default:
					break
			}
		}

		const timeout = createNextTimeout({
			typedLength,
			typingState,
			selectedTitleIndex,
		})

		return () => clearTimeout(timeout)
	}, [typedLength, typingState, selectedTitleIndex, titles])

	const {article, title} = titles[selectedTitleIndex]
	return (
		<>
			{article}{' '}
			<strong
				className={`text-emphasis after:content-['|'] ${
					typingState === 'paused' ? 'after:animate-blink' : ''
				}`}
			>
				{title.slice(0, typedLength)}
			</strong>
		</>
	)
}

export default Typing
