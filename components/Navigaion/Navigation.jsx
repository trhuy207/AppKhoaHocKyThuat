import React, { Component } from 'react'

import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

// Tab
import MainHome from '../MainHome/MainHome';
import Document from '../Document/Document';
import Info from '../Info/Info';

// Subject
import Chemistry from '../Chemistry/Chemistry';
import Physics from '../Physics/Physics';
import English from '../English/English';
import Math from '../Math/Math';

// English Child
import Tenses from '../English/Tenses/Tenses'
import Grammar from '../English/Grammar/Grammar'
import IrregularVerbs from '../English/IrregularVerbs/IrregularVerbs'

// English Tenses Child
import FirstTense from '../English/Tenses/FirstTense/FirstTense'
import SecondTense from '../English/Tenses/SecondTense/SecondTense'
import ThirdTense from '../English/Tenses/ThirdTense/ThirdTense'
import FourthTense from '../English/Tenses/FourthTense/FourthTense'
import FifthTense from '../English/Tenses/FifthTense/FifthTense'
import SixthTense from '../English/Tenses/SixthTense/SixthTense'
import SeventhTense from '../English/Tenses/SeventhTense/SeventhTense'
import EighthTense from '../English/Tenses/EighthTense/EighthTense'
import NinethTense from '../English/Tenses/NinethTense/NinethTense'
import TenthTense from '../English/Tenses/TenthTense/TenthTense'
import EleventhTense from '../English/Tenses/EleventhTense/EleventhTense'
import TwelfthTense from '../English/Tenses/TwelfthTense/TwelfthTense'
import ThirteenthTense from '../English/Tenses/ThirteenthTense/ThirteenthTense'

// English Grammar Child
import ConditionalSentences from '../English/Grammar/ConditionalSentences/ConditionalSentences';
import Wish from '../English/Grammar/Wish/Wish';
import ReportedSpeech from '../English/Grammar/ReportedSpeech/ReportedSpeech';
import ClausesOfPurpose from '../English/Grammar/ClausesOfPurpose/ClausesOfPurpose';
import PassiveVoice from '../English/Grammar/PassiveVoice/PassiveVoice';
import ToVerbAndBareInfinitive from '../English/Grammar/ToVerbAndBareInfinitive/ToVerbAndBareInfinitive';
import WhenWhile from '../English/Grammar/WhenWhile/WhenWhile';
import SinceBeforeAfter from '../English/Grammar/SinceBeforeAfter/SinceBeforeAfter';
import CompoundSentence from '../English/Grammar/CompoundSentence/CompoundSentence';
import ComparativeNSuperlative from '../English/Grammar/ComparativeNSuperlative/ComparativeNSuperlative';
import ModalVerbs from '../English/Grammar/ModalVerbs/ModalVerbs';
import RelativeClause from '../English/Grammar/RelativeClause/RelativeClause';

// Chemistry Child
import CauHinhE from '../Chemistry/CauHinhE/CauHinhE';
import ColorChemistry from '../Chemistry/ColorChemistry/ColorChemistry';
import PTHH from '../Chemistry/PTHH/PTHH'
import DayHoatDongKimLoai from '../Chemistry/DayHoatDongKimLoai/DayHoatDongKimLoai'
import NTHHLop8 from '../Chemistry/NTHHLop8/NTHHLop8'
import BangTinhTan from '../Chemistry/BangTinhTan/BangTinhTan'
import BangTuanHoan from '../Chemistry/BangTuanHoan/BangTuanHoan'

// Physics Child
import Lop10 from '../Physics/Lop10/Lop10'
import Lop11 from '../Physics/Lop11/Lop11';
import Lop12 from '../Physics/Lop12/Lop12';

// Stack
const Stack = createNativeStackNavigator();

