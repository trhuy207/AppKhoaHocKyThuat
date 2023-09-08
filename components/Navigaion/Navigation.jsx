import React, { Component } from 'react'

import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import MainHome from '../MainHome/MainHome';
import Document from '../Document/Document';
import Info from '../Info/Info';

import Chemistry from '../Chemistry/Chemistry';
import Physics from '../Physics/Physics';
import English from '../English/English';
import Math from '../Math/Math';

import Tenses from '../English/Tenses/Tenses'
import Grammar from '../English/Grammar/Grammar'
import IrregularVerbs from '../English/IrregularVerbs/IrregularVerbs'

// Stack
const Stack = createNativeStackNavigator();

const StackGroup = () => {
    return(
        <Stack.Navigator>
            {/* <Stack.Screen
                name='TabGroup'
                component={TabGroup}
                options={{
                    headerShown: false
                }}
            /> */}

            <Stack.Screen
                name='DrawerGroup'
                component={DrawerGroup}
                options={{
                    headerShown: false
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

            <Stack.Screen
                name='IrregularVerbs'
                component={IrregularVerbs}
                options={{
                    headerShown: false
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
                }}
            />

            <Tab.Screen 
                name='Document'
                component={Document}
                options={{
                    title: 'Tài Liệu',
                    headerShown: true
                }}
            />

            <Tab.Screen 
                name='Info'
                component={Info}
                options={{
                    title: 'Thông Tin',
                    headerShown: true
                }}
            />
        </Tab.Navigator>
    )
}

// Drawer
const Drawer = createDrawerNavigator();

const DrawerGroup = () => {
    return(
        <Drawer.Navigator screenOptions={{headerShown: false}}>
            <Drawer.Screen 
                name='TabGroup'
                component={TabGroup}
                options={{
                    title: 'AH STUDY',
                }}
            />

            <Drawer.Screen 
                name='Chemistry'
                component={Chemistry}
                options={{
                    headerShown: true,
                    title: 'Từ Điển Hóa Học'
                }}
            />

            <Drawer.Screen 
                name='Physics'
                component={Physics}
                options={{
                    headerShown: true,
                    title: 'Công Thức Vật Lý'
                }}
            />

            <Drawer.Screen 
                name='Math'
                component={Math}
                options={{
                    headerShown: true,
                    title: 'Công Thức Toán'
                }}
            />

            <Drawer.Screen 
                name='English'
                component={English}
                options={{
                    headerShown: true,
                    title: 'Công Thức Tiếng Anh',
                }}
            />
        </Drawer.Navigator>
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