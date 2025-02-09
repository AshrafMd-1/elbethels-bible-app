import { StyleSheet, Text, View } from 'react-native'
import { headerProfileImageUri } from '@/constants/images'
import { Image } from 'expo-image'
import { getGreeting, getRandomGradientColors } from '@/misc/util'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { LinearGradient } from 'expo-linear-gradient'
import { colors, screenPadding } from '@/constants/tokens'
import { usePathname } from 'expo-router'

import { useEffect, useState } from 'react'

const Header = () => {
	const { top } = useSafeAreaInsets()
	const currentPath = usePathname()

	const isMainTabs =
		['/setting', '/library'].some((path) => currentPath.includes(path)) || currentPath === '/'

	const [gradientColors, setGradientColors] = useState(getRandomGradientColors())

	useEffect(() => {
		setGradientColors(getRandomGradientColors())
	}, [])

	if (!isMainTabs) {
		return (
			<View style={{ ...st.folderContainer, paddingTop: top + 10 }}>
				<Text style={st.folderText}>FolderHeader</Text>
			</View>
		)
	}

	return (
		<LinearGradient colors={gradientColors} style={{ overflow: 'hidden' }}>
			<View style={{ ...st.container, paddingTop: top + 10 }}>
				<Image source={headerProfileImageUri} style={st.image} />
				<Text style={st.text}>{getGreeting()}</Text>
			</View>
		</LinearGradient>
	)
}

const st = StyleSheet.create({
	container: {
		justifyContent: 'flex-start',
		alignItems: 'center',
		paddingBottom: 30,
		gap: 20,
		display: 'flex',
		paddingHorizontal: screenPadding.horizontal,
		flexDirection: 'row',
	},
	folderContainer: {
		backgroundColor: colors.background,
		paddingHorizontal: screenPadding.horizontal,
	},
	text: {
		fontSize: 18,
		fontWeight: 'bold',
		color: colors.text,
		letterSpacing: 1,
	},
	image: {
		width: 30,
		height: 30,
		borderRadius: 50,
	},
	folderText: {
		color: colors.text,
		fontSize: 35,
		fontWeight: 'bold',
	},
})

export default Header
