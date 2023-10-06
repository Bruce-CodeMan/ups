/*
 * @Date: 1985-10-26 16:15:00
 * @Author: Bruce Hsu
 * @Description: 
 */
import { StatusBar } from 'expo-status-bar';
import { View, Text } from "react-native"

export default function App() {
  return (
    <View className='bg-red-300 flex-1'>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

