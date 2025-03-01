import { Track } from 'react-native-track-player'

type LastPlayedSongPayload = {
	currentSong: Track | null
	beforeTrackKeys: string[]
	afterTrackKeys: string[]
	folderName: string | null
	chapterName: string | null
}

export type { LastPlayedSongPayload }
