import { Pressable, StyleSheet, Text } from 'react-native'
import { defaultStyles } from '@/styles'
import { screenPadding } from '@/constants/tokens'
import { useState } from 'react'
import library from '@/assets/data/library.json'
import TrackPlayer, { Track, useActiveTrack } from 'react-native-track-player'
import { albumImage11Uri, albumImage12Uri } from '@/constants/images'

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

	function calculateDuration(sizeInBytes: number, bitrateKbps = 64) {
		return (sizeInBytes * 8) / (bitrateKbps * 1000)
	}

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
			console.log('Loaded song data:', calculateDuration(data.size))
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
			<Text style={styles.index}>{isActiveTrack ? 'Playing' : songIndex}</Text>
			<Text style={defaultStyles.text}>{songName}</Text>
		</Pressable>
	)
}

const styles = StyleSheet.create({
	container: {
		...defaultStyles.container,
		paddingHorizontal: screenPadding.horizontal,
		flexDirection: 'row',
		gap: 10,
		justifyContent: 'center',
		alignItems: 'center',
		paddingVertical: 20,
	},
	index: {
		...defaultStyles.text,
		fontSize: 20,
		fontWeight: 'bold',
	},
})

export default SongItem
