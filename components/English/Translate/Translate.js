import { View, Text, TextInput, SafeAreaView, TouchableOpacity, ScrollView, Alert } from 'react-native'
import React, { useState, useCallback } from 'react'
import * as Clipboard from 'expo-clipboard';

import GlobalApi from './Services/GlobalApi'

import styles from './Translate.style'

const Translate = () => {
    const [inputText, setInputText] = useState('')
    const [translatedText, setTranslatedText] = useState('')
    const [isLoading, setIsLoading] = useState(true)

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
                setIsLoading(false)
            }
        })
    }

    const loadingText = () => {
        if (isLoading == true) {
            return (
                <Text style={styles.text}>Đang tải ...</Text>
            )
        }
        else {
            const copyToClipboard = async () => {
                await Clipboard.setStringAsync(translatedText);
                Alert.alert('Thông Báo!', 'Copy thành công', [
                    { text: 'OK'},
                ]);
            };
            return (
                <View style={styles.translateBox}>
                    <TouchableOpacity style={styles.copyBtn} onPress={copyToClipboard}>
                        <Text style={styles.btnCopyText}>Copy</Text>
                    </TouchableOpacity>
                    <Text style={styles.text}>{translatedText}</Text>
                </View>
            )
        }
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
                    <Text style={styles.title}>Translated Text:</Text>
                    {loadingText()}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Translate