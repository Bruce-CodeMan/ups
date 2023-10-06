/*
 * @Date: 1985-10-26 16:15:00
 * @Author: Bruce Hsu
 * @Description: 
 */
import { NavigationContainer } from "@react-navigation/native"
import RootNavigator from "./navigator/RootNavigator";


export default function App() {
  return (
		<NavigationContainer>
			<RootNavigator />
		</NavigationContainer>
  );
}

