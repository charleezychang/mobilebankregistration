import { View, Text, Image, StyleSheet } from 'react-native'
import Dot from './carouselDot'
import { LinearGradient } from 'expo-linear-gradient';

const customButton = (props) => {
    const monthlyLimitAchieved = (props.min / props.max * 100)
    const monthlyLimitBar = {
        width: `${monthlyLimitAchieved}%`,
    };
    const monthlyLimitDot = {
        left: `${monthlyLimitAchieved - 1}%`
    }

    return (
        <View className="w-[62.66%] mx-[2%] my-[4%] flex-column items-center relative">
            <View className="bg-[#484848] rounded-xl w-[100%] relative flex-column items-center overflow-hidden">
                <View className="py-3 flex-row justify-between w-[80%]">
                    <Text className="text-white text-xl font-bold">₱ {props.min}</Text>
                    <Text className="text-white text-xl font-bold">₱ {props.max}</Text>
                </View>
                <View style={[styles.bar, monthlyLimitBar]}>
                    <LinearGradient colors={['#FFD60A', '#32D74B']} style={styles.gradientFill} start={[0, 0]} end={[1, 1]}>
                    </LinearGradient>
                </View>

                <View style={[styles.dot, monthlyLimitDot]}>
                    <LinearGradient colors={['#FFD60A', '#32D74B']} style={styles.gradientFill} start={[1, 1]} end={[0, 0]}>
                    </LinearGradient>
                </View>
            </View>
            <Text className="text-[#a0a0a0] text-lg pt-1">{props.title}</Text>
            <View className="absolute -top-1 -right-1">
                {props.notif && <Dot active={props.notif} />}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    bar: {
        flex: 1,
        position: "absolute",
        bottom: "0%",
        height: "8%",
        alignSelf: "flex-start",
        width: "0%",
        backgroundColor: "white",
        overflow: "hidden"
    },
    dot: {
        flex: 1,
        position: "absolute",
        bottom: "-9%",
        left: "0%",
        height: 11,
        width: 11,
        borderRadius: 50,
        alignSelf: "flex-start",
        backgroundColor: "white",
        overflow: "hidden"
    },
    gradientFill: {
        height: "100%",
        width: "100%"
    }
});


export default customButton