/*
 * @Date: 2023-10-06 14:28:54
 * @Author: Bruce Hsu
 * @Description: 
 */
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { ScrollView, Image } from "react-native";

const CustomerScreen = () => {

	const navigation = useNavigation()

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
		</ScrollView>
	)
}

export default CustomerScreen;