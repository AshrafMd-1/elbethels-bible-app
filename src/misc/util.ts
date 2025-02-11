import { is } from '@babel/types'
import { colors } from '@/constants/tokens'

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

	const normal = `rgb(${r}, ${g}, ${b})`
	const dark = darkenColor(r, g, b, 0.5)

	return [normal, dark, colors.background]
}
const formatSecondsToMinutes = (seconds: number) => {
	const minutes = Math.floor(seconds / 60)
	const remainingSeconds = Math.floor(seconds % 60)

	const formattedMinutes = String(minutes).padStart(2, '0')
	const formattedSeconds = String(remainingSeconds).padStart(2, '0')

	return `${formattedMinutes}:${formattedSeconds}`
}

const languageSpecificTitle = (isTelugu: boolean, text: string) => {
	const firstThree = text.slice(0, 3)
	let editedText: string

	if (/^_\d{2}$/.test(firstThree)) {
		editedText = text.slice(4).split('-')[isTelugu ? 1 : 0]
	} else {
		editedText = text.split('-')[isTelugu ? 1 : 0]
	}

	return isTelugu ? editedText : titleCase(editedText)
}

const songSpecificTitle = (isTelugu: boolean, text: string, folderName?: string) => {
	const editedText = text.replace(/_+/g, ' ').split(' ')
	const index = editedText[1]
	if (!folderName) return isTelugu ? `అధ్యాయం	${index}` : `Chapter ${index}`
	const editedFolderName = languageSpecificTitle(isTelugu, folderName)
	return isTelugu ? `${editedFolderName} అధ్యాయం	 ${index}` : `${editedFolderName} Chapter ${index}`
}

const titleCase = (text: string) => {
	return text
		.toLowerCase()
		.split(' ')
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ')
}

export {
	getGreeting,
	getRandomGradientColors,
	formatSecondsToMinutes,
	languageSpecificTitle,
	titleCase,
	songSpecificTitle,
}
