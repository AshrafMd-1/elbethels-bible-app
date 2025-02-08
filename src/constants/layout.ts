import { NativeStackNavigationOptions } from '@react-navigation/native-stack'
import { colors } from '@/constants/tokens'

export const StackScreenWithSearchBar: NativeStackNavigationOptions = {
	headerStyle: {
		backgroundColor: colors.background,
	},
	headerTitleStyle: {
		color: colors.text,
		fontSize: 35,
		fontWeight: 'bold',
	},
	headerTintColor: colors.text,
	headerShadowVisible: false,
}
