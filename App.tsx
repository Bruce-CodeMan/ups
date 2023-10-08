/*
 * @Date: 1985-10-26 16:15:00
 * @Author: Bruce Hsu
 * @Description: 
 */
import { NavigationContainer } from "@react-navigation/native"
import RootNavigator from "./navigator/RootNavigator";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
	uri: "http://localhost:3000/api",
	cache: new InMemoryCache()
})

export default function App() {
  return (
		<ApolloProvider client={client}>
			<NavigationContainer>
				<RootNavigator />
			</NavigationContainer>
		</ApolloProvider>
  );
}

