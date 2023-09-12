import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

import { AntDesign } from '@expo/vector-icons';

import styles from './BangTuanHoan.style'

const BangTuanHoan = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Chemistry')}
                >
                    <AntDesign name="back" size={24} color="black" style={styles.icon}/>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Bảng Tuần Hoàn</Text>
            </View>

            <ScrollView horizontal={true}>
                <View style={styles.body}>
                    <View style={styles.bangTuanHoan}>
                        <View style={styles.table}>
                            <View style={styles.tableHeader}>
                                <Text style={styles.tableHeaderText}>Nhóm /{'\n'}Chu kỳ</Text>
                                <Text style={styles.tableHeaderText}>IA</Text>
                                <Text style={styles.tableHeaderText}>IIA</Text>
                                <Text style={styles.tableHeaderText}>IIIB</Text>
                                <Text style={styles.tableHeaderText}>IVB</Text>
                                <Text style={styles.tableHeaderText}>VB</Text>
                                <Text style={styles.tableHeaderText}>VIB</Text>
                                <Text style={styles.tableHeaderText}>VIIB</Text>
                                <Text style={styles.tableHeaderText1}>VIIIB</Text>
                                <Text style={styles.tableHeaderText1}></Text>
                                <Text style={styles.tableHeaderText1}></Text>
                                <Text style={styles.tableHeaderText}>IB</Text>
                                <Text style={styles.tableHeaderText}>IIB</Text>
                                <Text style={styles.tableHeaderText}>IIIA</Text>
                                <Text style={styles.tableHeaderText}>IVA</Text>
                                <Text style={styles.tableHeaderText}>VA</Text>
                                <Text style={styles.tableHeaderText}>VIA</Text>
                                <Text style={styles.tableHeaderText}>VIIA</Text>
                                <Text style={styles.tableHeaderText}>VIIIA</Text>
                            </View>
                            {/* Chu kỳ 1 */}
                            <View style={styles.tableBody}>
                                <Text style={styles.tableBodyText}>1</Text>
                                <Text style={[styles.tableBodyText, {backgroundColor: '#ed9e9a'}]}>H</Text>
                                <Text style={styles.tableBodyText}></Text>
                                <Text style={styles.tableBodyText}></Text>
                                <Text style={styles.tableBodyText}></Text>
                                <Text style={styles.tableBodyText}></Text>
                                <Text style={styles.tableBodyText}></Text>
                                <Text style={styles.tableBodyText}></Text>
                                <Text style={styles.tableBodyText}></Text>
                                <Text style={styles.tableBodyText}></Text>
                                <Text style={styles.tableBodyText}></Text>
                                <Text style={styles.tableBodyText}></Text>
                                <Text style={styles.tableBodyText}></Text>
                                <Text style={styles.tableBodyText}></Text>
                                <Text style={styles.tableBodyText}></Text>
                                <Text style={styles.tableBodyText}></Text>
                                <Text style={styles.tableBodyText}></Text>
                                <Text style={styles.tableBodyText}></Text>
                                <Text style={[styles.tableBodyText, {backgroundColor: '#ed9e9a'}]}>He</Text>
                            </View>
                            {/* Chu kỳ 2 */}
                            <View style={styles.tableBody}>
                                <Text style={styles.tableBodyText}>2</Text>
                                <Text style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>Li</Text>
                                <Text style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>Be</Text>
                                <Text style={styles.tableBodyText}></Text>
                                <Text style={styles.tableBodyText}></Text>
                                <Text style={styles.tableBodyText}></Text>
                                <Text style={styles.tableBodyText}></Text>
                                <Text style={styles.tableBodyText}></Text>
                                <Text style={styles.tableBodyText}></Text>
                                <Text style={styles.tableBodyText}></Text>
                                <Text style={styles.tableBodyText}></Text>
                                <Text style={styles.tableBodyText}></Text>
                                <Text style={styles.tableBodyText}></Text>
                                <Text style={[styles.tableBodyText, {backgroundColor: '#a7c797'}]}>B</Text>
                                <Text style={[styles.tableBodyText, {backgroundColor: '#ed9e9a'}]}>C</Text>
                                <Text style={[styles.tableBodyText, {backgroundColor: '#ed9e9a'}]}>N</Text>
                                <Text style={[styles.tableBodyText, {backgroundColor: '#ed9e9a'}]}>O</Text>
                                <Text style={[styles.tableBodyText, {backgroundColor: '#ed9e9a'}]}>F</Text>
                                <Text style={[styles.tableBodyText, {backgroundColor: '#ed9e9a'}]}>Ne</Text>
                            </View>
                            {/* Chu kỳ 3 */}
                            <View style={styles.tableBody}>
                                <Text style={styles.tableBodyText}>3</Text>
                                <Text style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>Na</Text>
                                <Text style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>Mg</Text>
                                <Text style={styles.tableBodyText}></Text>
                                <Text style={styles.tableBodyText}></Text>
                                <Text style={styles.tableBodyText}></Text>
                                <Text style={styles.tableBodyText}></Text>
                                <Text style={styles.tableBodyText}></Text>
                                <Text style={styles.tableBodyText}></Text>
                                <Text style={styles.tableBodyText}></Text>
                                <Text style={styles.tableBodyText}></Text>
                                <Text style={styles.tableBodyText}></Text>
                                <Text style={styles.tableBodyText}></Text>
                                <Text style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>Al</Text>
                                <Text style={[styles.tableBodyText, {backgroundColor: '#a7c797'}]}>Si</Text>
                                <Text style={[styles.tableBodyText, {backgroundColor: '#ed9e9a'}]}>P</Text>
                                <Text style={[styles.tableBodyText, {backgroundColor: '#ed9e9a'}]}>S</Text>
                                <Text style={[styles.tableBodyText, {backgroundColor: '#ed9e9a'}]}>Cl</Text>
                                <Text style={[styles.tableBodyText, {backgroundColor: '#ed9e9a'}]}>Ar</Text>
                            </View>
                            {/* Chu kỳ 4 */}
                            <View style={styles.tableBody}>
                                <Text style={styles.tableBodyText}>4</Text>
                                <Text style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>K</Text>
                                <Text style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>Ca</Text>
                                <Text style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>Sc</Text>
                                <Text style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>Ti</Text>
                                <Text style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>V</Text>
                                <Text style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>Cr</Text>
                                <Text style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>Mn</Text>
                                <Text style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>Fe</Text>
                                <Text style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>Co</Text>
                                <Text style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>Ni</Text>
                                <Text style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>Cu</Text>
                                <Text style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>Zn</Text>
                                <Text style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>Ga</Text>
                                <Text style={[styles.tableBodyText, {backgroundColor: '#a7c797'}]}>Ge</Text>
                                <Text style={[styles.tableBodyText, {backgroundColor: '#a7c797'}]}>As</Text>
                                <Text style={[styles.tableBodyText, {backgroundColor: '#ed9e9a'}]}>Se</Text>
                                <Text style={[styles.tableBodyText, {backgroundColor: '#ed9e9a'}]}>Br</Text>
                                <Text style={[styles.tableBodyText, {backgroundColor: '#ed9e9a'}]}>Kr</Text>
                            </View>
                            {/* Chu kỳ 5 */}
                            <View style={styles.tableBody}>
                                <Text style={styles.tableBodyText}>5</Text>
                                <Text style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>Rb</Text>
                                <Text style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>Sr</Text>
                                <Text style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>Y</Text>
                                <Text style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>Zr</Text>
                                <Text style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>Nb</Text>
                                <Text style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>Mo</Text>
                                <Text style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>Tc</Text>
                                <Text style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>Ru</Text>
                                <Text style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>Rh</Text>
                                <Text style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>Pd</Text>
                                <Text style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>Ag</Text>
                                <Text style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>Cd</Text>
                                <Text style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>In</Text>
                                <Text style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>Sn</Text>
                                <Text style={[styles.tableBodyText, {backgroundColor: '#a7c797'}]}>Sb</Text>
                                <Text style={[styles.tableBodyText, {backgroundColor: '#a7c797'}]}>Te</Text>
                                <Text style={[styles.tableBodyText, {backgroundColor: '#ed9e9a'}]}>I</Text>
                                <Text style={[styles.tableBodyText, {backgroundColor: '#ed9e9a'}]}>Xe</Text>
                            </View>
                            {/* Chu kỳ 6 */}
                            <View style={styles.tableBody}>
                                <Text style={styles.tableBodyText}>6</Text>
                                <Text style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>Cs</Text>
                                <Text style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>Ba</Text>
                                <Text style={styles.tableBodyText}></Text>
                                <Text style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>Hf</Text>
                                <Text style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>Ta</Text>
                                <Text style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>W</Text>
                                <Text style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>Re</Text>
                                <Text style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>Os</Text>
                                <Text style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>Ir</Text>
                                <Text style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>Pt</Text>
                                <Text style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>Au</Text>
                                <Text style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>Hg</Text>
                                <Text style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>Tl</Text>
                                <Text style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>Pb</Text>
                                <Text style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>Bi</Text>
                                <Text style={[styles.tableBodyText, {backgroundColor: '#a7c797'}]}>Po</Text>
                                <Text style={styles.tableBodyText}>At</Text>
                                <Text style={[styles.tableBodyText, {backgroundColor: '#ed9e9a'}]}>Rn</Text>
                            </View>
                            {/* Chu kỳ 7 */}
                            <View style={styles.tableBody}>
                                <Text style={styles.tableBodyText}>7</Text>
                                <Text style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>Fr</Text>
                                <Text style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>Ra</Text>
                                <Text style={styles.tableBodyText}></Text>
                                <Text style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>Rf</Text>
                                <Text style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>Db</Text>
                                <Text style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>Sg</Text>
                                <Text style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>Bh</Text>
                                <Text style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>Hs</Text>
                                <Text style={styles.tableBodyText}>Mt</Text>
                                <Text style={styles.tableBodyText}>Ds</Text>
                                <Text style={styles.tableBodyText}>Rg</Text>
                                <Text style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>Cn</Text>
                                <Text style={styles.tableBodyText}>Nh</Text>
                                <Text style={styles.tableBodyText}>Fl</Text>
                                <Text style={styles.tableBodyText}>Mc</Text>
                                <Text style={styles.tableBodyText}>Lv</Text>
                                <Text style={styles.tableBodyText}>Ts</Text>
                                <Text style={styles.tableBodyText}>Og</Text>
                            </View>
                            {/* Chất khác*/}
                            <View style={styles.tableBodyKhac}>
                                <Text style={styles.tableBodyTextKhac}></Text>
                                <Text style={styles.tableBodyTextKhac}></Text>
                                <Text style={styles.tableBodyTextKhac}></Text>
                                <Text style={styles.tableBodyTextKhac}></Text>
                                <Text style={[styles.tableBodyTextKhac, {backgroundColor: '#afc0de'}]}>La</Text>
                                <Text style={[styles.tableBodyTextKhac, {backgroundColor: '#afc0de'}]}>Ce</Text>
                                <Text style={[styles.tableBodyTextKhac, {backgroundColor: '#afc0de'}]}>Pr</Text>
                                <Text style={[styles.tableBodyTextKhac, {backgroundColor: '#afc0de'}]}>Nd</Text>
                                <Text style={[styles.tableBodyTextKhac, {backgroundColor: '#afc0de'}]}>Pm</Text>
                                <Text style={[styles.tableBodyTextKhac, {backgroundColor: '#afc0de'}]}>Sm</Text>
                                <Text style={[styles.tableBodyTextKhac, {backgroundColor: '#afc0de'}]}>Eu</Text>
                                <Text style={[styles.tableBodyTextKhac, {backgroundColor: '#afc0de'}]}>Gd</Text>
                                <Text style={[styles.tableBodyTextKhac, {backgroundColor: '#afc0de'}]}>Tb</Text>
                                <Text style={[styles.tableBodyTextKhac, {backgroundColor: '#afc0de'}]}>Dy</Text>
                                <Text style={[styles.tableBodyTextKhac, {backgroundColor: '#afc0de'}]}>Ho</Text>
                                <Text style={[styles.tableBodyTextKhac, {backgroundColor: '#afc0de'}]}>Er</Text>
                                <Text style={[styles.tableBodyTextKhac, {backgroundColor: '#afc0de'}]}>Tm</Text>
                                <Text style={[styles.tableBodyTextKhac, {backgroundColor: '#afc0de'}]}>Yb</Text>
                                <Text style={[styles.tableBodyTextKhac, {backgroundColor: '#afc0de'}]}>Lu</Text>
                            </View>
                            {/* Chất khác*/}
                            <View style={styles.tableBody}>
                                <Text style={styles.tableBodyText}></Text>
                                <Text style={styles.tableBodyText}></Text>
                                <Text style={styles.tableBodyText}></Text>
                                <Text style={styles.tableBodyText}></Text>
                                <Text style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>Ac</Text>
                                <Text style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>Th</Text>
                                <Text style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>Pa</Text>
                                <Text style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>U</Text>
                                <Text style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>Np</Text>
                                <Text style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>Pu</Text>
                                <Text style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>Am</Text>
                                <Text style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>Cm</Text>
                                <Text style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>Bk</Text>
                                <Text style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>Cf</Text>
                                <Text style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>Es</Text>
                                <Text style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>Fm</Text>
                                <Text style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>Md</Text>
                                <Text style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>No</Text>
                                <Text style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>Lr</Text>
                            </View>
                        </View>        
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default BangTuanHoan