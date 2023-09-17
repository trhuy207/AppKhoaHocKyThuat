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

            <ScrollView>
                <View style={styles.body}>
                    <View style={styles.bangTuanHoan}>
                        <View style={styles.table}>
                            <View style={styles.tableBodyColumn}>
                                <Text style={styles.tableColumnHeader}>Nhóm /{'\n'}Chu kỳ</Text>
                                <Text style={styles.tableColumnText}>1</Text>
                                <Text style={styles.tableColumnText}>2</Text>
                                <Text style={styles.tableColumnText}>3</Text>
                                <Text style={styles.tableColumnText}>4</Text>
                                <Text style={styles.tableColumnText}>5</Text>
                                <Text style={styles.tableColumnText}>6</Text>
                                <Text style={styles.tableColumnText}>7</Text>
                            </View>
                            <ScrollView horizontal={true}>
                                <View style={styles.tableContent}>
                                    <View style={styles.tableHeader}>
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
                                        <View style={[styles.tableBodyText, {backgroundColor: '#ed9e9a'}]}>
                                            <Text style={{fontSize: 12}}>1</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>H</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Hydro</Text>
                                            <Text style={{fontSize: 12}}>1,008</Text>
                                        </View>
                                        <Text style={styles.tableBodyText1}></Text>
                                        <Text style={styles.tableBodyText1}></Text>
                                        <Text style={styles.tableBodyText1}></Text>
                                        <Text style={styles.tableBodyText1}></Text>
                                        <Text style={styles.tableBodyText1}></Text>
                                        <Text style={styles.tableBodyText1}></Text>
                                        <Text style={styles.tableBodyText1}></Text>
                                        <Text style={styles.tableBodyText1}></Text>
                                        <Text style={styles.tableBodyText1}></Text>
                                        <Text style={styles.tableBodyText1}></Text>
                                        <Text style={styles.tableBodyText1}></Text>
                                        <Text style={styles.tableBodyText1}></Text>
                                        <Text style={styles.tableBodyText1}></Text>
                                        <Text style={styles.tableBodyText1}></Text>
                                        <Text style={styles.tableBodyText1}></Text>
                                        <Text style={styles.tableBodyText1}></Text>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#ed9e9a'}]}>
                                            <Text style={{fontSize: 12}}>2</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>He</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Helium</Text>
                                            <Text style={{fontSize: 12}}>4,003</Text>
                                        </View>
                                    </View>
                                    {/* Chu kỳ 2 */}
                                    <View style={styles.tableBody}>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>
                                            <Text style={{fontSize: 12}}>3</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Li</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Lithium</Text>
                                            <Text style={{fontSize: 12}}>6,94</Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>
                                            <Text style={{fontSize: 12}}>4</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Be</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Beryllium</Text>
                                            <Text style={{fontSize: 12}}>9,01</Text>
                                        </View>
                                        <Text style={styles.tableBodyText1}></Text>
                                        <Text style={styles.tableBodyText1}></Text>
                                        <Text style={styles.tableBodyText1}></Text>
                                        <Text style={styles.tableBodyText1}></Text>
                                        <Text style={styles.tableBodyText1}></Text>
                                        <Text style={styles.tableBodyText1}></Text>
                                        <Text style={styles.tableBodyText1}></Text>
                                        <Text style={styles.tableBodyText1}></Text>
                                        <Text style={styles.tableBodyText1}></Text>
                                        <Text style={styles.tableBodyText1}></Text>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#a7c797'}]}>
                                            <Text style={{fontSize: 12}}>5</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>B</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Boron</Text>
                                            <Text style={{fontSize: 12}}>10,81</Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#ed9e9a'}]}>
                                            <Text style={{fontSize: 12}}>6</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>C</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Carbon</Text>
                                            <Text style={{fontSize: 12}}>12,01</Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#ed9e9a'}]}>
                                            <Text style={{fontSize: 12}}>7</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>N</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Nitrogen</Text>
                                            <Text style={{fontSize: 12}}>14,007</Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#ed9e9a'}]}>
                                            <Text style={{fontSize: 12}}>8</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>O</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Oxygen</Text>
                                            <Text style={{fontSize: 12}}>15,999</Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#ed9e9a'}]}>
                                            <Text style={{fontSize: 12}}>9</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>F</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Fluorine</Text>
                                            <Text style={{fontSize: 12}}>18,988</Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#ed9e9a'}]}>
                                            <Text style={{fontSize: 12}}>10</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Ne</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Neon</Text>
                                            <Text style={{fontSize: 12}}>20,18</Text>
                                        </View>
                                    </View>
                                    {/* Chu kỳ 3 */}
                                    <View style={styles.tableBody}>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>
                                            <Text style={{fontSize: 12}}>11</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Na</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Sodium</Text>
                                            <Text style={{fontSize: 12}}>22.989</Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>
                                            <Text style={{fontSize: 12}}>12</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Mg</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Magnesium</Text>
                                            <Text style={{fontSize: 12}}>24,31</Text>
                                        </View>
                                        <Text style={styles.tableBodyText1}></Text>
                                        <Text style={styles.tableBodyText1}></Text>
                                        <Text style={styles.tableBodyText1}></Text>
                                        <Text style={styles.tableBodyText1}></Text>
                                        <Text style={styles.tableBodyText1}></Text>
                                        <Text style={styles.tableBodyText1}></Text>
                                        <Text style={styles.tableBodyText1}></Text>
                                        <Text style={styles.tableBodyText1}></Text>
                                        <Text style={styles.tableBodyText1}></Text>
                                        <Text style={styles.tableBodyText1}></Text>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>
                                            <Text style={{fontSize: 12}}>13</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Al</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Aluminum</Text>
                                            <Text style={{fontSize: 12}}>26,98</Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#a7c797'}]}>
                                            <Text style={{fontSize: 12}}>14</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Si</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Silicon</Text>
                                            <Text style={{fontSize: 12}}>28,09</Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#ed9e9a'}]}>
                                            <Text style={{fontSize: 12}}>15</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>P</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Phosphorus</Text>
                                            <Text style={{fontSize: 12}}>30,97</Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#ed9e9a'}]}>
                                            <Text style={{fontSize: 12}}>16</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>S</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Sulfur</Text>
                                            <Text style={{fontSize: 12}}>32,06</Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#ed9e9a'}]}>
                                            <Text style={{fontSize: 12}}>17</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Cl</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Chlorine</Text>
                                            <Text style={{fontSize: 12}}>35,45</Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#ed9e9a'}]}>
                                            <Text style={{fontSize: 12}}>18</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Ar</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Argon</Text>
                                            <Text style={{fontSize: 12}}>39,95</Text>
                                        </View>
                                    </View>
                                    {/* Chu kỳ 4 */}
                                    <View style={styles.tableBody}>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>
                                            <Text style={{fontSize: 12}}>19</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>K</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Potassium</Text>
                                            <Text style={{fontSize: 12}}>39,10</Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>
                                            <Text style={{fontSize: 12}}>20</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Ca</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Calcium</Text>
                                            <Text style={{fontSize: 12}}>9,01</Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>
                                            <Text style={{fontSize: 12}}>21</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Sc</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Scandium</Text>
                                            <Text style={{fontSize: 12}}>44,96</Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>
                                            <Text style={{fontSize: 12}}>22</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Ti</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Titanium</Text>
                                            <Text style={{fontSize: 12}}>47,90</Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>
                                            <Text style={{fontSize: 12}}>23</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>V</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Vanadium</Text>
                                            <Text style={{fontSize: 12}}>50,94</Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>
                                            <Text style={{fontSize: 12}}>24</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Cr</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Chromium</Text>
                                            <Text style={{fontSize: 12}}>51,996</Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>
                                            <Text style={{fontSize: 12}}>25</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Mn</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Manganese</Text>
                                            <Text style={{fontSize: 12}}>54,94</Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>
                                            <Text style={{fontSize: 12}}>26</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Fe</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Iron</Text>
                                            <Text style={{fontSize: 12}}>55,85</Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>
                                            <Text style={{fontSize: 12}}>27</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Co</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Cobalt</Text>
                                            <Text style={{fontSize: 12}}>58,93</Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>
                                            <Text style={{fontSize: 12}}>28</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Ni</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Nickel</Text>
                                            <Text style={{fontSize: 12}}>58,71</Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>
                                            <Text style={{fontSize: 12}}>29</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Cu</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Copper</Text>
                                            <Text style={{fontSize: 12}}>63,54</Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>
                                            <Text style={{fontSize: 12}}>30</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Zn</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Zinc</Text>
                                            <Text style={{fontSize: 12}}>65,41</Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>
                                            <Text style={{fontSize: 12}}>31</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Ga</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Gallium</Text>
                                            <Text style={{fontSize: 12}}>69,72</Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#a7c797'}]}>
                                            <Text style={{fontSize: 12}}>32</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Ge</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Germanium</Text>
                                            <Text style={{fontSize: 12}}>72,64</Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#a7c797'}]}>
                                            <Text style={{fontSize: 12}}>33</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>As</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Arsenic</Text>
                                            <Text style={{fontSize: 12}}>74,92</Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#ed9e9a'}]}>
                                            <Text style={{fontSize: 12}}>34</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Se</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Selenium</Text>
                                            <Text style={{fontSize: 12}}>78,96</Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#ed9e9a'}]}>
                                            <Text style={{fontSize: 12}}>35</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Br</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Bromine</Text>
                                            <Text style={{fontSize: 12}}>79,91</Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#ed9e9a'}]}>
                                            <Text style={{fontSize: 12}}>36</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Kr</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Krypton</Text>
                                            <Text style={{fontSize: 12}}>83,80</Text>
                                        </View>
                                    </View>
                                    {/* Chu kỳ 5 */}
                                    <View style={styles.tableBody}>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>
                                            <Text style={{fontSize: 12}}>37</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Rb</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Rubidium</Text>
                                            <Text style={{fontSize: 12}}>85,47</Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>
                                            <Text style={{fontSize: 12}}>38</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Sr</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Strontium</Text>
                                            <Text style={{fontSize: 12}}>87,62</Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>
                                            <Text style={{fontSize: 12}}>39</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Y</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Yttrium</Text>
                                            <Text style={{fontSize: 12}}>88,91</Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>
                                            <Text style={{fontSize: 12}}>40</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Zr</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Zirconium</Text>
                                            <Text style={{fontSize: 12}}>91,22</Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>
                                            <Text style={{fontSize: 12}}>41</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Nb</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Niobium</Text>
                                            <Text style={{fontSize: 12}}>92,91</Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>
                                            <Text style={{fontSize: 12}}>42</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Mo</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Molydbenum</Text>
                                            <Text style={{fontSize: 12}}>95,95</Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>
                                            <Text style={{fontSize: 12}}>43</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Tc</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Technetium</Text>
                                            <Text style={{fontSize: 12}}>[97]</Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>
                                            <Text style={{fontSize: 12}}>44</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Ru</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Ruthenium</Text>
                                            <Text style={{fontSize: 12}}>101,07</Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>
                                            <Text style={{fontSize: 12}}>45</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Rh</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Rhodium</Text>
                                            <Text style={{fontSize: 12}}>102,91</Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>
                                            <Text style={{fontSize: 12}}>46</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Pd</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Palladium</Text>
                                            <Text style={{fontSize: 12}}>106,42</Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>
                                            <Text style={{fontSize: 12}}>47</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Ag</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Silver</Text>
                                            <Text style={{fontSize: 12}}>107,87</Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>
                                            <Text style={{fontSize: 12}}>48</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Cd</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Cadmium</Text>
                                            <Text style={{fontSize: 12}}>112,41</Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>
                                            <Text style={{fontSize: 12}}>49</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>In</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Indium</Text>
                                            <Text style={{fontSize: 12}}>114,82</Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>
                                            <Text style={{fontSize: 12}}>50</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Sn</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Tin</Text>
                                            <Text style={{fontSize: 12}}>118,69</Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#a7c797'}]}>
                                            <Text style={{fontSize: 12}}>51</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Sb</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Antimony</Text>
                                            <Text style={{fontSize: 12}}>121,75</Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#a7c797'}]}>
                                            <Text style={{fontSize: 12}}>52</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Te</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Tellurium</Text>
                                            <Text style={{fontSize: 12}}>127,60</Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#ed9e9a'}]}>
                                            <Text style={{fontSize: 12}}>53</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>I</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Iodine</Text>
                                            <Text style={{fontSize: 12}}>126,90</Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#ed9e9a'}]}>
                                            <Text style={{fontSize: 12}}>54</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Xe</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Xenon</Text>
                                            <Text style={{fontSize: 12}}>131,30</Text>
                                        </View>
                                    </View>
                                    {/* Chu kỳ 6 */}
                                    <View style={styles.tableBody}>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>
                                            <Text style={{fontSize: 12}}>55</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Cs</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Cesium</Text>
                                            <Text style={{fontSize: 12}}>132,91</Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>
                                            <Text style={{fontSize: 12}}>56</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Ba</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Barium</Text>
                                            <Text style={{fontSize: 12}}>137,31</Text>
                                        </View>
                                        <Text style={styles.tableBodyText1}>*{'\n'}57-71</Text>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>
                                            <Text style={{fontSize: 12}}>72</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Hf</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Hafnium</Text>
                                            <Text style={{fontSize: 12}}>178,49</Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>
                                            <Text style={{fontSize: 12}}>73</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Ta</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Tantalum</Text>
                                            <Text style={{fontSize: 12}}>180,95</Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>
                                            <Text style={{fontSize: 12}}>74</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>W</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Tungsten</Text>
                                            <Text style={{fontSize: 12}}>183,85</Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>
                                            <Text style={{fontSize: 12}}>75</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Re</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Rhenium</Text>
                                            <Text style={{fontSize: 12}}>186,20</Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>
                                            <Text style={{fontSize: 12}}>76</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Os</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Osmium</Text>
                                            <Text style={{fontSize: 12}}>190,20</Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>
                                            <Text style={{fontSize: 12}}>77</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Ir</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Iridium</Text>
                                            <Text style={{fontSize: 12}}>192,20</Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>
                                            <Text style={{fontSize: 12}}>78</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Pt</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Platinum</Text>
                                            <Text style={{fontSize: 12}}>195,09</Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>
                                            <Text style={{fontSize: 12}}>79</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Au</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Gold</Text>
                                            <Text style={{fontSize: 12}}>196,97</Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>
                                            <Text style={{fontSize: 12}}>80</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Hg</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Mercury</Text>
                                            <Text style={{fontSize: 12}}>200,59</Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>
                                            <Text style={{fontSize: 12}}>81</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Tl</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Thallium</Text>
                                            <Text style={{fontSize: 12}}>204,37</Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>
                                            <Text style={{fontSize: 12}}>82</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Pb</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Lead</Text>
                                            <Text style={{fontSize: 12}}>207,20</Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>
                                            <Text style={{fontSize: 12}}>83</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Bi</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Bismuth</Text>
                                            <Text style={{fontSize: 12}}>208,98</Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#a7c797'}]}>
                                            <Text style={{fontSize: 12}}>84</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Po</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Polonium</Text>
                                            <Text style={{fontSize: 12}}>[209]</Text>
                                        </View>
                                        <View style={styles.tableBodyText}>
                                            <Text style={{fontSize: 12}}>85</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>At</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Astatine</Text>
                                            <Text style={{fontSize: 12}}>[210]</Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#ed9e9a'}]}>
                                            <Text style={{fontSize: 12}}>86</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Rn</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Radon</Text>
                                            <Text style={{fontSize: 12}}>[222]</Text>
                                        </View>
                                    </View>
                                    {/* Chu kỳ 7 */}
                                    <View style={styles.tableBody}>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>
                                            <Text style={{fontSize: 12}}>87</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Fr</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Francium</Text>
                                            <Text style={{fontSize: 12}}>[223]</Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>
                                            <Text style={{fontSize: 12}}>88</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Ra</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Radium</Text>
                                            <Text style={{fontSize: 12}}>226,03</Text>
                                        </View>
                                        <Text style={styles.tableBodyText1}>*{'\n'}89-103</Text>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>
                                            <Text style={{fontSize: 12}}>104</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Rf</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Rutherfordium</Text>
                                            <Text style={{fontSize: 12}}>[267]</Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>
                                            <Text style={{fontSize: 12}}>105</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Db</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Dubnium</Text>
                                            <Text style={{fontSize: 12}}>[268]</Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>
                                            <Text style={{fontSize: 12}}>106</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Sg</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Seaborgium</Text>
                                            <Text style={{fontSize: 12}}>[269]</Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>
                                            <Text style={{fontSize: 12}}>107</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Bh</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Bohrium</Text>
                                            <Text style={{fontSize: 12}}>[271]</Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>
                                            <Text style={{fontSize: 12}}>108</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Hs</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Hassium</Text>
                                            <Text style={{fontSize: 12}}>[277]</Text>
                                        </View>
                                        <View style={styles.tableBodyText}>
                                            <Text style={{fontSize: 12}}>109</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Mt</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Meitnerium</Text>
                                            <Text style={{fontSize: 12}}>[276]</Text>
                                        </View>
                                        <View style={styles.tableBodyText}>
                                            <Text style={{fontSize: 12}}>110</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Ds</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Darmstadtium</Text>
                                            <Text style={{fontSize: 12}}>[281]</Text>
                                        </View>
                                        <View style={styles.tableBodyText}>
                                            <Text style={{fontSize: 12}}>111</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Rg</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Roentgenium</Text>
                                            <Text style={{fontSize: 12}}>[282]</Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>
                                            <Text style={{fontSize: 12}}>112</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Cn</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Copernicium</Text>
                                            <Text style={{fontSize: 12}}>[285]</Text>
                                        </View>
                                        <View style={styles.tableBodyText}>
                                            <Text style={{fontSize: 12}}>113</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Nh</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Nihonium</Text>
                                            <Text style={{fontSize: 12}}>[286]</Text>
                                        </View>
                                        <View style={styles.tableBodyText}>
                                            <Text style={{fontSize: 12}}>114</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Fl</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Flerovium</Text>
                                            <Text style={{fontSize: 12}}>[289]</Text>
                                        </View>
                                        <View style={styles.tableBodyText}>
                                            <Text style={{fontSize: 12}}>115</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Mc</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Moscovium</Text>
                                            <Text style={{fontSize: 12}}>[290]</Text>
                                        </View>
                                        <View style={styles.tableBodyText}>
                                            <Text style={{fontSize: 12}}>116</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Lv</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Livermorium</Text>
                                            <Text style={{fontSize: 12}}>[293]</Text>
                                        </View>
                                        <View style={styles.tableBodyText}>
                                            <Text style={{fontSize: 12}}>117</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Ts</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Tennessine</Text>
                                            <Text style={{fontSize: 12}}>[294]</Text>
                                        </View>
                                        <View style={styles.tableBodyText}>
                                            <Text style={{fontSize: 12}}>118</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Og</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Oganesson</Text>
                                            <Text style={{fontSize: 12}}>[294]</Text>
                                        </View>
                                    </View>
                                    {/* Chất khác*/}
                                    <View style={styles.tableBodyKhac}>
                                        <Text style={styles.tableBodyTextKhac1}></Text>
                                        <Text style={styles.tableBodyTextKhac1}></Text>
                                        <Text style={styles.tableBodyTextKhac1}></Text>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>
                                            <Text style={{fontSize: 12}}>57</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>La</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Lanthanum</Text>
                                            <Text style={{fontSize: 12}}>138,91</Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>
                                            <Text style={{fontSize: 12}}>58</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Ce</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Cerium</Text>
                                            <Text style={{fontSize: 12}}>140,12</Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>
                                            <Text style={{fontSize: 12}}>59</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Pr</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Praseodymium</Text>
                                            <Text style={{fontSize: 12}}>140,91</Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>
                                            <Text style={{fontSize: 12}}>60</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Nd</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Neodymium</Text>
                                            <Text style={{fontSize: 12}}>144,24</Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>
                                            <Text style={{fontSize: 12}}>61</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Pm</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Promethium</Text>
                                            <Text style={{fontSize: 12}}>[145]</Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>
                                            <Text style={{fontSize: 12}}>62</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Sm</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Samarium</Text>
                                            <Text style={{fontSize: 12}}>150,36</Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>
                                            <Text style={{fontSize: 12}}>63</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Eu</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Europium</Text>
                                            <Text style={{fontSize: 12}}>151,96</Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>
                                            <Text style={{fontSize: 12}}>64</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Gd</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Gadolinium</Text>
                                            <Text style={{fontSize: 12}}>157,25</Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>
                                            <Text style={{fontSize: 12}}>65</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Tb</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Terbium</Text>
                                            <Text style={{fontSize: 12}}>158,93</Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>
                                            <Text style={{fontSize: 12}}>66</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Dy</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Dysprosium</Text>
                                            <Text style={{fontSize: 12}}>162,50</Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>
                                            <Text style={{fontSize: 12}}>67</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Ho</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Holmium</Text>
                                            <Text style={{fontSize: 12}}>164,93</Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>
                                            <Text style={{fontSize: 12}}>68</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Er</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Erbium</Text>
                                            <Text style={{fontSize: 12}}>167,26</Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>
                                            <Text style={{fontSize: 12}}>69</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Tm</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Thulium</Text>
                                            <Text style={{fontSize: 12}}>168,93</Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>
                                            <Text style={{fontSize: 12}}>70</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Yb</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Ytterbium</Text>
                                            <Text style={{fontSize: 12}}>173,05</Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>
                                            <Text style={{fontSize: 12}}>71</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Lu</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Lutetium</Text>
                                            <Text style={{fontSize: 12}}>174,97</Text>
                                        </View>
                                    </View>
                                    {/* Chất khác 2*/}
                                    <View style={styles.tableBody}>
                                        <Text style={styles.tableBodyText1}></Text>
                                        <Text style={styles.tableBodyText1}></Text>
                                        <Text style={styles.tableBodyText1}></Text>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>
                                            <Text style={{fontSize: 12}}>89</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Ac</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Actinium</Text>
                                            <Text style={{fontSize: 12}}>[227]</Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>
                                            <Text style={{fontSize: 12}}>90</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Th</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Thorium</Text>
                                            <Text style={{fontSize: 12}}>232,04</Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>
                                            <Text style={{fontSize: 12}}>91</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Pa</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Protactinium</Text>
                                            <Text style={{fontSize: 12}}>231,04</Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>
                                            <Text style={{fontSize: 12}}>92</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>U</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Uranium</Text>
                                            <Text style={{fontSize: 12}}>238,03</Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>
                                            <Text style={{fontSize: 12}}>93</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Np</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Neptunium</Text>
                                            <Text style={{fontSize: 12}}>[237]</Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>
                                            <Text style={{fontSize: 12}}>94</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Pu</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Plutonium</Text>
                                            <Text style={{fontSize: 12}}>[244]</Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>
                                            <Text style={{fontSize: 12}}>95</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Am</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Americium</Text>
                                            <Text style={{fontSize: 12}}>[243]</Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>
                                            <Text style={{fontSize: 12}}>96</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Cm</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Curium</Text>
                                            <Text style={{fontSize: 12}}>[247]</Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>
                                            <Text style={{fontSize: 12}}>97</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Bk</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Berkelium</Text>
                                            <Text style={{fontSize: 12}}>[247]</Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>
                                            <Text style={{fontSize: 12}}>98</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Cf</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Californium</Text>
                                            <Text style={{fontSize: 12}}>[251]</Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>
                                            <Text style={{fontSize: 12}}>99</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Es</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Einsteinium</Text>
                                            <Text style={{fontSize: 12}}>[252]</Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>
                                            <Text style={{fontSize: 12}}>100</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Fm</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Fermium</Text>
                                            <Text style={{fontSize: 12}}>[257]</Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>
                                            <Text style={{fontSize: 12}}>101</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Md</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Mendelevium</Text>
                                            <Text style={{fontSize: 12}}>[258]</Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>
                                            <Text style={{fontSize: 12}}>102</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>No</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Nobelium</Text>
                                            <Text style={{fontSize: 12}}>[259]</Text>
                                        </View>
                                        <View style={[styles.tableBodyText, {backgroundColor: '#afc0de'}]}>
                                            <Text style={{fontSize: 12}}>103</Text>
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Lr</Text>
                                            <Text style={{fontSize: 14, fontStyle: 'italic'}}>Lawrencium</Text>
                                            <Text style={{fontSize: 12}}>[262]</Text>
                                        </View>
                                    </View>
                                </View>
                            </ScrollView>
                        </View>  
                    </View>

                    <View style={styles.chuThich}>
                        <View style={styles.chuThichNT}>
                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Các Xem:</Text>
                            <View style={[styles.chuThichNTText, {backgroundColor: '#afc0de'}]}>
                                <Text style={{fontSize: 15.5, fontStyle: 'italic'}}>(Số hiệu nguyên tử)</Text>
                                <Text style={{fontSize: 18, fontWeight: 'bold', fontStyle: 'italic'}}>(Ký hiệu nguyên tố)</Text>
                                <Text style={{fontSize: 15.5, fontStyle: 'italic'}}>(Tên nguyên tố)</Text>
                                <Text style={{fontSize: 15.5, fontStyle: 'italic'}}>(Nguyên tử khối)</Text>
                            </View>
                        </View>

                        <View style={styles.chuThichNT}>
                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Ghi Chú:</Text>
                            <View style={styles.chuThichNTBlock}>
                                <View style={styles.chuThichKL}>
                                    <View style={{backgroundColor: '#afc0de', width: 50, height: 50, borderWidth: 1}}></View>
                                    <Text style={{fontSize: 13.5, fontStyle: 'italic'}}>Kim loại</Text>
                                </View>

                                <View style={styles.chuThichAK}>
                                    <View style={{backgroundColor: '#a7c797', width: 50, height: 50, borderWidth: 1}}></View>
                                    <Text style={{fontSize: 13.5, fontStyle: 'italic'}}>Á kim</Text>
                                </View>

                                <View style={styles.chuThichPK}>
                                    <View style={{backgroundColor: '#ed9e9a', width: 50, height: 50, borderWidth: 1}}></View>
                                    <Text style={{fontSize: 13.5, fontStyle: 'italic'}}>Phi kim</Text>
                                </View>

                                <View style={styles.chuThichCR}>
                                    <View style={{backgroundColor: '#fff', width: 50, height: 50, borderWidth: 1}}></View>
                                    <Text style={{fontSize: 13.5, fontStyle: 'italic'}}>Chưa rõ</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default BangTuanHoan