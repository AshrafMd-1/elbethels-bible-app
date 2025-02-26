import { Track } from 'react-native-track-player'

type LibraryType = {
	[key: string]: {
		children: {
			[key: string]: {
				children?: {
					[key: string]: {
						fileExtension: string
						id: string
						mimeType: string
						size: string
					}
				}
			}
		}
	}
}

type LastPlayedSongPayload = {
	currentSong: Track | null
	beforeTrackKeys: string[]
	afterTrackKeys: string[]
	folderName: string | null
	chapterName: string | null
}

export type { LibraryType, LastPlayedSongPayload }
