import { View, Text } from 'react-native'
import React from 'react'
import Pdf from 'react-native-pdf'

import styles from './Math.style'

const Math = () => {
    const source = { uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf', cache: true };
    return (
        <View style={styles.container}>
            <Pdf
                trustAllCerts={false}
                source={PdfResource}
                style={styles.pdf}
                onLoadComplete={(numberOfPages, filePath) => {
                    console.log(`number of pages: ${numberOfPages}`);
                }}
            />
        </View>
    )
}

export default Math