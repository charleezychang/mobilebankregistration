import { View, Text, StyleSheet, Image, ScrollView, ImageBackground, Dimensions, Pressable } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import Card from './CardsTab/card'
import Dot from './CardsTab/carouselDot'
import CustomButton from './CardsTab/customButton'
import CustomButton2 from './CardsTab/customButton2'
import CustomButtonWide from './CardsTab/customButtonWide'

const CardsScreen = () => {
    const [pos, setPos] = useState(0);
    const { width } = Dimensions.get('window')
    const initialScrollWidth = (1248 - width - 312) / 2
    const [cardList, setCardList] = useState([
        {
            bg: require('../assets/BG1.png'),
            title: "Main Card",
            number: "4123 1232 1231 1231",
            expiry: "05 / 25",
            currency: "€",
            amount: "4351.31",
            digital: require('../assets/applepay.png'),
            touch: true,
            card: require('../assets/visa.png'),
        },
        {
            bg: require('../assets/BG2.png'),
            title: "Europe Travel",
            number: "4553 1232 1231 1231",
            expiry: "06 / 25",
            currency: "₱",
            amount: "24351.31",
            digital: require('../assets/googleplay.png'),
            touch: true,
            card: require('../assets/mastercard.png'),
        },
        {
            bg: require('../assets/BG3.png'),
            title: "Europe Travel",
            number: "4553 1632 1231 1231",
            expiry: "06 / 25",
            currency: "₱",
            amount: "24351.31",
            digital: require('../assets/googleplay.png'),
            touch: true,
            card: require('../assets/mastercard.png'),
        },
        {
            bg: require('../assets/BG1.png'),
            title: "Europe Travel",
            number: "4553 1692 1231 1231",
            expiry: "06 / 25",
            currency: "₱",
            amount: "24351.31",
            digital: require('../assets/googleplay.png'),
            touch: true,
            card: require('../assets/mastercard.png'),
        },
        {
            bg: require('../assets/BG1.png'),
            title: "Europe Travel",
            number: "4553 1692 1231 2231",
            expiry: "06 / 25",
            currency: "₱",
            amount: "24351.31",
            digital: require('../assets/googleplay.png'),
            touch: true,
            card: require('../assets/mastercard.png'),
        }
    ])
    
    const navigation = useNavigation()
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

    return (
        <View className={`bg-black flex-column flex-grow`}>
            {/* Header */}
            <View className="h-[10%] flex-row items-center p-5 justify-between">
                <Pressable className="flex-row items-left" onPress={() => navigation.navigate('Home')}>
                    <Image source={require('../assets/arrows.png')} className="h-6 w-6 p-3 rounded-full" />
                    <Text className="text-[#FFFFFF] text-2xl font-semibold ml-5">My cards</Text>
                </Pressable>
                <View>
                    <Image source={require('../assets/addcard2.png')} className="h-6 w-6 p-5" />
                </View>
            </View>
            {/* Card Carousel */}
            <View className='h-[30%] flex-row items-center'>
                <ScrollView
                    horizontal={true}
                    decelerationRate={"fast"}
                    disableIntervalMomentum={true}
                    snapToInterval={312}
                    snapToAlignment={"center"}
                    showsHorizontalScrollIndicator={false}
                    onScroll={(e) => setPos(e.nativeEvent.contentOffset.x)}
                    scrollEventThrottle={500}
                >
                    {cardList.map(item => {
                        return (<Card
                            key={item.number}
                            bg={item.bg}
                            title={item.title}
                            number={item.number}
                            expiry={item.expiry}
                            currency={item.currency}
                            amount={item.amount}
                            digital={item.digital}
                            touch={item.touch}
                            card={item.card}
                        />)
                    })}
                </ScrollView>
            </View>
            {/* Card Carousel Dots */}
            <View className='h-[5%] flex-row justify-center items-center'>
                {cardList.length != 0 && cardList.map((item, index) => {
                    return (
                        ((index == 0 && pos < (initialScrollWidth / 2)) || (pos > (initialScrollWidth / 2) + (312 * (index - 1)) && pos < (initialScrollWidth / 2) + (312 * index))) ? <Dot active={true} key={index} /> : <Dot active={false} key={index} />
                    )
                })}
            </View>
            {/* Buttons */}
            <View className='h-[30%] flex-column items-center '>
                <View className='flex-row w-[90%]'>
                    <CustomButtonWide title="Monthly limit" notif={false} min={3000} max={3400} />
                    <CustomButton title="Change PIN" notif={true} source={require('../assets/changepin.png')} />
                </View>
                <View className='flex-row w-[90%]'>
                    <CustomButton title="Freeze Card" notif={false} source={require('../assets/freeze.png')} />
                    <CustomButton title="Customize" notif={false} source={require('../assets/customize.png')} />
                    <CustomButton title="Manage" notif={false} source={require('../assets/settings.png')} />
                </View>
            </View>
            {/* History Trans */}
            <View style={styles.shadow} className='h-[10%] mt-3 flex-row space-x-4 rounded-t-3xl p-5 items-center'>
                <Image source={require('../assets/chevronup.png')} />
                <Text className='text-white text-2xl font-bold'>History transactions</Text>
            </View>
            {/* More Buttons */}
            <View className=' h-[15%] flex-row space-x-3 bg-[#484848] px-5 pt-1'>
                <CustomButton2 notif={false} source={require('../assets/home.png')} startGradientColor={'#FFD60A'} endGradientColor={'#32D74B'} active={true}/>
                <CustomButton2 notif={false} source={require('../assets/stats.png')} startGradientColor={'#ff9b2e'} endGradientColor={'#ff3760'} active={false}/>
                <CustomButton2 notif={false} source={require('../assets/support.png')} startGradientColor={'#74c9fc'} endGradientColor={'#74c9fc'} active={false}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    shadow: {
        shadowOffset: { width: 1, height:1 },
        shadowColor: 'black',
        shadowOpacity: 0.5,
        elevation: 2,
        backgroundColor: "#484848",
        zIndex: 2
    }
}
)

export default CardsScreen