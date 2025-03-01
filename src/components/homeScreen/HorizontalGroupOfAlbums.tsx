import { FlatList, StyleSheet, View } from 'react-native'
import albums from '@/assets/data/album.json'
import ImageCard from './ImageCard'
import { useMemo } from 'react'

const HorizontalGroupOfAlbums = () => {
	const allAlbumsArray = useMemo(
		() =>
			Object.entries(albums.albums).map(([id, album]) => ({
				id,
				...album,
			})),
		[],
	)
	return (
		<View>
			<FlatList
				data={allAlbumsArray}
				renderItem={(item) => <ImageCard {...item.item} />}
				keyExtractor={(item) => item.id}
				contentContainerStyle={st.horizontalImagesFlatList}
				initialNumToRender={3}
				horizontal
			/>
		</View>
	)
}

const st = StyleSheet.create({
	horizontalImagesFlatList: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 10,
		gap: 10,
	},
})

export default HorizontalGroupOfAlbums
