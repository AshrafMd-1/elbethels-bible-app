import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Image } from 'expo-image'
import { albumImage1Uri } from '@/constants/images'
import { colors, fontSize } from '@/constants/tokens'
import { LastPlayedSongPayload } from '@/types/index'
import { languageSpecificTitle } from '@/misc/util'
import { useLanguage } from '@/context/LanguageContext'
import { useRouter } from 'expo-router'

const GradientCard = (props: { lastPlayedSong: LastPlayedSongPayload }) => {
	const { isTelugu } = useLanguage()
	const router = useRouter()
	return (
		<LinearGradient
			colors={['#86efac', '#3b82f6', '#9333ea']}
			start={{ x: 0, y: 0.5 }}
			end={{ x: 1, y: 0.5 }}
			style={styles.gradientContainer}
		>
			<Pressable
				onPress={() => {
					router.push({
						pathname: '/individualScreens/ChapterFolder',
						params: {
							mainFolder: props.lastPlayedSong.folderName,
							chapterFolder: props.lastPlayedSong.chapterName,
						},
					})
				}}
				style={styles.cardContent}
			>
				<Image
					source={{
						uri: albumImage1Uri,
					}}
					style={{
						width: '30%',
						height: '100%',
					}}
				/>
				<View style={{ backgroundColor: colors.backgroundMuted, width: '100%', padding: 10 }}>
					<Text style={styles.titleText}>
						{languageSpecificTitle(isTelugu, props.lastPlayedSong.chapterName ?? '')}
					</Text>
					<View style={styles.tagsContainer}>
						<Text style={styles.tag}>
							{languageSpecificTitle(isTelugu, props.lastPlayedSong.folderName ?? '')}
						</Text>
					</View>
				</View>
			</Pressable>
		</LinearGradient>
	)
}

const styles = StyleSheet.create({
	gradientContainer: {
		borderRadius: 12,
		padding: 2,
		marginTop: 10,
	},
	cardContent: {
		backgroundColor: '#fff',
		borderRadius: 10,
		overflow: 'hidden',
		flexDirection: 'row',
	},

	titleText: {
		fontSize: fontSize.sm,
		fontWeight: 'bold',
		color: colors.primary,
		letterSpacing: 1,
	},
	tagsContainer: {
		flexDirection: 'row',
		marginTop: 5,
	},
	tag: {
		color: colors.textMuted,
		fontWeight: 'bold',
		fontSize: fontSize.xs,
	},
})

export default GradientCard
