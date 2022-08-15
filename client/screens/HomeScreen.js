import { View, Text, StatusBar, Image, Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import InitialView from '../components/InitialView';
import HomeView from '../components/HomeView';
import { useIsFocused } from '@react-navigation/native';

const HomeScreen = () => {
    // const navigation = useNavigation()
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const route = useRoute()
    const isFocused = useIsFocused();
    useEffect(() => {
        if (route.params) {
            setIsLoggedIn(route.params.isLoggedIn)
        }
        else {
            setIsLoggedIn(false)
        }
    }, [isFocused])

    return (
        <SafeAreaView className='flex-1 bg-[#121212]'>
            {isLoggedIn ? <HomeView /> : <InitialView />}
        </SafeAreaView>
    )
}

export default HomeScreen