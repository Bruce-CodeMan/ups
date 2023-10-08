/*
 * @Date: 2023-10-06 14:28:54
 * @Author: Bruce Hsu
 * @Description: 
 */
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect, useState } from "react";
import { ScrollView, Image } from "react-native";
import { Input } from "@rneui/base"


const CustomerScreen = () => {

	const navigation = useNavigation()
	const [input, setInput] = useState<string>("")

	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: false
		})
	}, [])

	return (
		<ScrollView className="bg-[#59C1CC]">
			<Image 
				source={{
					uri: "https://links.papareact.com/3jc"
				}}
				className="h-64 w-full"
			/>

			<Input 
				placeholder="Search by Customer"
				value={input}
				onChangeText={setInput}
				containerStyle={{
					backgroundColor: "white",
					paddingTop: 20,
					paddingLeft: 40,
					paddingRight: 40
					
				}}
			/>
		</ScrollView>
	)
}

export default CustomerScreen;