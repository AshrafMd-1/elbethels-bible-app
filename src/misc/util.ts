const getGreeting = () => {
	const hour = new Date().getHours()
	if (hour >= 5 && hour < 12) {
		return 'Good Morning ☀️'
	} else if (hour >= 12 && hour < 17) {
		return 'Good Afternoon 🌤️'
	} else if (hour >= 17 && hour < 21) {
		return 'Good Evening 🌆'
	} else {
		return 'Good Night 🌙'
	}
}

const getRandomGradientColors = (): [string, string, string] => {
	const randomChannel = () => Math.floor(Math.random() * (180 - 80) + 80) // Between 80-180 for medium tones

	const r = randomChannel()
	const g = randomChannel()
	const b = randomChannel()

	const darkenColor = (r: number, g: number, b: number, factor: number): string => {
		return `rgb(${Math.max(0, Math.floor(r * factor))}, ${Math.max(0, Math.floor(g * factor))}, ${Math.max(0, Math.floor(b * factor))})`
	}

	const medium = `rgb(${r}, ${g}, ${b})`
	const dark = darkenColor(r, g, b, 0.7) // 30% darker
	return [medium, dark, '#000']
}
const formatSecondsToMinutes = (seconds: number) => {
	const minutes = Math.floor(seconds / 60)
	const remainingSeconds = Math.floor(seconds % 60)

	const formattedMinutes = String(minutes).padStart(2, '0')
	const formattedSeconds = String(remainingSeconds).padStart(2, '0')

	return `${formattedMinutes}:${formattedSeconds}`
}

const generateTracksListId = (trackListName: string, search?: string) => {
	return `${trackListName}${`-${search}` || ''}`
}

export { getGreeting, getRandomGradientColors, formatSecondsToMinutes, generateTracksListId }
