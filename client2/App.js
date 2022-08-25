import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import React, { useState, useEffect } from 'react'
import * as Device from 'expo-device';

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
  Poppins_200ExtraLight,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
  Poppins_900Black,
} from '@expo-google-fonts/poppins'


export default function App() {
  
  useEffect(() => {
    const getDeviceType = async () => {
      let deviceType = await Device.getDeviceTypeAsync()
      console.log(deviceType);
    }

    getDeviceType();
    return () => {
    }
  }, [])

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
              headerStyle: {
                backgroundColor: 'black',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              headerBackTitleVisible: false,
              // headerTitleAlign: "left"
            }}
          >
            <Stack.Group>
              <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
              <Stack.Screen name="NoConnection" component={NoConnectionScreen} options={{ title: "No Connection" }}/>
              <Stack.Screen name="Login" component={LoginModal} />
              <Stack.Screen name="RegistrationModal" component={RegistrationModal} options={{ title: "Registration" }} />
              <Stack.Screen name="SuccessRegModal" component={SuccessRegModal} options={{ title: "Successful Registration" }}/>
              <Stack.Screen name="OtpModal" component={OtpModal} options={{ title: "" }}/>
            </Stack.Group>
          </Stack.Navigator>
        </TailwindProvider>
      </NavigationContainer>
    </SafeAreaProvider>

  );
}