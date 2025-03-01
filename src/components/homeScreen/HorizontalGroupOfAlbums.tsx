import { FlatList, StyleSheet, View } from 'react-native'
import ImageCard from '@/components/homeScreen/ImageCard'
import albums from '@/assets/data/album.json'

const HorizontalGroupOfAlbums = () => {
	return (
		<View>
			<FlatList
				data={albums.albums}
				renderItem={(item) => <ImageCard {...item.item} />}
				keyExtractor={(item) => item.id.toString()}
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
