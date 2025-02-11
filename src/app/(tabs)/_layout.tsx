import { colors, fontSize } from '@/constants/tokens'
import { Ionicons, MaterialIcons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import { StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import Header from '@/components/Header'
import { FloatingPlayer } from '@/components/FloatingPlayer'

const TabsNavigation = () => {
	return (
		<>
			<Header />
			<Tabs
				backBehavior="firstRoute"
				screenOptions={{
					tabBarActiveTintColor: colors.primary,
					tabBarLabelStyle: {
						fontSize: fontSize.xs,
						fontWeight: '500',
					},
					tabBarStyle: {
						position: 'absolute',
						borderTopLeftRadius: 20,
						borderTopRightRadius: 20,
						borderTopWidth: 0,
						height: 'auto',
						paddingTop: 8,
						backgroundColor: colors.backgroundMuted,
					},
				}}
			>
				<Tabs.Screen
					name="(home)/index"
					options={{
						title: 'Home',
						headerShown: false,
						tabBarIcon: ({ color }) => <MaterialIcons name="home-filled" size={24} color={color} />,
					}}
				/>
				<Tabs.Screen
					name="library/index"
					options={{
						title: 'Library',
						headerShown: false,
						tabBarIcon: ({ color }) => (
							<MaterialIcons name="library-music" size={22} color={color} />
						),
					}}
				/>
				<Tabs.Screen
					name="setting/index"
					options={{
						title: 'Setting',
						headerShown: false,
						tabBarIcon: ({ color }) => <Ionicons name="settings-sharp" size={22} color={color} />,
					}}
				/>
				<Tabs.Screen
					name="individualScreens/MainFolder"
					options={{
						href: null,
						title: 'MainFolder',
						headerShown: false,
					}}
				/>
				<Tabs.Screen
					name="individualScreens/ChapterFolder"
					options={{
						href: null,
						title: 'ChapterFolder',
						headerShown: false,
					}}
				/>
			</Tabs>
			<FloatingPlayer
				style={{
					position: 'absolute',
					left: 8,
					right: 8,
					bottom: 65,
				}}
			/>
		</>
	)
}

export default TabsNavigation
