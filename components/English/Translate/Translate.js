import { View, Text, TextInput, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState, useCallback } from 'react'

import GlobalApi from './Services/GlobalApi'

import styles from './Translate.style'

const Translate = () => {
    const [inputText, setInputText] = useState('')
    const [translatedText, setTranslatedText] = useState('')

    const onSend = useCallback((messages) => {
        getApiResp(messages)
    })

    const getApiResp = (msg) => {
        GlobalApi.getBardApi(msg).then(resp => {
            if (resp.data.choices[0].message.content) {
                const chatAIResp = {
                    text: resp.data.choices[0].message.content,
                    createdAt: new Date(),
                    user: {
                        name: 'React Native',
                    }
                }
                setTranslatedText(chatAIResp.text)
                console.log(resp.data.choices[0].message.content)
            }
        })
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Dịch Anh - Việt</Text>
                </View>
                <View style={styles.body}>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={text => setInputText(text)}
                        value={inputText}
                        multiline
                    />
                    <TouchableOpacity style={styles.translateBtn} onPress={() => onSend(inputText)}>
                        <Text style={styles.btnText}>Translate</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.translateBtn} onPress={() => console.log(inputText)}>
                        <Text style={styles.btnText}>Translate</Text>
                    </TouchableOpacity>
                    <Text style={styles.title}>Translated Text:</Text>
                    <Text style={styles.text}>{translatedText}</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Translate