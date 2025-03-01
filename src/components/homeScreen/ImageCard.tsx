import { Pressable, StyleSheet, Text } from 'react-native'
import { defaultStyles } from '@/styles'
import { Image } from 'expo-image'
import { colors, fontSize } from '@/constants/tokens'
import {
	albumImage1Uri,
	albumImage2Uri,
	albumImage3Uri,
	albumImage4Uri,
	albumImage5Uri,
	albumImage6Uri,
	albumImage7Uri,
	albumImage8Uri,
} from '@/constants/images'

const imageMap: Record<number, any> = {
	1: albumImage1Uri,
	2: albumImage2Uri,
	3: albumImage3Uri,
	4: albumImage4Uri,
	5: albumImage5Uri,
	6: albumImage6Uri,
	7: albumImage7Uri,
	8: albumImage8Uri,
}

interface ImageDataProps {
	id: number
	en: string
	te: string
	verses: {
		en: {
			ref: string
			text: string
		}
		te: {
			ref: string
			text: string
		}
	}[]
}

const ImageCard = (imgData: ImageDataProps) => {
	return (
		<Pressable
			onPress={() => {
				console.log('Pressed Jumped to Album')
			}}
			style={st.container}
		>
			<Image source={imageMap[imgData.id]} style={st.albumImage} />
			<Text style={st.titleText}>{imgData.en}</Text>
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