const StackGroup = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen
                name='TabGroup'
                component={TabGroup}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen 
                name='Chemistry'
                component={Chemistry}
                options={{
                    headerShown: true,
                    title: 'Từ Điển Hóa Học',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
            />

            <Stack.Screen 
                name='Physics'
                component={Physics}
                options={{
                    headerShown: true,
                    title: 'Công Thức Vật Lý',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
            />

            <Stack.Screen 
                name='Math'
                component={Math}
                options={{
                    headerShown: true,
                    title: 'Công Thức Toán',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
            />

            <Stack.Screen 
                name='English'
                component={English}
                options={{
                    headerShown: true,
                    title: 'Công Thức Tiếng Anh',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
            />

            <Stack.Screen
                name='Tenses'
                component={Tenses}
                options={{
                    headerTitle: '13 Thì Cơ Bản',
                    headerBackTitle: 'Trở lại'
                }}
            />

            <Stack.Screen
                name='Grammar'
                component={Grammar}
                options={{
                    headerTitle: 'Ngữ Pháp Khác',
                    headerBackTitle: 'Trở lại'
                }}
            />

            {/* Chemistry child */}
            <Stack.Screen
                name='CauHinhE'
                component={CauHinhE}
                options={{
                    headerTitle: 'Cấu Hình Electron',
                    headerBackTitle: 'Trở lại'
                }}
            /> 

            <Stack.Screen
                name='ColorChemistry'
                component={ColorChemistry}
                options={{
                    headerTitle: 'Màu Một Số Chất',
                    headerBackTitle: 'Trở lại'
                }}
            /> 

            <Stack.Screen
                name='PTHH'
                component={PTHH}
                options={{
                    headerTitle: 'Phương Trình Hóa Học',
                    headerBackTitle: 'Trở lại'
                }}
            /> 

            <Stack.Screen
                name='DayHoatDongKimLoai'
                component={DayHoatDongKimLoai}
                options={{
                    headerTitle: 'Dãy Hoạt Động Kim Loại',
                    headerBackTitle: 'Trở lại'
                }}
            /> 

            <Stack.Screen
                name='NTHHLop8'
                component={NTHHLop8}
                options={{
                    headerTitle: 'Nguyên Tố Hóa Học Lớp 8',
                    headerBackTitle: 'Trở lại'
                }}
            /> 

            <Stack.Screen
                name='BangTinhTan'
                component={BangTinhTan}
                options={{
                    headerTitle: 'Bảng Tính Tan',
                    headerBackTitle: 'Trở lại'
                }}
            /> 

            <Stack.Screen
                name='BangTuanHoan'
                component={BangTuanHoan}
                options={{
                    headerTitle: 'Bảng Tuần Hoàn',
                    headerBackTitle: 'Trở lại'
                }}
            /> 

            {/* 13 basic tense */}
            <Stack.Screen
                name='IrregularVerbs'
                component={IrregularVerbs}
                options={{
                    headerTitle: 'Động Từ Bất Quy Tắc',
                    headerBackTitle: 'Trở lại'
                }}
            />

            <Stack.Screen
                name='FirstTense'
                component={FirstTense}
                options={{
                    headerTitle: 'Hiện Tại Đơn',
                    headerBackTitle: 'Trở lại'
                }}
            />

            <Stack.Screen
                name='SecondTense'
                component={SecondTense}
                options={{
                    headerTitle: 'Hiện Tại Tiếp Diễn',
                    headerBackTitle: 'Trở lại'
                }}
            />

            <Stack.Screen
                name='ThirdTense'
                component={ThirdTense}
                options={{
                    headerTitle: 'Hiện Tại Hoàn Thành',
                    headerBackTitle: 'Trở lại'
                }}
            />

            <Stack.Screen
                name='FourthTense'
                component={FourthTense}
                options={{
                    headerTitle: 'Quá Khứ Đơn',
                    headerBackTitle: 'Trở lại'
                }}
            />

            <Stack.Screen
                name='FifthTense'
                component={FifthTense}
                options={{
                    headerTitle: 'Quá Khứ Tiếp Diễn',
                    headerBackTitle: 'Trở lại'
                }}
            />

            <Stack.Screen
                name='SixthTense'
                component={SixthTense}
                options={{
                    headerTitle: 'Quá Khứ Hoàn Thành',
                    headerBackTitle: 'Trở lại'
                }}
            />

            <Stack.Screen
                name='SeventhTense'
                component={SeventhTense}
                options={{
                    headerTitle: 'Tương Lai Đơn',
                    headerBackTitle: 'Trở lại'
                }}
            />

            <Stack.Screen
                name='EighthTense'
                component={EighthTense}
                options={{
                    headerTitle: 'Tương Lai Gần',
                    headerBackTitle: 'Trở lại'
                }}
            />
            
            <Stack.Screen
                name='NinethTense'
                component={NinethTense}
                options={{
                    headerTitle: 'Tương Lai Tiếp Diễn',
                    headerBackTitle: 'Trở lại'
                }}
            />

            <Stack.Screen
                name='TenthTense'
                component={TenthTense}
                options={{
                    headerTitle: 'Tương Lai Hoàn Thành',
                    headerBackTitle: 'Trở lại'
                }}
            />

            <Stack.Screen
                name='EleventhTense'
                component={EleventhTense}
                options={{
                    headerTitle: 'Hiện Tại Hoàn Thành Tiếp Diễn',
                    headerBackTitle: 'Trở lại'
                }}
            />

            <Stack.Screen
                name='TwelfthTense'
                component={TwelfthTense}
                options={{
                    headerTitle: 'Quá Khứ Hoàn Thành Tiếp Diễn',
                    headerBackTitle: 'Trở lại'
                }}
            />

            <Stack.Screen
                name='ThirteenthTense'
                component={ThirteenthTense}
                options={{
                    headerTitle: 'Tương Lai Hoàn Thành Tiếp Diễn',
                    headerBackTitle: 'Trở lại'
                }}
            />

            {/* English Grammar Child */}
            <Stack.Screen
                name='ConditionalSentences'
                component={ConditionalSentences}
                options={{
                    headerTitle: 'Câu Điều kiện',
                    headerBackTitle: 'Trở lại'
                }}
            />

            <Stack.Screen
                name='Wish'
                component={Wish}
                options={{
                    headerTitle: 'Câu Điều Ước',
                    headerBackTitle: 'Trở lại'
                }}
            />

            <Stack.Screen
                name='ReportedSpeech'
                component={ReportedSpeech}
                options={{
                    headerTitle: 'Câu Tường Thuật',
                    headerBackTitle: 'Trở lại'
                }}
            />

            <Stack.Screen
                name='ClausesOfPurpose'
                component={ClausesOfPurpose}
                options={{
                    headerTitle: 'Câu Diễn Tả Mục Đích',
                    headerBackTitle: 'Trở lại'
                }}
            />

            <Stack.Screen
                name='PassiveVoice'
                component={PassiveVoice}
                options={{
                    headerTitle: 'Câu Bị Động',
                    headerBackTitle: 'Trở lại'
                }}
            />

            <Stack.Screen
                name='ToVerbAndBareInfinitive'
                component={ToVerbAndBareInfinitive}
                options={{
                    headerTitle: 'To-Verb và Bare Infinitive',
                    headerBackTitle: 'Trở lại'
                }}
            />

            <Stack.Screen
                name='WhenWhile'
                component={WhenWhile}
                options={{
                    headerTitle: 'When và While',
                    headerBackTitle: 'Trở lại'
                }}
            />

            <Stack.Screen
                name='SinceBeforeAfter'
                component={SinceBeforeAfter}
                options={{
                    headerTitle: 'Since, Before và After',
                    headerBackTitle: 'Trở lại'
                }}
            />

            <Stack.Screen
                name='CompoundSentence'
                component={CompoundSentence}
                options={{
                    headerTitle: 'Câu Ghép',
                    headerBackTitle: 'Trở lại'
                }}
            />

            <Stack.Screen
                name='ComparativeNSuperlative'
                component={ComparativeNSuperlative}
                options={{
                    headerTitle: 'So sánh hơn và nhất',
                    headerBackTitle: 'Trở lại'
                }}
            />

            <Stack.Screen
                name='ModalVerbs'
                component={ModalVerbs}
                options={{
                    headerTitle: 'Modal Verbs',
                    headerBackTitle: 'Trở lại'
                }}
            />

            <Stack.Screen
                name='RelativeClause'
                component={RelativeClause}
                options={{
                    headerTitle: 'Relative Clause',
                    headerBackTitle: 'Trở lại'
                }}
            />

            {/* Physics Child */}
            <Stack.Screen
                name='Lop10'
                component={Lop10}
                options={{
                    headerTitle: 'Lớp 10',
                    headerBackTitle: 'Trở lại'
                }}
            />

            <Stack.Screen
                name='Lop11'
                component={Lop11}
                options={{
                    headerTitle: 'Lớp 11',
                    headerBackTitle: 'Trở lại'
                }}
            />

            <Stack.Screen
                name='Lop12'
                component={Lop12}
                options={{
                    headerTitle: 'Lớp 12',
                    headerBackTitle: 'Trở lại'
                }}
            />
        </Stack.Navigator>
    )
}

// Tab Bottom
const Tab = createBottomTabNavigator();

const TabGroup = () => {
    return (
        <Tab.Navigator
            screenOptions={({route, navigation}) => ({
                tabBarIcon: ({ color, focused, size}) => {
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = focused ? "home" : "home-outline";
                        return <MaterialCommunityIcons name={iconName} size={size} color={color} />
                    }else if (route.name === 'Document') {
                        iconName ="documents";
                        return <Entypo name={iconName} size={size} color={color} />
                    }
                    else if (route.name === 'Info') {
                        iconName ="info";
                        return <AntDesign name={iconName} size={size} color={color} />
                    }
                }
            })}
        >
            <Tab.Screen 
                name='Home'
                component={MainHome}
                options={{
                    title: 'AH STUDY',
                    tabBarLabel: 'Trang Chủ',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        color: '#524eb7',
                        fontSize: 34
                    }
                }}
            />

            <Tab.Screen 
                name='Document'
                component={Document}
                options={{
                    title: 'Tài Liệu',
                    headerShown: true,
                    headerTitleStyle: {
                        fontWeight: 'bold'
                    }
                }}
            />

            <Tab.Screen 
                name='Info'
                component={Info}
                options={{
                    title: 'Thông Tin',
                    headerShown: true,
                    headerTitleStyle: {
                        fontWeight: 'bold'
                    }
                }}
            />
        </Tab.Navigator>
    )
}

export default class Navigation extends Component {
    render() {
        return (
            <NavigationContainer independent={true}>
                <StatusBar barStyle={'dark-content'} translucent={true} />
                <StackGroup />
            </NavigationContainer>
        )
    }
}