import { colors, fontSize } from '@/constants/tokens'
import { Ionicons, MaterialIcons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import { StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import Header from '@/components/Header'

const TabsNavigation = () => {
	return (
		<>
			<Header />
			<Tabs
				screenOptions={{
					tabBarActiveTintColor: colors.primary,
					tabBarLabelStyle: {
						fontSize: fontSize.xs,
						fontWeight: '500',
					},
					headerShown: false,
					tabBarStyle: {
						position: 'absolute',
						borderTopLeftRadius: 20,
						borderTopRightRadius: 20,
						borderTopWidth: 0,
						height: 'auto',
						paddingTop: 8,
					},
					tabBarBackground: () => (
						<LinearGradient
							colors={['rgba(80,45,45,0.8)', 'rgba(45,25,25,0.9)', 'rgb(17,9,9)']}
							style={{
								...StyleSheet.absoluteFillObject,
								overflow: 'hidden',
								borderTopLeftRadius: 20,
								borderTopRightRadius: 20,
							}}
						/>
					),
				}}
			>
				<Tabs.Screen
					name="(home)/index"
					options={{
						title: 'Home',
						tabBarIcon: ({ color }) => <MaterialIcons name="home-filled" size={24} color={color} />,
					}}
				/>
				<Tabs.Screen
					name="library/index"
					options={{
						title: 'Library',
						tabBarIcon: ({ color }) => (
							<MaterialIcons name="library-music" size={22} color={color} />
						),
					}}
				/>
				<Tabs.Screen
					name="setting/index"
					options={{
						title: 'Setting',
						tabBarIcon: ({ color }) => <Ionicons name="settings-sharp" size={22} color={color} />,
					}}
				/>
			</Tabs>
		</>
	)
}

export default TabsNavigation
