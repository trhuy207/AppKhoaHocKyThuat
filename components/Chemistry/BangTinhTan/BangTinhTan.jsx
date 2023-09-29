import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

import { AntDesign } from '@expo/vector-icons';

import styles from './BangTinhTan.style'

const BangTinhTan = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Chemistry')}
                >
                    <AntDesign name="back" size={24} color="black" style={styles.icon}/>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Bảng Tính Tan</Text>
            </View>

            <ScrollView>
                <View style={styles.body}>
                    <ScrollView horizontal={true}>
                        <View style={styles.chuThich}>
                            <View styles={styles.tanNhieu}>
                                <Text style={styles.tanNhieuText}>T = Tan nhiều</Text>
                            </View>
                            <View styles={styles.itTan}>
                                <Text style={styles.itTanText}>I = Ít tan</Text>
                            </View>
                            <View styles={styles.khongTan}>
                                <Text style={styles.khongTanText}>K = Không tan</Text>
                            </View>
                        </View>
                    </ScrollView>
                    
                    <View style={styles.bangTinhTan}>
                        <View style={styles.table}>
                            <View style={styles.tableBodyColumn}>
                                <Text style={styles.tableBodyText1}></Text>
                                <Text style={styles.tableBodyText}>F-</Text>
                                <Text style={styles.tableBodyText}>Cl-</Text>
                                <Text style={styles.tableBodyText}>Br-</Text>
                                <Text style={styles.tableBodyText}>I-</Text>
                                <Text style={styles.tableBodyText}>S2-</Text>
                                <Text style={styles.tableBodyText}>ClO3 -</Text>
                                <Text style={styles.tableBodyText}>CO3 2-</Text>
                                <Text style={styles.tableBodyText}>SO3 2-</Text>
                                <Text style={styles.tableBodyText}>SO4 2-</Text>
                                <Text style={styles.tableBodyText}>NO2 -</Text>
                                <Text style={styles.tableBodyText}>NO3 -</Text>
                                <Text style={styles.tableBodyText}>PO4 3-</Text>
                                <Text style={styles.tableBodyText}>OH-</Text>
                            </View>
                            <ScrollView horizontal={true}>
                                <View style={styles.tableContent}>
                                    <View style={styles.talbeHeader}>
                                        <Text style={styles.tableHeaderText}>H+</Text>
                                        <Text style={styles.tableHeaderText}>NH4 +</Text>
                                        <Text style={styles.tableHeaderText}>Li+</Text>
                                        <Text style={styles.tableHeaderText}>Na+</Text>
                                        <Text style={styles.tableHeaderText}>K+</Text>
                                        <Text style={styles.tableHeaderText}>Mg2+</Text>
                                        <Text style={styles.tableHeaderText}>Ca2+</Text>
                                        <Text style={styles.tableHeaderText}>Ba2+</Text>
                                        <Text style={styles.tableHeaderText}>Zn2+</Text>
                                        <Text style={styles.tableHeaderText}>Fe2+</Text>
                                        <Text style={styles.tableHeaderText}>Fe3+</Text>
                                        <Text style={styles.tableHeaderText}>Cu2+</Text>
                                        <Text style={styles.tableHeaderText}>Ag+</Text>
                                        <Text style={styles.tableHeaderText}>Al3+</Text>
                                        <Text style={styles.tableHeaderText}>Pb2+</Text>
                                    </View>

                                    <View style={styles.tableBody}>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#577e26'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                I
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#b24c38'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                K
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#b24c38'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                K
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#577e26'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                I
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#577e26'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                I
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#577e26'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                I
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#577e26'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                I
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                    </View>

                                    <View style={styles.tableBody}>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#b24c38'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                K
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#b24c38'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                K
                                            </Text>
                                        </View>
                                    </View>

                                    <View style={styles.tableBody}>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#b24c38'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                K
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#577e26'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                I
                                            </Text>
                                        </View>
                                    </View>

                                    <View style={styles.tableBody}>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#fff'}]}>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#fff'}]}>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#fff'}]}>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#b24c38'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                K
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#b24c38'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                K
                                            </Text>
                                        </View>
                                    </View>

                                    <View style={styles.tableBody}>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#fff'}]}>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#577e26'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                I
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#577e26'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                I
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#b24c38'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                K
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#b24c38'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                K
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#b24c38'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                K
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#fff'}]}>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                    </View>

                                    <View style={styles.tableBody}>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#fff'}]}>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#fff'}]}>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#fff'}]}>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                    </View>

                                    <View style={styles.tableBody}>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#b24c38'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                K
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#b24c38'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                K
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#b24c38'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                K
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#b24c38'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                K
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#b24c38'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                K
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#fff'}]}>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#b24c38'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                K
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#b24c38'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                K
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#fff'}]}>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#b24c38'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                K
                                            </Text>
                                        </View>
                                    </View>

                                    <View style={styles.tableBody}>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#b24c38'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                K
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#b24c38'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                K
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#b24c38'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                K
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#fff'}]}>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#fff'}]}>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#fff'}]}>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#b24c38'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                K
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#fff'}]}>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#b24c38'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                K
                                            </Text>
                                        </View>
                                    </View>

                                    <View style={styles.tableBody}>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#577e26'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                I
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#b24c38'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                K
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#577e26'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                I
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#b24c38'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                K
                                            </Text>
                                        </View>
                                    </View>

                                    <View style={styles.tableBody}>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#fff'}]}>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#fff'}]}>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#fff'}]}>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#fff'}]}>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#b24c38'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                K
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#fff'}]}>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                    </View>

                                    <View style={styles.tableBody}>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                    </View>

                                    <View style={styles.tableBody}>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#b24c38'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                K
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#b24c38'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                K
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#b24c38'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                K
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#b24c38'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                K
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#b24c38'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                K
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#b24c38'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                K
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#b24c38'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                K
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#b24c38'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                K
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#b24c38'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                K
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#b24c38'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                K
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#b24c38'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                K
                                            </Text>
                                        </View>
                                    </View>

                                    <View style={styles.tableBody}>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#fff'}]}>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#fff'}]}>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#b24c38'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                K
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#577e26'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                I
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#324579'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                T
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#b24c38'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                K
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#b24c38'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                K
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#b24c38'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                K
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#b24c38'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                K
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#577e26'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                I
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#b24c38'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                K
                                            </Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#b24c38'}]}>
                                            <Text 
                                                style={{
                                                    fontSize: 15, 
                                                    textAlign: 'center', 
                                                    color:'#fff'
                                                }}
                                            >
                                                K
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            </ScrollView>
                        </View>
                        
                        <View style={styles.tho}>
                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Thơ về bảng tính tan{'\n'}</Text>
                            <Text style={{fontSize: 15}}>
                                Loại muối tan tất cả
                                {'\n'}là muối ni-tơ-rat
                                {'\n'}Và muối axetat
                                {'\n'}Bất kể kim loại nào.
                                {'\n'}{'\n'}Những muối hầu hết tan
                                {'\n'}Là clorua, sunfat
                                {'\n'}Trừ bạc, chì clorua
                                {'\n'}Bari, chì sunfat.
                                {'\n'}{'\n'}Những muối không hòa tan
                                {'\n'}Cacbonat, photphat
                                {'\n'}Sunfua và sunfit
                                {'\n'}Trừ kiềm, amoni.
                            </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default BangTinhTan