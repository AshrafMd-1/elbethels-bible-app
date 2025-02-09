import { BackHandler, View } from 'react-native'
import { defaultStyles } from '@/styles'
import { useFocusEffect, useLocalSearchParams, useRouter } from 'expo-router'
import FolderGeneration from '@/components/libraryScreen/FolderGeneration'
import { screenPadding } from '@/constants/tokens'
import { useCallback } from 'react'

const MainFolder = () => {
	const { mainFolder } = useLocalSearchParams() as { mainFolder: string }
	const router = useRouter()

	useFocusEffect(
		useCallback(() => {
			const onBackPress = () => {
				router.replace({
					pathname: '/library',
				})
				return true
			}

			BackHandler.addEventListener('hardwareBackPress', onBackPress)

			return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress)
		}, [router]),
	)

	return (
		<View
			style={{
				...defaultStyles.container,
				paddingHorizontal: screenPadding.horizontal,
			}}
		>
			<FolderGeneration mainFolder={mainFolder} />
		</View>
	)
}

export default MainFolder
