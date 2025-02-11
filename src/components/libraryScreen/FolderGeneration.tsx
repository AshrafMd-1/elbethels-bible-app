import { FlatList, View } from 'react-native'
import library from '@/assets/data/library.json'
import { useMemo } from 'react'
import FolderItem from '@/components/libraryScreen/FolderItem'
import SongItem from '@/components/libraryScreen/SongItem'
import { utilsStyles } from '@/styles'
import { useActiveTrack } from 'react-native-track-player'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import { useFloatingBar } from '@/context/FloatingBarContext'

type FolderGenerationProps = {
	mainFolder?: string
	chapterFolder?: string
}

const FolderGeneration = (props: FolderGenerationProps) => {
	const { mainFolder, chapterFolder } = props
	const bottom = useBottomTabBarHeight()
	const { isFloatingBarPresent } = useFloatingBar()

	const folders = useMemo(() => {
		if (!library) return []

		if (mainFolder) {
			const mainFolderData = (library as Record<string, any>)[mainFolder]?.children
			if (chapterFolder) {
				const chapterFolderData = mainFolderData?.[chapterFolder]?.children
				return chapterFolderData ? Object.keys(chapterFolderData) : []
			}
			return mainFolderData ? Object.keys(mainFolderData) : []
		}

		return Object.keys(library)
	}, [mainFolder, chapterFolder])

	return (
		<FlatList
			data={folders}
			ItemSeparatorComponent={
				mainFolder && chapterFolder ? () => <View style={utilsStyles.itemSeparator} /> : undefined
			}
			style={[
				mainFolder &&
					chapterFolder && {
						marginTop: 10,
					},
				{
					marginBottom: bottom + (isFloatingBarPresent ? 0 : 60),
				},
			]}
			keyExtractor={(item) => item}
			scrollEnabled={!(mainFolder && chapterFolder)}
			renderItem={({ item, index }) => {
				if (chapterFolder && mainFolder)
					return (
						<SongItem
							songIndex={index}
							songName={item}
							folderName={mainFolder}
							chapterName={chapterFolder}
						/>
					)
				return (
					<FolderItem
						item={item}
						params={{
							mainFolder: mainFolder,
							chapterFolder: chapterFolder,
						}}
					/>
				)
			}}
		/>
	)
}

export default FolderGeneration
