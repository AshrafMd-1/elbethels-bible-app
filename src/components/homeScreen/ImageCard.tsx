import { Pressable, StyleSheet, Text } from 'react-native'
import { defaultStyles } from '@/styles'
import { Image } from 'expo-image'
import { colors, fontSize } from '@/constants/tokens'

interface ImageDataProps {
	image: string
	id: string
	title: string
}

const ImageCard = (imgData: ImageDataProps) => {
	return (
		<Pressable
			onPress={() => {
				console.log('Pressed Jumped to Album')
			}}
			style={st.container}
		>
			<Image source={{ uri: imgData.image }} style={st.albumImage} />
			<Text style={st.titleText}>{imgData.title}</Text>
		</Pressable>
	)
}

const st = StyleSheet.create({
	container: {
		width: 150,
	},
	albumImage: {
		width: 150,
		height: 150,
		marginRight: 10,
		borderRadius: 12,
		borderWidth: 0.5,
		borderColor: colors.textMuted,
	},
	titleText: {
		...defaultStyles.text,
		fontSize: fontSize.sm,
		marginTop: 5,
		color: colors.text,
		paddingHorizontal: 5,
		flexWrap: 'wrap',
		width: 150,
		textAlign: 'center',
	},
})

export default ImageCard
