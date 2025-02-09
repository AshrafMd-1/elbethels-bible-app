import { ScrollView, View } from 'react-native'
import { defaultStyles } from '@/styles'
import ContinueFromLastAlbum from '@/components/homeScreen/ContinueFromLastAlbum'
import { screenPadding } from '@/constants/tokens'
import JumpToAlbum from '@/components/homeScreen/JumpToAlbum'

const HomeScreen = () => {
	return (
		<ScrollView
			style={[
				defaultStyles.container,
				{
					paddingHorizontal: screenPadding.horizontal,
				},
			]}
		>
			<View>
				<ContinueFromLastAlbum />
				<JumpToAlbum />
				<JumpToAlbum />
				<JumpToAlbum />
				<JumpToAlbum />
				<JumpToAlbum />
			</View>
		</ScrollView>
	)
}

export default HomeScreen
