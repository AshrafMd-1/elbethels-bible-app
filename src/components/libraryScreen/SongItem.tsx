import { Pressable, StyleSheet, Text } from 'react-native'
import { defaultStyles } from '@/styles'
import { colors, screenPadding } from '@/constants/tokens'
import { useState } from 'react'
import library from '@/assets/data/library.json'
import TrackPlayer, { Track, useActiveTrack, useIsPlaying } from 'react-native-track-player'
import { albumImage11Uri, albumImage12Uri } from '@/constants/images'
import { languageSpecificTitle, songSpecificTitle } from '@/misc/util'
import { View } from 'react-native'
import LoaderKit from 'react-native-loader-kit'
import { useLanguage } from '@/context/LanguageContext'
import { Ionicons } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'

interface SongItemProps {
	songName: string
	songIndex: number
	folderName: string
	chapterName: string
}

const SongItem = ({ songName, songIndex, folderName, chapterName }: SongItemProps) => {
	const [songData, setSongData] = useState<Track | null>(null)
	const activeTrack = useActiveTrack()
	const isActiveTrack = songData !== undefined && activeTrack && activeTrack?.id === songData?.id
	const { isTelugu } = useLanguage()
	const { playing } = useIsPlaying()

	const loadSongData = async () => {
		// Fetch track data only if not already set
		if (!songData || songData?.id !== activeTrack?.id) {
			const data: Track | undefined = (library as Record<string, any>)[folderName]?.children?.[
				chapterName
			]?.children?.[songName]
			console.log('Loading song data...', songName)

			if (!data) {
				console.error('Track data not found!')
				return
			}
			setSongData(data)
			const track: Track = {
				id: data.id,
				url: `https://arorium.serv00.net/fetch/${data.id}`,
				title: songName,
				artist: chapterName,
				album: folderName,
				artwork: albumImage12Uri,
			}

			await TrackPlayer.load(track)

			await TrackPlayer.play()
		}
	}

	return (
		<Pressable style={styles.container} onPress={loadSongData}>
			<View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
				<MaterialCommunityIcons name="file-music" size={42} color={colors.primary} />
				<Text
					style={{
						...defaultStyles.text,
						color: isActiveTrack ? colors.primary : colors.text,
					}}
				>
					{songSpecificTitle(isTelugu, songName)}
				</Text>
			</View>

			{/*{playing && isActiveTrack ? (*/}
			{/*	<LoaderKit name="LineScaleParty" color={colors.icon} style={{ width: 30, height: 30 }} />*/}
			{/*) : (*/}
			{/*	<Ionicons name="play" size={30} color={colors.icon} />*/}
			{/*)}*/}
			{/*<Text style={defaultStyles.text}>{songData?.data}</Text>*/}
		</Pressable>
	)
}

const styles = StyleSheet.create({
	container: {
		...defaultStyles.container,
		paddingHorizontal: screenPadding.horizontal,
		flexDirection: 'row',
		gap: 10,
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingVertical: 15,
	},
	index: {
		...defaultStyles.text,
		fontSize: 20,
		fontWeight: 'bold',
	},
})

export default SongItem
