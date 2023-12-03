import { View, Text } from 'react-native'
import React, { useState } from 'react'

import styles from './Lop12.style'

const Lop12 = () => {
    const [isLoading, setIsLoading] = useState(true)

    if (isLoading) {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Comming Soon!</Text>
            </View>
        )
    }
    
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Lop 12</Text>
        </View>
    )
}

export default Lop12