import { Text, View } from 'react-native'
import { colors, fontSize } from '@/constants/tokens'
import GradientCard from '@/components/homeScreen/GradientCard'

const ContinueFromLastAlbum = () => {
	return (
		<View style={{ marginBottom: 20 }}>
			<Text
				style={{
					fontSize: fontSize.lg,
					color: colors.text,
					fontWeight: 'bold',
				}}
			>
				Continue Album
			</Text>
			<GradientCard />
		</View>
	)
}

export default ContinueFromLastAlbum
