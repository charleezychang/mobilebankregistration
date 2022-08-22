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

import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'
import {
  Poppins_100Thin,
  Poppins_100Thin_Italic,
  Poppins_200ExtraLight,
  Poppins_200ExtraLight_Italic,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
  Poppins_800ExtraBold,
  Poppins_800ExtraBold_Italic,
  Poppins_900Black,
  Poppins_900Black_Italic
} from '@expo-google-fonts/poppins'



export default function App() {

    let [fontsLoaded] = useFonts({
      "Poppins-Thin": Poppins_100Thin,
      "Poppins-ExtrLight": Poppins_200ExtraLight,
      "Poppins-Light": Poppins_300Light,
      "Poppins-Regular": Poppins_400Regular,
      "Poppins-Medium": Poppins_500Medium,
      "Poppins-SemiBold": Poppins_600SemiBold,
      "Poppins-Bold": Poppins_700Bold,
      "Poppins-ExtraBold": Poppins_800ExtraBold,
      "Poppins-Black": Poppins_900Black,
    })
    if (!fontsLoaded) {
      return <AppLoading />
    }

    const Stack = createNativeStackNavigator();

    return (
      <SafeAreaProvider>
        <NavigationContainer>
          <TailwindProvider>
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
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