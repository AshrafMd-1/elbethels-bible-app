import { Pressable, StyleSheet, Text, View } from 'react-native'
import { defaultStyles } from '@/styles'
import { colors, screenPadding } from '@/constants/tokens'
import TrackPlayer, { Track, useActiveTrack, useIsPlaying } from 'react-native-track-player'
import { albumImage12Uri } from '@/constants/images'
import { calculateBytesToDuration, songSpecificTitle } from '@/misc/util'
import LoaderKit from 'react-native-loader-kit'
import { useLanguage } from '@/context/LanguageContext'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { useFloatingBar } from '@/context/FloatingBarContext'

interface SongItemProps {
	songName: string
	songData: any
	folderName: string
	chapterName: string
}

const SongItem = ({ songName, songData, folderName, chapterName }: SongItemProps) => {
	const activeTrack = useActiveTrack()
	const { setIsFloatingBarPresent } = useFloatingBar()
	const isActiveTrack = activeTrack?.id === songData?.id
	const { isTelugu } = useLanguage()
	const { playing } = useIsPlaying()

	const loadSongData = async () => {
		if (!songData) {
			console.error('Track data not found!')
			return
		}
		const track: Track = {
			id: songData.id,
			url: `https://arorium.serv00.net/fetch/${songData.id}`,
			title: songName,
			artist: chapterName,
			album: folderName,
			artwork: albumImage12Uri,
		}
		await TrackPlayer.load(track)
		await TrackPlayer.play()
		setIsFloatingBarPresent(true)
	}

	return (
		<Pressable style={styles.container} onPress={loadSongData}>
			<View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
				<MaterialCommunityIcons name="file-music" size={42} color={colors.primary} />
				<Text style={[defaultStyles.text, { color: isActiveTrack ? colors.primary : colors.text }]}>
					{songSpecificTitle(isTelugu, songName)}
				</Text>
			</View>
			<TrackRightDetails
				songSize={songData?.size}
				isPlaying={playing || false}
				isActiveTrack={isActiveTrack}
			/>
		</Pressable>
	)
}

const TrackRightDetails = ({
	songSize,
	isPlaying,
	isActiveTrack,
}: {
	songSize?: number
	isPlaying: boolean
	isActiveTrack: boolean
}) => (
	<View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
		{isActiveTrack ? (
			isPlaying ? (
				<LoaderKit name="LineScaleParty" color={colors.icon} style={{ width: 30, height: 30 }} />
			) : (
				<Ionicons name="play" size={30} color={colors.icon} />
			)
		) : (
			<Text style={defaultStyles.text}>
				{songSize ? `${calculateBytesToDuration(songSize, 64)}` : '...'}
			</Text>
		)}
	</View>
)

const styles = StyleSheet.create({
	container: {
		...defaultStyles.container,
		paddingHorizontal: screenPadding.horizontal,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingVertical: 15,
	},
})

export default SongItem
