export const shuffleArray = (array: any[]) => {
	const shuffledArray = [...array]
	let currentIndex = shuffledArray.length,
		randomIndex

	// While there remain elements to shuffle.
	while (currentIndex != 0) {
		// Pick a remaining element.
		randomIndex = Math.floor(Math.random() * currentIndex)
		currentIndex--
		;[shuffledArray[currentIndex], shuffledArray[randomIndex]] = [
			shuffledArray[randomIndex],
			shuffledArray[currentIndex],
		]
	}

	return shuffledArray
}
