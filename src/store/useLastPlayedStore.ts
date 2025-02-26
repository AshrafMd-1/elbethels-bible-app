import { create } from 'zustand'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { LastPlayedSongPayload } from '@/types/index'

type LastPlayedStore = {
	lastPlayed: LastPlayedSongPayload | null
	loadLastPlayed: () => Promise<void>
	updateLastPlayed: (data: LastPlayedSongPayload) => Promise<void>
}

export const useLastPlayedStore = create<LastPlayedStore>((set) => ({
	lastPlayed: null,

	loadLastPlayed: async () => {
		try {
			const storedData = await AsyncStorage.getItem('lastPlayedSong')
			if (storedData) {
				set({ lastPlayed: JSON.parse(storedData) })
			}
		} catch (error) {
			console.error('Error loading last played song:', error)
		}
	},

	updateLastPlayed: async (data) => {
		try {
			await AsyncStorage.setItem('lastPlayedSong', JSON.stringify(data))
			set({ lastPlayed: data })
		} catch (error) {
			console.error('Error updating last played song:', error)
		}
	},
}))
