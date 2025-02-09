import { PlayPauseButton, SkipToNextButton } from '@/components/PlayerControls'
import { albumImage11Uri } from '@/constants/images'
import { defaultStyles } from '@/styles'
import { useRouter } from 'expo-router'
import { Pressable, StyleSheet, Text, View, ViewProps } from 'react-native'
import { useActiveTrack } from 'react-native-track-player'
import { useLastActiveTrack } from '@/hook/useLastActiveTrack'
import { Image } from 'expo-image'

export const FloatingPlayer = ({ style }: ViewProps) => {
	const router = useRouter()

	const activeTrack = useActiveTrack()
	const lastActiveTrack = useLastActiveTrack()

	const displayedTrack = activeTrack ?? lastActiveTrack

	const handlePress = () => {
		router.navigate('/Player')
	}

	if (!displayedTrack) return null

	return (
		<Pressable onPress={handlePress} style={[styles.container, style]}>
			<>
				<Image
					source={{
						uri: albumImage11Uri,
					}}
					style={styles.trackArtworkImage}
				/>

				<View style={styles.trackTitleContainer}>
					<View style={{ flexDirection: 'row' }}>
						<Text style={styles.trackTitle}>{displayedTrack.title}</Text>
					</View>
				</View>

				<View style={styles.trackControlsContainer}>
					<PlayPauseButton iconSize={24} />
					<SkipToNextButton iconSize={22} />
				</View>
			</>
		</Pressable>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: '#252525',
		padding: 8,
		borderRadius: 12,
		paddingVertical: 10,
	},
	trackArtworkImage: {
		width: 40,
		height: 40,
		borderRadius: 8,
	},
	trackTitleContainer: {
		flex: 1,
		overflow: 'hidden',
		marginLeft: 10,
	},
	trackTitle: {
		...defaultStyles.text,
		fontSize: 18,
		fontWeight: '600',
		paddingLeft: 10,
	},
	trackControlsContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		columnGap: 20,
		marginRight: 16,
		paddingLeft: 16,
	},
})
