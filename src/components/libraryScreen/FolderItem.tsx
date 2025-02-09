import { Pressable, StyleSheet, Text, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { colors } from '@/constants/tokens'
import { defaultStyles } from '@/styles'
import { useRouter } from 'expo-router'

interface FolderItemProps {
	item: string
	params: {
		mainFolder?: string
		chapterFolder?: string
	}
}

const FolderItem = (props: FolderItemProps) => {
	const router = useRouter()

	return (
		<Pressable
			onPress={() => {
				router.push({
					pathname: props.params.mainFolder
						? '/individualScreens/ChapterFolder'
						: '/individualScreens/MainFolder',
					params: {
						mainFolder: props.params.mainFolder || props.item,
						chapterFolder: props.params.mainFolder ? props.item : undefined,
					},
				})
			}}
			style={st.container}
		>
			<MaterialIcons name="folder" size={42} color={colors.primary} />
			<View>
				<Text style={defaultStyles.text}>{props.item}</Text>
			</View>
		</Pressable>
	)
}

const st = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		marginVertical: 10,
		gap: 10,
	},
})

export default FolderItem
