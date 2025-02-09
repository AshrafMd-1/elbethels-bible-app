import { Pressable, StyleSheet, Text, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { colors, fontSize } from '@/constants/tokens'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useRouter } from 'expo-router'

interface FolderHeaderProps {
	folderName: string
}

const FolderHeader = (props: FolderHeaderProps) => {
	const { top } = useSafeAreaInsets()
	const router = useRouter()

	return (
		<View style={{ ...st.folderContainer, paddingTop: top + 10 }}>
			<Pressable onPress={() => router.replace({ pathname: '/library' })}>
				<AntDesign name="arrowleft" size={30} color="white" />
			</Pressable>
			<Text style={st.folderText}>{props.folderName}</Text>
		</View>
	)
}

const st = StyleSheet.create({
	folderContainer: {
		backgroundColor: colors.background,
		flexDirection: 'row',
		gap: 20,
	},

	folderText: {
		color: colors.text,
		fontSize: fontSize.lg,
		fontWeight: 'bold',
	},
})

export default FolderHeader
