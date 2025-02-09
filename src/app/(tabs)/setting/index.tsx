import {
	Alert,
	Linking,
	ScrollView,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native'
import { useState } from 'react'
import { defaultStyles } from '@/styles'
import { colors, screenPadding } from '@/constants/tokens'

const GITHUB_REPO = 'https://github.com/AshrafMd-1/elbethels-bible-app-/issues'

const About = () => {
	const [issueText, setIssueText] = useState('')

	const handleReportIssue = async () => {
		if (!issueText.trim()) {
			Alert.alert('Error', 'Please enter a valid issue description.')
			return
		}

		const issueTitle = encodeURIComponent('Bug Report / Feedback')
		const issueBody = encodeURIComponent(issueText)
		const issueUrl = `${GITHUB_REPO}/new?title=${issueTitle}&body=${issueBody}`

		Linking.openURL(issueUrl)
		setIssueText('')
	}

	return (
		<View
			style={{
				...defaultStyles.container,
				paddingHorizontal: screenPadding.horizontal,
			}}
		>
			<ScrollView contentContainerStyle={st.scrollContainer}>
				<Text style={st.heading}>Elberthal Audio Book App</Text>
				<Text style={st.subheading}>An audiobook experience for churches</Text>
				<Text style={st.sectionTitle}>App Details</Text>
				<Text style={st.detailText}>Version: 1.0.0</Text>
				<Text style={st.detailText}>Last Updated: Feb 08, 2025</Text>
				<Text style={st.sectionTitle}>Report an Issue</Text>
				<TextInput
					style={st.input}
					placeholder="Describe your issue..."
					placeholderTextColor="#888"
					multiline
					value={issueText}
					onChangeText={setIssueText}
				/>
				<TouchableOpacity style={st.button} onPress={handleReportIssue}>
					<Text style={st.buttonText}>Submit Issue</Text>
				</TouchableOpacity>
				<Text style={st.footer}>
					Developed by{' '}
					<Text
						style={st.linkText}
						onPress={() =>
							Linking.openURL('https://www.linkedin.com/in/ashraf-mohammed-75932823a/')
						}
					>
						Ashraf MD
					</Text>
				</Text>
			</ScrollView>
		</View>
	)
}

const st = StyleSheet.create({
	scrollContainer: {
		paddingBottom: 50,
	},
	linkText: {
		color: '#1e90ff',
		textDecorationLine: 'underline',
		fontWeight: 'bold',
	},
	heading: {
		fontSize: 26,
		fontWeight: 'bold',
		color: colors.primary,
		marginBottom: 8,
	},
	subheading: {
		fontSize: 16,
		color: colors.text,
		marginBottom: 20,
	},
	sectionTitle: {
		fontSize: 22,
		fontWeight: 'bold',
		color: colors.text,
		marginTop: 30,
	},
	detailText: {
		fontSize: 16,
		color: colors.textMuted,
		marginTop: 5,
	},
	input: {
		backgroundColor: '#222',
		color: '#fff',
		fontSize: 16,
		padding: 12,
		marginTop: 10,
		borderRadius: 8,
		minHeight: 80,
		textAlignVertical: 'top',
	},
	button: {
		backgroundColor: colors.primary,
		padding: 12,
		marginTop: 10,
		borderRadius: 8,
		alignItems: 'center',
	},
	buttonText: {
		color: '#fff',
		fontSize: 16,
		fontWeight: 'bold',
	},
	footer: {
		fontSize: 18,
		color: '#aaa',
		textAlign: 'center',
		marginTop: 50,
	},
})

export default About
