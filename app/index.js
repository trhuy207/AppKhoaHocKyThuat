import React from 'react'
import 'react-native-gesture-handler';

import { SafeAreaProvider } from 'react-native-safe-area-context'

import Navigation from '../components/Navigaion/Navigation';

const Home = () => {
    return (
        <SafeAreaProvider>
            <Navigation />
        </SafeAreaProvider>
    )
}

export default Home