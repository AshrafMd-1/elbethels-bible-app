import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SplashScreen, Stack } from 'expo-router'
import { useSetupTrackPlayer } from '@/hook/useSetupTrackPlayer'
import { useCallback } from 'react'
import { useLogTrackPlayerState } from '@/hook/useLogTrackPlayerState'
import TrackPlayer from 'react-native-track-player'
import { playbackService } from '@/constants/playbackService'
import { LanguageProvider } from '@/context/LanguageContext'

SplashScreen.preventAutoHideAsync()
TrackPlayer.registerPlaybackService(() => playbackService)

const App = () => {
	const handleTrackPlayerLoaded = useCallback(() => {
		SplashScreen.hideAsync()
	}, [])

	useSetupTrackPlayer({
		onLoad: handleTrackPlayerLoaded,
	})

	useLogTrackPlayerState()

	return (
		<SafeAreaProvider>
			<GestureHandlerRootView style={{ flex: 1 }}>
				<LanguageProvider>
					<RootNavigation />
				</LanguageProvider>
				<StatusBar style="auto" />
			</GestureHandlerRootView>
		</SafeAreaProvider>
	)
}

const RootNavigation = () => {
	return (
		<Stack>
			<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
			<Stack.Screen
				name="Player"
				options={{
					presentation: 'card',
					animation: 'slide_from_bottom',
					headerShown: false,
				}}
			/>
		</Stack>
	)
}

export default App
