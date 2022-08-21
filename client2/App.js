import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import HomeScreen from './screens/HomeScreen';
import RegistrationModal from './screens/RegistrationModal';
import SuccessRegModal from './screens/SuccessRegModal'
import LoginModal from './screens/LoginModal';
import NoConnectionScreen from './screens/NoConnectionScreen';
import OtpModal from './screens/OtpModal';

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
              <Stack.Screen name="NoConnection" component={NoConnectionScreen} />
              <Stack.Screen name="LoginModal" component={LoginModal} />
              <Stack.Screen name="RegistrationModal" component={RegistrationModal} />
              <Stack.Screen name="SuccessRegModal" component={SuccessRegModal} />
              <Stack.Screen name="OtpModal" component={OtpModal} />
            </Stack.Group>
          </Stack.Navigator>
        </TailwindProvider>
      </NavigationContainer>
    </SafeAreaProvider>

  );
}