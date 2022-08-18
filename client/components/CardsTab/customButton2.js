import { View, Text, Image, Pressable, StyleSheet } from 'react-native'
import Dot from './carouselDot'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const customButton2 = (props) => {
    const navigation = useNavigation();

    return (
        <Pressable 
        onPress={() => {navigation.navigate('Test')}}
        className="w-[29.33%] h-[45%] mx-[2%] my-[4%] flex-column relative">
            <View className="rounded-xl w-[100%] h-[100%] overflow-hidden flex-column relative">
                <LinearGradient colors={[props.active?props.startGradientColor:'transparent', props.active?props.endGradientColor:'transparent']} style={styles.gradientFill} start={[0, 0]} end={[1, 1]}>
                    <Image source={props.source} />
                </LinearGradient>
            </View>
            <View className="absolute -top-1 -right-1">
                {props.notif && <Dot active={props.notif} />}
            </View>
        </Pressable>
    )
}
const styles = StyleSheet.create({
    gradientFill: {
        height: "100%",
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    }
});
export default customButton2