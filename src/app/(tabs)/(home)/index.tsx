import { ScrollView, View } from 'react-native'
import { defaultStyles } from '@/styles'
import ContinueFromLastAlbum from '@/components/homeScreen/ContinueFromLastAlbum'
import { screenPadding } from '@/constants/tokens'
import JumpToAlbum from '@/components/homeScreen/JumpToAlbum'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'

const HomeScreen = () => {
	const bottom = useBottomTabBarHeight()
	return (
		<ScrollView
			style={[
				defaultStyles.container,
				{
					paddingHorizontal: screenPadding.horizontal,
				},
			]}
		>
			<View style={{ paddingBottom: bottom + 50 }}>
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
