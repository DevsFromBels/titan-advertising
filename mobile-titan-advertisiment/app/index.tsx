import React, { useRef, useEffect } from "react"
import { View, Text, SafeAreaView } from "react-native"

export default function App() {
	return (
		<SafeAreaView >
			<View style={{
				display: "flex",
				justifyContent: 'center',

			}} className="w-screen h-screen flex justify-center items-center">
				<Text className='mt-10 text-center text-7xl'>
					Welcome to the 
					Titan Avertisement
				</Text>
			</View>
		</SafeAreaView>
	)
}
