import { Text, View } from 'react-native'
import { defaultStyles } from '@/styles'
import { colors, fontSize, screenPadding } from '@/constants/tokens'
import FolderGeneration from '@/components/libraryScreen/FolderGeneration'

const LibraryScreen = () => {
	return (
		<View
			style={{
				...defaultStyles.container,
				paddingHorizontal: screenPadding.horizontal,
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
