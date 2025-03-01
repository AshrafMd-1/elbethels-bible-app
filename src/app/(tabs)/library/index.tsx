import { Text, View } from 'react-native'
import { defaultStyles } from '@/styles'
import { colors, fontSize, screenPadding } from '@/constants/tokens'
import FolderGeneration from '@/components/libraryScreen/FolderGeneration'
import { useFloatingBar } from '@/context/FloatingBarContext'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'

const LibraryScreen = () => {
	const { isFloatingBarPresent } = useFloatingBar()
	const bottom = useBottomTabBarHeight()

	return (
		<View
			style={{
				...defaultStyles.container,
				paddingHorizontal: screenPadding.horizontal,
				paddingBottom: isFloatingBarPresent ? bottom + 40 : bottom,
			}}
		>
			<Text
				style={{
					color: colors.text,
					fontSize: fontSize.lg,
					fontWeight: 'bold',
				}}
			>
				Library
			</Text>
			<FolderGeneration />
		</View>
	)
}

export default LibraryScreen
