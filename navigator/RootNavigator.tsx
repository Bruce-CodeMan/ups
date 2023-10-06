/*
 * @Date: 2023-10-06 20:54:57
 * @Author: Bruce Hsu
 * @Description: 
 */
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Custom Imports
import TabNavigator from "./TabNavigator";

const Stack = createNativeStackNavigator()

const RootNavigator = () => {

	return (
		<Stack.Navigator>
			<Stack.Group>
				<Stack.Screen name="Main" component={TabNavigator}/>
			</Stack.Group>
		</Stack.Navigator>
	)
}

export default RootNavigator;