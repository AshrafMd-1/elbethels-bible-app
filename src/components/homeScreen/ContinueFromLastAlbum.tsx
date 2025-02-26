import { Text, View } from 'react-native'
import { colors, fontSize } from '@/constants/tokens'
import GradientCard from '@/components/homeScreen/GradientCard'
import React from 'react'
import { useLastPlayedStore } from '@/store/useLastPlayedStore'

const ContinueFromLastAlbum = () => {
	const { lastPlayed, loadLastPlayed } = useLastPlayedStore()

	React.useEffect(() => {
		loadLastPlayed()
	}, [loadLastPlayed])

	if (!lastPlayed) return <View style={{ marginBottom: 10 }}></View>
	return (
		<View style={{ marginBottom: 20 }}>
			<Text
				style={{
					fontSize: fontSize.lg,
					color: colors.text,
					fontWeight: 'bold',
				}}
			>
				Continue Album
			</Text>
			<GradientCard lastPlayedSong={lastPlayed} />
		</View>
	)
}

export default ContinueFromLastAlbum
