import { View, Text, Image } from 'react-native'
import Dot from './carouselDot'
import React from 'react'

const customButton = (props) => {
    return (
        <View className="w-[29.33%] mx-[2%] my-[4%] flex-column items-center relative ">
            <View className="w rounded-xl py-3 flex-row justify-center w-[100%] bg-[#484848]">
                <Image source={props.source} />
            </View>
            <Text className="text-[#a0a0a0] text-lg pt-1">{props.title}</Text>
            <View className="absolute -top-1 -right-1">
                {props.notif && <Dot active={props.notif} />}
            </View>

            
        </View>
    )
}

export default customButton