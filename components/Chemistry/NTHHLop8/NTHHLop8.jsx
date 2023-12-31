import { View, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'

import styles from './NTHHLop8.style'

const NTHHLop8 = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.body}>
                    <View styles={styles.table}>
                        <ScrollView horizontal={true}>
                            <View style={styles.tableContent}>
                                <View style={styles.tableHeader}>
                                    <Text style={styles.tableHeaderText1}>Số P</Text>
                                    <Text style={styles.tableHeaderText}>Tên nguyên tố</Text>
                                    <Text style={styles.tableHeaderText}>Kí hiệu</Text>
                                    <Text style={styles.tableHeaderText2}>Nguyên tử khối</Text>
                                    <Text style={styles.tableHeaderText}>Hóa trị</Text>
                                </View>

                                <View style={styles.tableBody}>
                                    <View style={styles.tableBodyText1}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}>1</Text>
                                    </View>
                                    <View style={styles.tableBodyText}>
                                        <Text style={{fontSize: 15, textAlign: 'center', color: '#65a361'}}>Hydrogen</Text>
                                    </View>
                                    <View style={styles.tableBodyText}>
                                        <Text style={{fontSize: 15, textAlign: 'center', color: '#65a361'}}>H</Text>
                                    </View>
                                    <View style={styles.tableBodyText2}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}>1</Text>
                                    </View>
                                    <View style={styles.tableBodyText}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}>I</Text>
                                    </View>
                                </View>

                                <View style={styles.tableBody}>
                                    <View style={styles.tableBodyText1}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}>2</Text>
                                    </View>
                                    <View style={styles.tableBodyText}>
                                        <Text style={{fontSize: 15, textAlign: 'center', color: '#65a361'}}>Helium</Text>
                                    </View>
                                    <View style={styles.tableBodyText}>
                                        <Text style={{fontSize: 15, textAlign: 'center', color: '#65a361'}}>He</Text>
                                    </View>
                                    <View style={styles.tableBodyText2}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}>4</Text>
                                    </View>
                                    <View style={styles.tableBodyText}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}></Text>
                                    </View>
                                </View>

                                <View style={styles.tableBody}>
                                    <View style={styles.tableBodyText1}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}>3</Text>
                                    </View>
                                    <View style={styles.tableBodyText}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}>Lithium</Text>
                                    </View>
                                    <View style={styles.tableBodyText}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}>Li</Text>
                                    </View>
                                    <View style={styles.tableBodyText2}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}>7</Text>
                                    </View>
                                    <View style={styles.tableBodyText}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}>I</Text>
                                    </View>
                                </View>

                                <View style={styles.tableBody}>
                                    <View style={styles.tableBodyText1}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}>4</Text>
                                    </View>
                                    <View style={styles.tableBodyText}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}>Beryllium</Text>
                                    </View>
                                    <View style={styles.tableBodyText}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}>Be</Text>
                                    </View>
                                    <View style={styles.tableBodyText2}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}>9</Text>
                                    </View>
                                    <View style={styles.tableBodyText}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}>II</Text>
                                    </View>
                                </View>

                                <View style={styles.tableBody}>
                                    <View style={styles.tableBodyText1}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}>5</Text>
                                    </View>
                                    <View style={styles.tableBodyText}>
                                        <Text style={{fontSize: 15, textAlign: 'center', color: '#65a361'}}>Boron</Text>
                                    </View>
                                    <View style={styles.tableBodyText}>
                                        <Text style={{fontSize: 15, textAlign: 'center', color: '#65a361'}}>B</Text>
                                    </View>
                                    <View style={styles.tableBodyText2}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}>11</Text>
                                    </View>
                                    <View style={styles.tableBodyText}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}>III</Text>
                                    </View>
                                </View>

                                <View style={styles.tableBody}>
                                    <View style={styles.tableBodyText1}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}>6</Text>
                                    </View>
                                    <View style={styles.tableBodyText}>
                                        <Text style={{fontSize: 15, textAlign: 'center', color: '#65a361'}}>Carbon</Text>
                                    </View>
                                    <View style={styles.tableBodyText}>
                                        <Text style={{fontSize: 15, textAlign: 'center', color: '#65a361'}}>C</Text>
                                    </View>
                                    <View style={styles.tableBodyText2}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}>12</Text>
                                    </View>
                                    <View style={styles.tableBodyText}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}>IV, II</Text>
                                    </View>
                                </View>

                                <View style={styles.tableBody}>
                                    <View style={styles.tableBodyText1}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}>7</Text>
                                    </View>
                                    <View style={styles.tableBodyText}>
                                        <Text style={{fontSize: 15, textAlign: 'center', color: '#65a361'}}>Nitrogen</Text>
                                    </View>
                                    <View style={styles.tableBodyText}>
                                        <Text style={{fontSize: 15, textAlign: 'center', color: '#65a361'}}>N</Text>
                                    </View>
                                    <View style={styles.tableBodyText2}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}>14</Text>
                                    </View>
                                    <View style={styles.tableBodyText}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}>III, II, IV, ...</Text>
                                    </View>
                                </View>

                                <View style={styles.tableBody}>
                                    <View style={styles.tableBodyText1}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}>8</Text>
                                    </View>
                                    <View style={styles.tableBodyText}>
                                        <Text style={{fontSize: 15, textAlign: 'center', color: '#65a361'}}>Oxygen</Text>
                                    </View>
                                    <View style={styles.tableBodyText}>
                                        <Text style={{fontSize: 15, textAlign: 'center', color: '#65a361'}}>O</Text>
                                    </View>
                                    <View style={styles.tableBodyText2}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}>16</Text>
                                    </View>
                                    <View style={styles.tableBodyText}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}>II</Text>
                                    </View>
                                </View>

                                <View style={styles.tableBody}>
                                    <View style={styles.tableBodyText1}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}>9</Text>
                                    </View>
                                    <View style={styles.tableBodyText}>
                                        <Text style={{fontSize: 15, textAlign: 'center', color: '#65a361'}}>Flourine</Text>
                                    </View>
                                    <View style={styles.tableBodyText}>
                                        <Text style={{fontSize: 15, textAlign: 'center', color: '#65a361'}}>F</Text>
                                    </View>
                                    <View style={styles.tableBodyText2}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}>19</Text>
                                    </View>
                                    <View style={styles.tableBodyText}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}>I</Text>
                                    </View>
                                </View>

                                <View style={styles.tableBody}>
                                    <View style={styles.tableBodyText1}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}>10</Text>
                                    </View>
                                    <View style={styles.tableBodyText}>
                                        <Text style={{fontSize: 15, textAlign: 'center', color: '#65a361'}}>Neon</Text>
                                    </View>
                                    <View style={styles.tableBodyText}>
                                        <Text style={{fontSize: 15, textAlign: 'center', color: '#65a361'}}>Ne</Text>
                                    </View>
                                    <View style={styles.tableBodyText2}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}>20</Text>
                                    </View>
                                    <View style={styles.tableBodyText}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}></Text>
                                    </View>
                                </View>

                                <View style={styles.tableBody}>
                                    <View style={styles.tableBodyText1}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}>11</Text>
                                    </View>
                                    <View style={styles.tableBodyText}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}>Sodium</Text>
                                    </View>
                                    <View style={styles.tableBodyText}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}>Na</Text>
                                    </View>
                                    <View style={styles.tableBodyText2}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}>23</Text>
                                    </View>
                                    <View style={styles.tableBodyText}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}>I</Text>
                                    </View>
                                </View>

                                <View style={styles.tableBody}>
                                    <View style={styles.tableBodyText1}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}>12</Text>
                                    </View>
                                    <View style={styles.tableBodyText}>
                                        <Text style={{fontSize: 15, textAlign: 'center', color: '#65a361'}}>Magnesium</Text>
                                    </View>
                                    <View style={styles.tableBodyText}>
                                        <Text style={{fontSize: 15, textAlign: 'center', color: '#65a361'}}>Mg</Text>
                                    </View>
                                    <View style={styles.tableBodyText2}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}>24</Text>
                                    </View>
                                    <View style={styles.tableBodyText}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}>II</Text>
                                    </View>
                                </View>

                                <View style={styles.tableBody}>
                                    <View style={styles.tableBodyText1}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}>13</Text>
                                    </View>
                                    <View style={styles.tableBodyText}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}>Aluminium</Text>
                                    </View>
                                    <View style={styles.tableBodyText}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}>Al</Text>
                                    </View>
                                    <View style={styles.tableBodyText2}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}>27</Text>
                                    </View>
                                    <View style={styles.tableBodyText}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}>III</Text>
                                    </View>
                                </View>

                                <View style={styles.tableBody}>
                                    <View style={styles.tableBodyText1}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}>14</Text>
                                    </View>
                                    <View style={styles.tableBodyText}>
                                        <Text style={{fontSize: 15, textAlign: 'center', color: '#65a361'}}>Silicon</Text>
                                    </View>
                                    <View style={styles.tableBodyText}>
                                        <Text style={{fontSize: 15, textAlign: 'center', color: '#65a361'}}>Si</Text>
                                    </View>
                                    <View style={styles.tableBodyText2}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}>28</Text>
                                    </View>
                                    <View style={styles.tableBodyText}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}>IV</Text>
                                    </View>
                                </View>

                                <View style={styles.tableBody}>
                                    <View style={styles.tableBodyText1}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}>15</Text>
                                    </View>
                                    <View style={styles.tableBodyText}>
                                        <Text style={{fontSize: 15, textAlign: 'center', color: '#65a361'}}>Phosphorus</Text>
                                    </View>
                                    <View style={styles.tableBodyText}>
                                        <Text style={{fontSize: 15, textAlign: 'center', color: '#65a361'}}>P</Text>
                                    </View>
                                    <View style={styles.tableBodyText2}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}>31</Text>
                                    </View>
                                    <View style={styles.tableBodyText}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}>III, V</Text>
                                    </View>
                                </View>

                                <View style={styles.tableBody}>
                                    <View style={styles.tableBodyText1}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}>16</Text>
                                    </View>
                                    <View style={styles.tableBodyText}>
                                        <Text style={{fontSize: 15, textAlign: 'center', color: '#65a361'}}>Sulfur</Text>
                                    </View>
                                    <View style={styles.tableBodyText}>
                                        <Text style={{fontSize: 15, textAlign: 'center', color: '#65a361'}}>S</Text>
                                    </View>
                                    <View style={styles.tableBodyText2}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}>32</Text>
                                    </View>
                                    <View style={styles.tableBodyText}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}>II, IV, VI</Text>
                                    </View>
                                </View>
                                
                                <View style={styles.tableBody}>
                                    <View style={styles.tableBodyText1}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}>17</Text>
                                    </View>
                                    <View style={styles.tableBodyText}>
                                        <Text style={{fontSize: 15, textAlign: 'center', color: '#65a361'}}>Chlorine</Text>
                                    </View>
                                    <View style={styles.tableBodyText}>
                                        <Text style={{fontSize: 15, textAlign: 'center', color: '#65a361'}}>Cl</Text>
                                    </View>
                                    <View style={styles.tableBodyText2}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}>35,5</Text>
                                    </View>
                                    <View style={styles.tableBodyText}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}>I, ...</Text>
                                    </View>
                                </View>

                                <View style={styles.tableBody}>
                                    <View style={styles.tableBodyText1}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}>18</Text>
                                    </View>
                                    <View style={styles.tableBodyText}>
                                        <Text style={{fontSize: 15, textAlign: 'center', color: '#65a361'}}>Argon</Text>
                                    </View>
                                    <View style={styles.tableBodyText}>
                                        <Text style={{fontSize: 15, textAlign: 'center', color: '#65a361'}}>Ar</Text>
                                    </View>
                                    <View style={styles.tableBodyText2}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}>39,9</Text>
                                    </View>
                                    <View style={styles.tableBodyText}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}></Text>
                                    </View>
                                </View>

                                <View style={styles.tableBody}>
                                    <View style={styles.tableBodyText1}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}>19</Text>
                                    </View>
                                    <View style={styles.tableBodyText}>
                                        <Text style={{fontSize: 15, textAlign: 'center', color: '#65a361'}}>Potassium</Text>
                                    </View>
                                    <View style={styles.tableBodyText}>
                                        <Text style={{fontSize: 15, textAlign: 'center', color: '#65a361'}}>K</Text>
                                    </View>
                                    <View style={styles.tableBodyText2}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}>39</Text>
                                    </View>
                                    <View style={styles.tableBodyText}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}>I</Text>
                                    </View>
                                </View>

                                <View style={styles.tableBody}>
                                    <View style={styles.tableBodyText1}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}>20</Text>
                                    </View>
                                    <View style={styles.tableBodyText}>
                                        <Text style={{fontSize: 15, textAlign: 'center', color: '#65a361'}}>Calcium</Text>
                                    </View>
                                    <View style={styles.tableBodyText}>
                                        <Text style={{fontSize: 15, textAlign: 'center', color: '#65a361'}}>Ca</Text>
                                    </View>
                                    <View style={styles.tableBodyText2}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}>40</Text>
                                    </View>
                                    <View style={styles.tableBodyText}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}>II</Text>
                                    </View>
                                </View>

                                <View style={styles.tableBody}>
                                    <View style={styles.tableBodyText1}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}>*</Text>
                                    </View>
                                    <View style={styles.tableBodyText}>
                                        <Text style={{fontSize: 15, textAlign: 'center', color: '#65a361'}}></Text>
                                    </View>
                                    <View style={styles.tableBodyText}>
                                        <Text style={{fontSize: 15, textAlign: 'center', color: '#65a361'}}></Text>
                                    </View>
                                    <View style={styles.tableBodyText2}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}></Text>
                                    </View>
                                    <View style={styles.tableBodyText}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}></Text>
                                    </View>
                                </View>

                                <View style={styles.tableBody}>
                                    <View style={styles.tableBodyText1}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}>*</Text>
                                    </View>
                                    <View style={styles.tableBodyText}>
                                        <Text style={{fontSize: 15, textAlign: 'center', color: '#65a361'}}></Text>
                                    </View>
                                    <View style={styles.tableBodyText}>
                                        <Text style={{fontSize: 15, textAlign: 'center', color: '#65a361'}}></Text>
                                    </View>
                                    <View style={styles.tableBodyText2}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}></Text>
                                    </View>
                                    <View style={styles.tableBodyText}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}></Text>
                                    </View>
                                </View>

                                <View style={styles.tableBody}>
                                    <View style={styles.tableBodyText1}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}>*</Text>
                                    </View>
                                    <View style={styles.tableBodyText}>
                                        <Text style={{fontSize: 15, textAlign: 'center', color: '#65a361'}}></Text>
                                    </View>
                                    <View style={styles.tableBodyText}>
                                        <Text style={{fontSize: 15, textAlign: 'center', color: '#65a361'}}></Text>
                                    </View>
                                    <View style={styles.tableBodyText2}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}></Text>
                                    </View>
                                    <View style={styles.tableBodyText}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}></Text>
                                    </View>
                                </View>
                                
                                <View style={styles.tableBody}>
                                    <View style={styles.tableBodyText1}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}>24</Text>
                                    </View>
                                    <View style={styles.tableBodyText}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}>Chromium</Text>
                                    </View>
                                    <View style={styles.tableBodyText}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}>Cr</Text>
                                    </View>
                                    <View style={styles.tableBodyText2}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}>52</Text>
                                    </View>
                                    <View style={styles.tableBodyText}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}>II, III, ...</Text>
                                    </View>
                                </View>

                                <View style={styles.tableBody}>
                                    <View style={styles.tableBodyText1}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}>25</Text>
                                    </View>
                                    <View style={styles.tableBodyText}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}>Manganese</Text>
                                    </View>
                                    <View style={styles.tableBodyText}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}>Mn</Text>
                                    </View>
                                    <View style={styles.tableBodyText2}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}>55</Text>
                                    </View>
                                    <View style={styles.tableBodyText}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}>II, IV, VII, ...</Text>
                                    </View>
                                </View>

                                <View style={styles.tableBody}>
                                    <View style={styles.tableBodyText1}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}>26</Text>
                                    </View>
                                    <View style={styles.tableBodyText}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}>Iron</Text>
                                    </View>
                                    <View style={styles.tableBodyText}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}>Fe</Text>
                                    </View>
                                    <View style={styles.tableBodyText2}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}>56</Text>
                                    </View>
                                    <View style={styles.tableBodyText}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}>II, III</Text>
                                    </View>
                                </View>

                                <View style={styles.tableBody}>
                                    <View style={styles.tableBodyText1}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}>29</Text>
                                    </View>
                                    <View style={styles.tableBodyText}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}>Copper</Text>
                                    </View>
                                    <View style={styles.tableBodyText}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}>Cu</Text>
                                    </View>
                                    <View style={styles.tableBodyText2}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}>64</Text>
                                    </View>
                                    <View style={styles.tableBodyText}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}>II</Text>
                                    </View>
                                </View>

                                <View style={styles.tableBody}>
                                    <View style={styles.tableBodyText1}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}>30</Text>
                                    </View>
                                    <View style={styles.tableBodyText}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}>Zinc</Text>
                                    </View>
                                    <View style={styles.tableBodyText}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}>Zn</Text>
                                    </View>
                                    <View style={styles.tableBodyText2}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}>65</Text>
                                    </View>
                                    <View style={styles.tableBodyText}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}>II</Text>
                                    </View>
                                </View>

                                <View style={styles.tableBody}>
                                    <View style={styles.tableBodyText1}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}>35</Text>
                                    </View>
                                    <View style={styles.tableBodyText}>
                                        <Text style={{fontSize: 15, textAlign: 'center', color: '#65a361'}}>Bromine</Text>
                                    </View>
                                    <View style={styles.tableBodyText}>
                                        <Text style={{fontSize: 15, textAlign: 'center', color: '#65a361'}}>Br</Text>
                                    </View>
                                    <View style={styles.tableBodyText2}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}>80</Text>
                                    </View>
                                    <View style={styles.tableBodyText}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}>I, ...</Text>
                                    </View>
                                </View>

                                <View style={styles.tableBody}>
                                    <View style={styles.tableBodyText1}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}>47</Text>
                                    </View>
                                    <View style={styles.tableBodyText}>
                                        <Text style={{fontSize: 15, textAlign: 'center', color: '#65a361'}}>Silver</Text>
                                    </View>
                                    <View style={styles.tableBodyText}>
                                        <Text style={{fontSize: 15, textAlign: 'center', color: '#65a361'}}>Ag</Text>
                                    </View>
                                    <View style={styles.tableBodyText2}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}>108</Text>
                                    </View>
                                    <View style={styles.tableBodyText}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}>I</Text>
                                    </View>
                                </View>

                                <View style={styles.tableBody}>
                                    <View style={styles.tableBodyText1}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}>56</Text>
                                    </View>
                                    <View style={styles.tableBodyText}>
                                        <Text style={{fontSize: 15, textAlign: 'center', color: '#65a361'}}>Barium</Text>
                                    </View>
                                    <View style={styles.tableBodyText}>
                                        <Text style={{fontSize: 15, textAlign: 'center', color: '#65a361'}}>Ba</Text>
                                    </View>
                                    <View style={styles.tableBodyText2}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}>137</Text>
                                    </View>
                                    <View style={styles.tableBodyText}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}>II</Text>
                                    </View>
                                </View>

                                <View style={styles.tableBody}>
                                    <View style={styles.tableBodyText1}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}>80</Text>
                                    </View>
                                    <View style={styles.tableBodyText}>
                                        <Text style={{fontSize: 15, textAlign: 'center', color: '#65a361'}}>Mercury</Text>
                                    </View>
                                    <View style={styles.tableBodyText}>
                                        <Text style={{fontSize: 15, textAlign: 'center', color: '#65a361'}}>Hg</Text>
                                    </View>
                                    <View style={styles.tableBodyText2}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}>201</Text>
                                    </View>
                                    <View style={styles.tableBodyText}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}>I, II</Text>
                                    </View>
                                </View>

                                <View style={styles.tableBody}>
                                    <View style={styles.tableBodyText1}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}>82</Text>
                                    </View>
                                    <View style={styles.tableBodyText}>
                                        <Text style={{fontSize: 15, textAlign: 'center', color: '#65a361'}}>Lead</Text>
                                    </View>
                                    <View style={styles.tableBodyText}>
                                        <Text style={{fontSize: 15, textAlign: 'center', color: '#65a361'}}>Pb</Text>
                                    </View>
                                    <View style={styles.tableBodyText2}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}>207</Text>
                                    </View>
                                    <View style={styles.tableBodyText}>
                                        <Text style={{fontSize: 15, textAlign: 'center'}}>II, IV</Text>
                                    </View>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default NTHHLop8