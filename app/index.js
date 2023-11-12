import React from 'react'
import 'react-native-gesture-handler';

import { SafeAreaProvider } from 'react-native-safe-area-context'

import { View, SafeAreaView } from 'react-native';

import Navigation from '../components/Navigaion/Navigation';

const Home = () => {
    return (
        <SafeAreaProvider>
            <Navigation />
        </SafeAreaProvider>
    )
}

export default Home