import { StyleSheet, Text, View } from 'react-native'
import { defaultStyles } from '@/styles'
import { screenPadding } from '@/constants/tokens'

interface SongItemProps {
	songName: string
	songIndex: number
}

const SongItem = (props: SongItemProps) => {
	return (
		<View style={styles.container}>
			<Text style={styles.index}>{props.songIndex}</Text>
			<Text style={defaultStyles.text}>{props.songName}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		...defaultStyles.container,
		paddingHorizontal: screenPadding.horizontal,
		display: 'flex',
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
