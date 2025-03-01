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
import { useRouter } from 'expo-router'
import { useLanguage } from '@/context/LanguageContext'

export const albumMap: Record<number, any> = {
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
	id: string
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
	const router = useRouter()
	const { isTelugu } = useLanguage()
	return (
		<Pressable
			onPress={() => {
				router.push({
					pathname: '/individualScreens/AlbumsFolder',
					params: {
						albumId: imgData.id,
					},
				})
			}}
			style={st.container}
		>
			<Image source={albumMap[Number(imgData.id)]} style={st.albumImage} />
			<Text style={st.titleText}>{isTelugu ? imgData.te : imgData.en}</Text>
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
