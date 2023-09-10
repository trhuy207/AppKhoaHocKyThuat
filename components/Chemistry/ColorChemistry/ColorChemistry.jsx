import { View, Text, TouchableOpacity, ScrollView, FlatList, SafeAreaView } from 'react-native'
import React from 'react'

import { Table, Row, Rows, TableWrapper } from 'react-native-table-component';

import { AntDesign } from '@expo/vector-icons';

import data from './data'

import styles from './ColorChemistry.style'

const ColorChemistry = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Chemistry')}
                >
                    <AntDesign name="back" size={24} color="black" style={styles.icon}/>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Màu Một Số Chất Phổ Biến</Text>
            </View>
            
            <FlatList 
                data={data}
                renderItem={({item}) => {
                    return(
                        <ScrollView>
                            <View>
                                <Table borderStyle={{borderWidth: 1, borderColor: '#c8e1ff'}}>
                                    <Row 
                                        data={item.header}
                                        style={{
                                            backgroundColor:'white',
                                        }} 
                                        height={40}
                                        flexArr={[0.75,1,1]}
                                        textStyle={{
                                            textAlign: 'center',
                                            fontSize: 16,
                                            fontWeight: 'bold'
                                        }}
                                    />

                                    <TableWrapper style={{flexDirection: 'row'}}>
                                        <Rows 
                                            data={item.mauSac}  
                                            flexArr={[0.75,1,1]} 
                                            style={{
                                                backgroundColor: 'white',
                                                height: 'auto'
                                            }}
                                            textStyle={{
                                                fontSize: 14,
                                                padding: 10
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

export default ColorChemistry