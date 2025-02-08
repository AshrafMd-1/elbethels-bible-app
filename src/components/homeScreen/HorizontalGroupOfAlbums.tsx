import { FlatList, StyleSheet, View } from 'react-native'
import {
	albumImage2Uri,
	albumImage3Uri,
	albumImage4Uri,
	albumImage5Uri,
	albumImage6Uri,
	albumImage7Uri,
	albumImage8Uri,
	albumImage9Uri,
} from '@/constants/images'
import ImageCard from '@/components/homeScreen/ImageCard'

const HorizontalGroupOfAlbums = () => {
	const categorizedAlbums = [
		{
			id: '0',
			title: 'The Adventure Begins',
			image: albumImage2Uri,
		},
		{
			id: '1',
			title: 'Mystery of the Unknown',
			image: albumImage3Uri,
		},
		{
			id: '2',
			title: 'Echoes of the Past',
			image: albumImage4Uri,
		},
		{
			id: '3',
			title: 'Lost in Time',
			image: albumImage5Uri,
		},
		{
			id: '4',
			title: 'Shadows of the Future',
			image: albumImage6Uri,
		},
		{
			id: '5',
			title: 'A Journey Beyond',
			image: albumImage7Uri,
		},
		{
			id: '6',
			title: 'Legends Never Die',
			image: albumImage8Uri,
		},
		{
			id: '7',
			title: 'Final Stand',
			image: albumImage9Uri,
		},
	]

	return (
		<View>
			<FlatList
				data={categorizedAlbums}
				renderItem={(item) => <ImageCard {...item.item} />}
				keyExtractor={(item) => item.id}
				contentContainerStyle={st.horizontalImagesFlatList}
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
