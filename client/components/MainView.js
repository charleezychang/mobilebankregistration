import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { HomeIcon, CreditCardIcon, ChatAlt2Icon, CogIcon, PlusCircleIcon } from "react-native-heroicons/solid";
import AddTab from './AddTab';
import CardsTab from './CardsTab';
import ChatTab from './ChatTab';
import HomeTab from './HomeTab';
import SettingsTab from './SettingsTab';

const MainView = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator

      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {

          if (route.name === 'HomeTab') {
            return <HomeIcon fill='white' size={30} color='white' />
          } else if (route.name === 'CardsTab') {
            return <CreditCardIcon fill='white' size={30} />
          } else if (route.name === 'AddTab') {
            return <PlusCircleIcon fill='white' size={30} />
          } else if (route.name === 'ChatTab') {
            return <ChatAlt2Icon fill='white' size={30} />
          } else if (route.name === 'SettingsTab') {
            return <CogIcon fill='white' size={30} />
          }

          // You can return any component that you like here!
          ;
        },
        headerShown: false,
        headerStyle: {
          backgroundColor: 'black',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        // tabBarActiveBackgroundColor: "#121212",
        // tabBarInactiveBackgroundColor: "#121212",
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 68,
          borderWidth: 0.5,
          borderBottomWidth: 1,
          backgroundColor: 'orange',
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          borderColor: 'transparent',
          overflow: 'hidden',
        }
      })}
    >
      <Tab.Screen name="HomeTab" component={HomeTab} />
      <Tab.Screen name="CardsTab" component={CardsTab} />
      <Tab.Screen name="AddTab" component={AddTab} />
      <Tab.Screen name="ChatTab" component={ChatTab} />
      <Tab.Screen name="SettingsTab" component={SettingsTab} />
    </Tab.Navigator>
  );
}

export default MainView