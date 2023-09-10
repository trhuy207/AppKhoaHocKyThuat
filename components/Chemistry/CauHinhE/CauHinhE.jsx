import { View, Text, TouchableOpacity, SafeAreaView, ScrollView, FlatList } from 'react-native'
import React from 'react'

import { Table, Row, Rows, TableWrapper } from 'react-native-table-component';

import { AntDesign } from '@expo/vector-icons';

import styles from './CauHinhE.style'

import data from './data'

const CauHinhE = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Chemistry')}
                >
                    <AntDesign name="back" size={24} color="black" style={styles.icon}/>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Cấu Hình Electron</Text>
            </View>
            <FlatList
                data={data}
                renderItem={({item}) => {
                    return(
                        <ScrollView>
                            <View>
                                <Table borderStyle={{borderWidth:1, borderColor: '#c8e1ff'}}>
                                    <Row 
                                        data={item.header}
                                        style={{
                                            backgroundColor:'white',
                                        }} 
                                        height={40}
                                        flexArr={[0.7,1.5,0.75,1.5]}
                                        textStyle={{
                                            textAlign: 'center',
                                            fontSize: 16,
                                            fontWeight: 'bold'
                                        }}
                                    />

                                    <TableWrapper style={{flexDirection: 'row'}}>
                                        <Rows 
                                            data={item.cauhinhe}  
                                            flexArr={[0.7,1.5,0.75,1.5]} 
                                            style={{
                                                backgroundColor: 'white'
                                            }}
                                            textStyle={{
                                                fontSize: 14,
                                            }}
                                        />
                                    </TableWrapper>
                                </Table>
                            </View>
                        </ScrollView>
                    )
                }}
            />
        </SafeAreaView>
    )
}

export default CauHinhE