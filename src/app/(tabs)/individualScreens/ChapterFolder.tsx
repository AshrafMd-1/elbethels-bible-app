import { Animated, BackHandler, Pressable, StyleSheet, Text, View } from 'react-native'
import { defaultStyles } from '@/styles'
import { colors, fontSize, screenPadding } from '@/constants/tokens'
import { useFocusEffect, useLocalSearchParams, useRouter } from 'expo-router'
import FolderGeneration from '@/components/libraryScreen/FolderGeneration'
import { getRandomGradientColors, languageSpecificTitle } from '@/misc/util'
import { LinearGradient } from 'expo-linear-gradient'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import { Image } from 'expo-image'
import { albumImage10Uri } from '@/constants/images'
import { useLanguage } from '@/context/LanguageContext'
import { AntDesign } from '@expo/vector-icons'

const ChapterFolder = () => {
	const { top } = useSafeAreaInsets()
	const router = useRouter()
	const { mainFolder, chapterFolder } = useLocalSearchParams() as {
		mainFolder: string
		chapterFolder: string
	}
	const { isTelugu } = useLanguage()

	const [gradientColors, setGradientColors] = useState(getRandomGradientColors())
	const scrollY = useRef(new Animated.Value(0)).current

	useFocusEffect(
		useCallback(() => {
			const onBackPress = () => {
				router.replace({ pathname: '/individualScreens/MainFolder', params: { mainFolder } })
				return true
			}
			BackHandler.addEventListener('hardwareBackPress', onBackPress)
			return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress)
		}, [router, mainFolder]),
	)

	useEffect(() => {
		setGradientColors(getRandomGradientColors())
	}, [])

	const headerOpacity = scrollY.interpolate({
		inputRange: [250, 300],
		outputRange: [0, 1],
		extrapolate: 'clamp',
	})

	return (
		<View style={defaultStyles.container}>
			<Animated.View
				style={[styles.stickyHeader, { opacity: headerOpacity, paddingTop: top + 10 }]}
			>
				<LinearGradient colors={gradientColors} style={StyleSheet.absoluteFillObject} />
				<Pressable
					onPress={() =>
						router.replace({ pathname: '/individualScreens/MainFolder', params: { mainFolder } })
					}
				>
					<Ionicons name="chevron-back-sharp" size={24} color={colors.text} />
				</Pressable>
				<Text style={styles.stickyHeaderText}>
					{languageSpecificTitle(isTelugu, chapterFolder)}
				</Text>
				<AntDesign
					name="play"
					size={52}
					color={gradientColors[0]}
					style={{
						position: 'absolute',
						right: screenPadding.horizontal + 5,
						top: 40,
					}}
				/>
			</Animated.View>

			<Animated.ScrollView
				style={{ flex: 1 }}
				scrollEventThrottle={16}
				onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], {
					useNativeDriver: false,
				})}
			>
				<LinearGradient colors={gradientColors} style={[styles.gradientContainer]}>
					<View style={[styles.headerContainer, { marginTop: top + 10 }]}>
						<Pressable
							style={styles.backButton}
							onPress={() =>
								router.replace({
									pathname: '/individualScreens/MainFolder',
									params: { mainFolder },
								})
							}
						>
							<Ionicons name="chevron-back-sharp" size={30} color={colors.text} />
						</Pressable>
						<Image source={{ uri: albumImage10Uri }} style={styles.albumImage} />
					</View>
					<View style={styles.headerBarContainer}>
						<View>
							<Text style={styles.chapterText}>
								{languageSpecificTitle(isTelugu, chapterFolder)}
							</Text>
							<Text style={styles.mainFolderText}>
								{languageSpecificTitle(isTelugu, mainFolder)}
							</Text>
						</View>
						<AntDesign name="play" size={62} color={gradientColors[0]} />
					</View>
				</LinearGradient>
				<FolderGeneration mainFolder={mainFolder} chapterFolder={chapterFolder} />
			</Animated.ScrollView>
		</View>
	)
}

const styles = StyleSheet.create({
	gradientContainer: {
		overflow: 'hidden',
		paddingHorizontal: screenPadding.horizontal,
	},
	headerContainer: {
		flexDirection: 'row',
	},
	headerBarContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	headerBarContainerMini: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		flex: 1,
	},
	backButton: {
		position: 'absolute',
	},
	albumImage: {
		width: 250,
		height: 250,
		marginHorizontal: 'auto',
		marginTop: 10,
		borderRadius: 10,
	},
	chapterText: {
		fontSize: fontSize.lg,
		color: colors.text,
	},
	mainFolderText: {
		fontSize: fontSize.sm,
		marginTop: 5,
		color: colors.textMuted,
	},
	stickyHeader: {
		position: 'absolute',
		left: 0,
		right: 0,
		paddingVertical: 15,
		paddingHorizontal: screenPadding.horizontal,
		elevation: 4,
		flexDirection: 'row',
		gap: 20,
		zIndex: 10,
	},
	stickyHeaderText: {
		fontSize: fontSize.base,
		color: colors.text,
		fontWeight: 'bold',
	},
})

export default ChapterFolder
