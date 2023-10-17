import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'

import styles from './Wish.style';

const Wish = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.body}>
                    <View style={styles.card}>
                        {/* introduce */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardContent}>
                                <Text style={styles.contentText}>Động từ <Text style={{fontWeight:'bold'}}>WISH = IF ONLY</Text> (ao ước) thường dùng để diễn tả những ước muốn, những điều không có thật hoặc rất khó thực hiện. Có 3 loại câu ước:</Text>
                            </View>
                        </View>

                        {/* Câu điều ước loại 1 */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.headerText}>A. Future Wish (Ước trái ngược với một tình huống trong tương lai):</Text>
                            </View>
                            <View style={styles.cardContent}>
                                <Text style={styles.contentTitle}>Công thức:</Text>
                                <Text style={styles.contentText}>S + Wish(es) that + S + would/could + V-inf ...</Text>
                                <Text style={styles.contentEx}>Ex 1 : Mary will visit Paris next week.{'\n'} {'->'} I wish that Mary wouldn’t visit Paris next week .</Text>
                                <Text style={styles.contentEx}>Ex 2 : I can’t speak Spanish fluently.{'\n'} {'->'}I wish that I could speak Spanish fluently.</Text>
                            </View>
                        </View>

                        {/* Câu điều ước loại 2 */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.headerText}>B. Present Wish (Ước trái ngược với một tình huống ở hiện tại):</Text>
                            </View>
                            <View style={styles.cardContent}>
                                <Text style={styles.contentTitle}>Công thức:</Text>
                                <Text style={styles.contentText}>S + Wish(es) that + S + V2/V-ed/were ...</Text>
                                <Text style={styles.contentEx}>Ex 1 : The weather isn’t good.{'\n'} {'->'} I wish that the weather were good.</Text>
                                <Text style={styles.contentEx}>Ex 2 : He learns very badly.{'\n'} {'->'} They wish he didn’t learn badly.</Text>
                            </View>
                        </View>

                        {/* Câu điều ước loại 3 */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.headerText}>C. Past Wish (Ước trái ngược với một tình huống ở quá khứ):</Text>
                            </View>
                            <View style={styles.cardContent}>
                                <Text style={styles.contentTitle}>Công thức:</Text>
                                <Text style={styles.contentText}>S + Wish(es) that + S + could/ have V3/V-ed/ ...</Text>
                                <Text style={styles.contentEx}>Ex 1 : I’m sorry, they didn’t take part in the party last night.{'\n'} {'->'} I wish They had taken part in the party last night.</Text>
                                <Text style={styles.contentEx}>Ex 2 : She couldn’t be with me yesterday.{'\n'} {'->'} I wish she could have been with me yesterday.</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Wish