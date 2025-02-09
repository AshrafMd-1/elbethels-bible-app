import { FlatList } from 'react-native'
import library from '@/assets/data/library.json'
import { useMemo } from 'react'
import FolderItem from '@/components/libraryScreen/FolderItem'

type FolderGenerationProps = {
	mainFolder?: string
	chapterFolder?: string
}

const FolderGeneration = (props: FolderGenerationProps) => {
	const { mainFolder, chapterFolder } = props

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
			style={{ marginTop: 10 }}
			data={folders}
			renderItem={({ item }) => {
				return <FolderItem item={item} />
			}}
		/>
	)
}

export default FolderGeneration
