import React from 'react'
import Svg, { Circle, Defs, RadialGradient, Stop } from "react-native-svg"

const BlurCirclesBg = (props) => {
    return (
        <>
            <Svg
                width={85}
                height={161}
                viewBox="0 0 85 161"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
                className='absolute left-0'
            >
                <Circle cy={76} r={85} fill="url(#paint0_radial_23_1603)" />
                <Defs>
                    <RadialGradient
                        id="paint0_radial_23_1603"
                        cx={0}
                        cy={0}
                        r={1}
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="matrix(0 85 -85 0 0 76)"
                    >
                        <Stop stopColor="#FFD60A" stopOpacity={0.3} />
                        <Stop offset={1} stopColor="#FFD60A" stopOpacity={0} />
                    </RadialGradient>
                </Defs>
            </Svg>
            <Svg
                width={85}
                height={170}
                viewBox="0 0 85 170"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
                className='absolute right-0 top-[556px]'
            >
                <Circle cx={85} cy={85} r={85} fill="url(#paint0_radial_23_1604)" />
                <Defs>
                    <RadialGradient
                        id="paint0_radial_23_1604"
                        cx={0}
                        cy={0}
                        r={1}
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="matrix(0 85 -85 0 85 85)"
                    >
                        <Stop stopColor="#32D74B" stopOpacity={0.3} />
                        <Stop offset={1} stopColor="#32D74B" stopOpacity={0} />
                    </RadialGradient>
                </Defs>
            </Svg>
            <Svg
                width={135}
                height={270}
                viewBox="0 0 135 270"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
                className='absolute left-0 top-[548px]'
            >
                <Circle cy={135} r={135} fill="url(#paint0_radial_23_1602)" />
                <Defs>
                    <RadialGradient
                        id="paint0_radial_23_1602"
                        cx={0}
                        cy={0}
                        r={1}
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="matrix(0 135 -135 0 0 135)"
                    >
                        <Stop stopColor="#FF375F" stopOpacity={0.3} />
                        <Stop offset={1} stopColor="#FF375F" stopOpacity={0} />
                    </RadialGradient>
                </Defs>
            </Svg>
        </>
    )
}

export default BlurCirclesBg