import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import HomeScreen from './screens/HomeScreen';
import RegisterModal from './screens/RegisterModal';
import LoginModal from './screens/LoginModal';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <TailwindProvider>
          <Stack.Navigator
            screenOptions={{
              headerShown:false,
              headerStyle: {
                backgroundColor: 'black',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          >
            <Stack.Group>
              <Stack.Screen name="Home" component={HomeScreen} />
            </Stack.Group>
            <Stack.Group screenOptions={{ presentation: 'modal' }}>
              <Stack.Screen name="LoginModal" component={LoginModal} />
              <Stack.Screen name="RegisterModal" component={RegisterModal} />
            </Stack.Group>
          </Stack.Navigator>
        </TailwindProvider>
      </NavigationContainer>
    </SafeAreaProvider>

  );
}