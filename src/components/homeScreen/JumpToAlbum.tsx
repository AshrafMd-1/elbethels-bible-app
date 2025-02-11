import { Text, View } from 'react-native'
import { colors, fontSize } from '@/constants/tokens'
import HorizontalGroupOfAlbums from '@/components/homeScreen/HorizontalGroupOfAlbums'

const JumpToAlbum = () => {
	return (
		<View style={{ marginBottom: 20 }}>
			<Text
				style={{
					fontSize: fontSize.lg,
					color: colors.text,
					fontWeight: 'bold',
				}}
			>
				Gods Love
			</Text>
			<HorizontalGroupOfAlbums />
		</View>
	)
}

export default JumpToAlbum
