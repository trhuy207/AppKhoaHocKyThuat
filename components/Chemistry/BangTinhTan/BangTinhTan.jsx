import { View, Text, SafeAreaView, ScrollView} from 'react-native'
import React from 'react'

import styles from './BangTinhTan.style'

const BangTinhTan = () => {
    return (
        <SafeAreaView style={styles.container}>
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
                                <View style={styles.tableBodyText3}>
                                    <Text style={styles.cthh}>F</Text>
                                    <View style={styles.grp}>
                                        <Text style={styles.subTop}>-</Text>
                                        <Text style={styles.sub}></Text>
                                    </View>
                                </View>
                                <View style={styles.tableBodyText3}>
                                    <Text style={styles.cthh}>Cl</Text>
                                    <View style={styles.grp}>
                                        <Text style={styles.subTop}>-</Text>
                                        <Text style={styles.sub}></Text>
                                    </View>
                                </View>
                                <View style={styles.tableBodyText3}>
                                    <Text style={styles.cthh}>Br</Text>
                                    <View style={styles.grp}>
                                        <Text style={styles.subTop}>-</Text>
                                        <Text style={styles.sub}></Text>
                                    </View>
                                </View>
                                <View style={styles.tableBodyText3}>
                                    <Text style={styles.cthh}>I</Text>
                                    <View style={styles.grp}>
                                        <Text style={styles.subTop}>-</Text>
                                        <Text style={styles.sub}></Text>
                                    </View>
                                </View>
                                <View style={styles.tableBodyText3}>
                                    <Text style={styles.cthh}>S</Text>
                                    <View style={styles.grp}>
                                        <Text style={styles.subTop}>2-</Text>
                                        <Text style={styles.sub}></Text>
                                    </View>
                                </View>
                                <View style={styles.tableBodyText3}>
                                    <Text style={styles.cthh}>ClO</Text>
                                    <View style={styles.grp}>
                                        <Text style={styles.subTop}>-</Text>
                                        <Text style={styles.sub}>3</Text>
                                    </View>
                                </View>
                                <View style={styles.tableBodyText3}>
                                    <Text style={styles.cthh}>CO</Text>
                                    <View style={styles.grp}>
                                        <Text style={styles.subTop}>2-</Text>
                                        <Text style={styles.sub}>3</Text>
                                    </View>
                                </View>
                                <View style={styles.tableBodyText3}>
                                    <Text style={styles.cthh}>SO</Text>
                                    <View style={styles.grp}>
                                        <Text style={styles.subTop}>2-</Text>
                                        <Text style={styles.sub}>3</Text>
                                    </View>
                                </View>
                                <View style={styles.tableBodyText3}>
                                    <Text style={styles.cthh}>SO</Text>
                                    <View style={styles.grp}>
                                        <Text style={styles.subTop}>2-</Text>
                                        <Text style={styles.sub}>4</Text>
                                    </View>
                                </View>
                                <View style={styles.tableBodyText3}>
                                    <Text style={styles.cthh}>NO</Text>
                                    <View style={styles.grp}>
                                        <Text style={styles.subTop}>-</Text>
                                        <Text style={styles.sub}>2</Text>
                                    </View>
                                </View>
                                <View style={styles.tableBodyText3}>
                                    <Text style={styles.cthh}>NO</Text>
                                    <View style={styles.grp}>
                                        <Text style={styles.subTop}>-</Text>
                                        <Text style={styles.sub}>3</Text>
                                    </View>
                                </View>
                                <View style={styles.tableBodyText3}>
                                    <Text style={styles.cthh}>PO</Text>
                                    <View style={styles.grp}>
                                        <Text style={styles.subTop}>3-</Text>
                                        <Text style={styles.sub}>4</Text>
                                    </View>
                                </View>
                                <View style={styles.tableBodyText3}>
                                    <Text style={styles.cthh}>OH</Text>
                                    <View style={styles.grp}>
                                        <Text style={styles.subTop}>-</Text>
                                        <Text style={styles.sub}></Text>
                                    </View>
                                </View>
                            </View>
                            <ScrollView horizontal={true}>
                                <View style={styles.tableContent}>
                                    <View style={styles.tableHeader}>
                                        <View style={styles.tableHeaderText3}>
                                            <Text style={styles.cthh}>H</Text>
                                            <View style={styles.grp}>
                                                <Text style={styles.subTop}>+</Text>
                                                <Text style={styles.sub}></Text>
                                            </View>
                                        </View>
                                        <View style={styles.tableHeaderText3}>
                                            <Text style={styles.cthh}>NH</Text>
                                            <View style={styles.grp}>
                                                <Text style={styles.subTop}>+</Text>
                                                <Text style={styles.sub}>4</Text>
                                            </View>
                                        </View>
                                        <View style={styles.tableHeaderText3}>
                                            <Text style={styles.cthh}>Li</Text>
                                            <View style={styles.grp}>
                                                <Text style={styles.subTop}>+</Text>
                                                <Text style={styles.sub}></Text>
                                            </View>
                                        </View>
                                        <View style={styles.tableHeaderText3}>
                                            <Text style={styles.cthh}>Na</Text>
                                            <View style={styles.grp}>
                                                <Text style={styles.subTop}>+</Text>
                                                <Text style={styles.sub}></Text>
                                            </View>
                                        </View>
                                        <View style={styles.tableHeaderText3}>
                                            <Text style={styles.cthh}>K</Text>
                                            <View style={styles.grp}>
                                                <Text style={styles.subTop}>+</Text>
                                                <Text style={styles.sub}></Text>
                                            </View>
                                        </View>
                                        <View style={styles.tableHeaderText3}>
                                            <Text style={styles.cthh}>Mg</Text>
                                            <View style={styles.grp}>
                                                <Text style={styles.subTop}>2+</Text>
                                                <Text style={styles.sub}></Text>
                                            </View>
                                        </View>
                                        <View style={styles.tableHeaderText3}>
                                            <Text style={styles.cthh}>Ca</Text>
                                            <View style={styles.grp}>
                                                <Text style={styles.subTop}>2+</Text>
                                                <Text style={styles.sub}></Text>
                                            </View>
                                        </View>
                                        <View style={styles.tableHeaderText3}>
                                            <Text style={styles.cthh}>Ba</Text>
                                            <View style={styles.grp}>
                                                <Text style={styles.subTop}>2+</Text>
                                                <Text style={styles.sub}></Text>
                                            </View>
                                        </View>
                                        <View style={styles.tableHeaderText3}>
                                            <Text style={styles.cthh}>Zn</Text>
                                            <View style={styles.grp}>
                                                <Text style={styles.subTop}>2+</Text>
                                                <Text style={styles.sub}></Text>
                                            </View>
                                        </View>
                                        <View style={styles.tableHeaderText3}>
                                            <Text style={styles.cthh}>Fe</Text>
                                            <View style={styles.grp}>
                                                <Text style={styles.subTop}>2+</Text>
                                                <Text style={styles.sub}></Text>
                                            </View>
                                        </View>
                                        <View style={styles.tableHeaderText3}>
                                            <Text style={styles.cthh}>Fe</Text>
                                            <View style={styles.grp}>
                                                <Text style={styles.subTop}>3+</Text>
                                                <Text style={styles.sub}></Text>
                                            </View>
                                        </View>
                                        <View style={styles.tableHeaderText3}>
                                            <Text style={styles.cthh}>Cu</Text>
                                            <View style={styles.grp}>
                                                <Text style={styles.subTop}>2+</Text>
                                                <Text style={styles.sub}></Text>
                                            </View>
                                        </View>
                                        <View style={styles.tableHeaderText3}>
                                            <Text style={styles.cthh}>Ag</Text>
                                            <View style={styles.grp}>
                                                <Text style={styles.subTop}>+</Text>
                                                <Text style={styles.sub}></Text>
                                            </View>
                                        </View>
                                        <View style={styles.tableHeaderText3}>
                                            <Text style={styles.cthh}>Al</Text>
                                            <View style={styles.grp}>
                                                <Text style={styles.subTop}>3+</Text>
                                                <Text style={styles.sub}></Text>
                                            </View>
                                        </View>
                                        <View style={styles.tableHeaderText3}>
                                            <Text style={styles.cthh}>Pb</Text>
                                            <View style={styles.grp}>
                                                <Text style={styles.subTop}>2+</Text>
                                                <Text style={styles.sub}></Text>
                                            </View>
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