import { FlatList, View } from 'react-native'
import library from '@/assets/data/library.json'
import { useEffect, useState } from 'react'
import FolderItem from '@/components/libraryScreen/FolderItem'
import SongItem from '@/components/libraryScreen/SongItem'
import { utilsStyles } from '@/styles'
import { useFloatingBar } from '@/context/FloatingBarContext'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'

type FolderGenerationProps = {
	mainFolder?: string
	chapterFolder?: string
}

const FolderGeneration = ({ mainFolder, chapterFolder }: FolderGenerationProps) => {
	const { isFloatingBarPresent } = useFloatingBar()
	const [listOfFolders, setListOfFolders] = useState<string[]>([])
	const bottom = useBottomTabBarHeight()

	useEffect(() => {
		if (!library) {
			setListOfFolders([])
			return
		}

		if (mainFolder) {
			const mainFolderData = (library as Record<string, any>)[mainFolder]?.children
			if (chapterFolder) {
				const chapterFolderData = mainFolderData?.[chapterFolder]?.children
				setListOfFolders(chapterFolderData ? Object.keys(chapterFolderData) : [])
			} else {
				setListOfFolders(mainFolderData ? Object.keys(mainFolderData) : [])
			}
		} else {
			setListOfFolders(Object.keys(library))
		}
	}, [mainFolder, chapterFolder])

	return (
		<FlatList
			data={listOfFolders}
			ItemSeparatorComponent={
				mainFolder && chapterFolder ? () => <View style={utilsStyles.itemSeparator} /> : undefined
			}
			style={[mainFolder && chapterFolder && { marginTop: 10 }]}
			keyExtractor={(item) => item}
			ListFooterComponent={
				<View style={{ paddingBottom: isFloatingBarPresent ? bottom + 60 : bottom }} />
			}
			scrollEnabled={!(mainFolder && chapterFolder)}
			renderItem={({ item }) => {
				if (chapterFolder && mainFolder) {
					return (
						<SongItem
							songName={item}
							songData={
								(library as Record<string, any>)[mainFolder]?.children?.[chapterFolder]?.children?.[
									item
								]
							}
							folderName={mainFolder}
							chapterName={chapterFolder}
						/>
					)
				}
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
