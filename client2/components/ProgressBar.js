import { View } from 'react-native'
import React from 'react'
import Svg, { Path, Defs, LinearGradient, Stop, Circle } from "react-native-svg"

const ProgressBar = (props) => {

    const setGradientLength = () => {
        if (props.registrationStep > 1) {
            let length = (75 * Math.floor(props.registrationStep / 2))
            return length
        }
        else {
            return 0
        }
        
        // console.log(length);
        
    }

    return (
        <View className='mt-5 ml-10 mr-10 flex-column items-center w-[300px] h-[8px] justify-center'>
            {/* Full Gray Bar */}
            <Svg
                width={300}
                height={4}
                viewBox="0 0 300 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
                className='absolute '
            >
                <Path fill="#3A3A3C" d="M0 0H300V4H0z" />
            </Svg>
            {/* Gradient Bar */}
            <Svg
                width={setGradientLength()}
                height={4}
                viewBox={`0 0 ${setGradientLength()} 4`}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
                className='absolute self-start'
            >
                <Path fill="url(#paint0_linear_8_71)" d={`M0 0H${setGradientLength()}V4H0z`} />
                <Defs>
                    <LinearGradient
                        id="paint0_linear_8_71"
                        x1={2}
                        y1={2.95727e-8}
                        x2={setGradientLength()}
                        y2={0.00000152461}
                        gradientUnits="userSpaceOnUse"
                    >
                        <Stop stopColor="#FFD60A" />
                        <Stop offset={1} stopColor="#32D74B" />
                    </LinearGradient>
                </Defs>
            </Svg>

            <View className='absolute w-[300px] h-[8px] flex-row items-center justify-between'>
                {/* Gray Dot 1 */}
                <Svg
                    width={11}
                    height={11}
                    viewBox="0 0 11 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    {...props}

                >
                    <Circle cx={5.5} cy={5.5} r={5.5} fill={props.registrationStep >= 1 ? '#32D74B' : '#3A3A3C'} />
                </Svg>
                {/* Gray Dot 2 */}
                <Svg
                    width={11}
                    height={11}
                    viewBox="0 0 11 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    {...props}

                >
                    <Circle cx={5.5} cy={5.5} r={5.5} fill={props.registrationStep >= 3 ? '#32D74B' : '#3A3A3C'} />
                </Svg>
                {/* Gray Dot 3 */}
                <Svg
                    width={11}
                    height={11}
                    viewBox="0 0 11 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    {...props}

                >
                    <Circle cx={5.5} cy={5.5} r={5.5} fill={props.registrationStep >= 5 ? '#32D74B' : '#3A3A3C'} />
                </Svg>
                {/* Gray Dot 4 */}
                <Svg
                    width={11}
                    height={11}
                    viewBox="0 0 11 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    {...props}

                >
                    <Circle cx={5.5} cy={5.5} r={5.5} fill={props.registrationStep >= 7 ? '#32D74B' : '#3A3A3C'} />
                </Svg>
                {/* Gray Dot 5 */}
                <Svg
                    width={11}
                    height={11}
                    viewBox="0 0 11 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    {...props}
                >
                    <Circle cx={5.5} cy={5.5} r={5.5} fill={props.registrationStep >= 9 ? '#32D74B' : '#3A3A3C'} />
                </Svg>
            </View>





        </View>
    )
}

export default ProgressBar