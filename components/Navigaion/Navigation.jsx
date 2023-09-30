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
import CauDieuKien from '../English/Grammar/CauDieuKien/CauDieuKien';
import CauDieuUoc from '../English/Grammar/CauDieuUoc/CauDieuUoc';
import CauTuongThuat from '../English/Grammar/CauTuongThuat/CauTuongThuat';
import CauDienTaMucDich from '../English/Grammar/CauDienTaMucDich/CauDienTaMucDich';

// Chemistry Child
import CauHinhE from '../Chemistry/CauHinhE/CauHinhE';
import ColorChemistry from '../Chemistry/ColorChemistry/ColorChemistry';
import TraCuuNT from '../Chemistry/TraCuuNT/TraCuuNT';
import PTHH from '../Chemistry/PTHH/PTHH'
import DayHoatDongKimLoai from '../Chemistry/DayHoatDongKimLoai/DayHoatDongKimLoai'
import NTHHLop8 from '../Chemistry/NTHHLop8/NTHHLop8'
import BangTinhTan from '../Chemistry/BangTinhTan/BangTinhTan'
import BangTuanHoan from '../Chemistry/BangTuanHoan/BangTuanHoan'

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
                    headerShown: false
                }}
            />

            <Stack.Screen
                name='Grammar'
                component={Grammar}
                options={{
                    headerShown: false
                }}
            />

            {/* Chemistry child */}
            <Stack.Screen
                name='CauHinhE'
                component={CauHinhE}
                options={{
                    headerTitle: 'Cấu Hình Electron'
                }}
            /> 

            <Stack.Screen
                name='ColorChemistry'
                component={ColorChemistry}
                options={{
                    headerTitle: 'Màu Một Số Chất'
                }}
            /> 

            <Stack.Screen
                name='TraCuuNT'
                component={TraCuuNT}
                options={{
                    headerTitle: 'Tra Cứu Nguyên Tố'
                }}
            /> 

            <Stack.Screen
                name='PTHH'
                component={PTHH}
                options={{
                    headerTitle: 'Phương Trình Hóa Học'
                }}
            /> 

            <Stack.Screen
                name='DayHoatDongKimLoai'
                component={DayHoatDongKimLoai}
                options={{
                    headerTitle: 'Dãy Hoạt Động Kim Loại'
                }}
            /> 

            <Stack.Screen
                name='NTHHLop8'
                component={NTHHLop8}
                options={{
                    headerTitle: 'Nguyên Tố Hóa Học Lớp 8'
                }}
            /> 

            <Stack.Screen
                name='BangTinhTan'
                component={BangTinhTan}
                options={{
                    headerTitle: 'Bảng Tính Tan'
                }}
            /> 

            <Stack.Screen
                name='BangTuanHoan'
                component={BangTuanHoan}
                options={{
                    headerTitle: 'Bảng Tuần Hoàn'
                }}
            /> 

            {/* 10 basic tense */}
            <Stack.Screen
                name='IrregularVerbs'
                component={IrregularVerbs}
                options={{
                    headerTitle: 'Động Từ Bất Quy Tắc'
                }}
            />

            <Stack.Screen
                name='FirstTense'
                component={FirstTense}
                options={{
                    headerTitle: 'Hiện Tại Đơn'
                }}
            />

            <Stack.Screen
                name='SecondTense'
                component={SecondTense}
                options={{
                    headerTitle: 'Hiện Tại Tiếp Diễn'
                }}
            />

            <Stack.Screen
                name='ThirdTense'
                component={ThirdTense}
                options={{
                    headerTitle: 'Hiện Tại Hoàn Thành'
                }}
            />

            <Stack.Screen
                name='FourthTense'
                component={FourthTense}
                options={{
                    headerTitle: 'Quá Khứ Đơn'
                }}
            />

            <Stack.Screen
                name='FifthTense'
                component={FifthTense}
                options={{
                    headerTitle: 'Quá Khứ Tiếp Diễn'
                }}
            />

            <Stack.Screen
                name='SixthTense'
                component={SixthTense}
                options={{
                    headerTitle: 'Quá Khứ Hoàn Thành'
                }}
            />

            <Stack.Screen
                name='SeventhTense'
                component={SeventhTense}
                options={{
                    headerTitle: 'Tương Lai Đơn'
                }}
            />

            <Stack.Screen
                name='EighthTense'
                component={EighthTense}
                options={{
                    headerTitle: 'Tương Lai Gần'
                }}
            />
            
            <Stack.Screen
                name='NinethTense'
                component={NinethTense}
                options={{
                    headerTitle: 'Tương Lai Tiếp Diễn'
                }}
            />

            <Stack.Screen
                name='TenthTense'
                component={TenthTense}
                options={{
                    headerTitle: 'Tương Lai Hoàn Thành'
                }}
            />

            <Stack.Screen
                name='EleventhTense'
                component={EleventhTense}
                options={{
                    headerTitle: 'Hiện Tại Hoàn Thành Tiếp Diễn'
                }}
            />

            <Stack.Screen
                name='TwelfthTense'
                component={TwelfthTense}
                options={{
                    headerTitle: 'Quá Khứ Hoàn Thành Tiếp Diễn'
                }}
            />

            <Stack.Screen
                name='ThirteenthTense'
                component={ThirteenthTense}
                options={{
                    headerTitle: 'Tương Lai Hoàn Thành Tiếp Diễn'
                }}
            />

            {/* English Grammar Child */}
            <Stack.Screen
                name='CauDieuKien'
                component={CauDieuKien}
                options={{
                    headerTitle: 'Câu Điều kiện'
                }}
            />

            <Stack.Screen
                name='CauDieuUoc'
                component={CauDieuUoc}
                options={{
                    headerTitle: 'Câu Điều Ước'
                }}
            />

            <Stack.Screen
                name='CauTuongThuat'
                component={CauTuongThuat}
                options={{
                    headerTitle: 'Câu Tường Thuật'
                }}
            />

            <Stack.Screen
                name='CauDienTaMucDich'
                component={CauDienTaMucDich}
                options={{
                    headerTitle: 'Câu Diễn Tả Mục Đích'
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
                <StackGroup />
                <StatusBar barStyle={'dark-content'} translucent={true} />
            </NavigationContainer>
        )
    }
}