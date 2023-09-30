import { View, Text, ScrollView, FlatList, SafeAreaView } from 'react-native'
import React from 'react'

import { Table, Row, Rows, TableWrapper } from 'react-native-table-component';

import data from './data'

import styles from './ColorChemistry.style'

const ColorChemistry = () => {
    return (
        <SafeAreaView style={styles.container}>
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
                                            backgroundColor:'green',
                                        }} 
                                        height={40}
                                        flexArr={[1,1]}
                                        textStyle={{
                                            textAlign: 'center',
                                            fontSize: 18,
                                            fontWeight: 'bold',
                                            color: 'white'
                                        }}
                                    />

                                    {/* Kim loại kiềm và kiềm thổ */}
                                    <Row 
                                        data={item.title1}
                                        style={{
                                            backgroundColor:'black',
                                        }} 
                                        height={40}
                                        flexArr={[1,1]}
                                        textStyle={{
                                            textAlign: 'center',
                                            fontSize: 16,
                                            fontWeight: 'bold',
                                            color: '#fff'
                                        }}
                                    />
                                    
                                    <TableWrapper style={{flexDirection: 'row'}}>
                                        <Rows 
                                            data={item.mauSac1}  
                                            flexArr={[1,1]} 
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

                                    {/* Nhôm */}
                                    <Row 
                                        data={item.title2}
                                        style={{
                                            backgroundColor:'black',
                                        }} 
                                        height={40}
                                        flexArr={[1,1]}
                                        textStyle={{
                                            textAlign: 'center',
                                            fontSize: 16,
                                            fontWeight: 'bold',
                                            color: '#fff'
                                        }}
                                    />

                                    <TableWrapper style={{flexDirection: 'row'}}>
                                        <Rows 
                                            data={item.mauSac2}  
                                            flexArr={[1,1]} 
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

                                    {/* Sắt */}
                                    <Row 
                                        data={item.title3}
                                        style={{
                                            backgroundColor:'black',
                                        }} 
                                        height={40}
                                        flexArr={[1,1]}
                                        textStyle={{
                                            textAlign: 'center',
                                            fontSize: 16,
                                            fontWeight: 'bold',
                                            color: '#fff'
                                        }}
                                    />

                                    <TableWrapper style={{flexDirection: 'row'}}>
                                        <Rows 
                                            data={item.mauSac3}  
                                            flexArr={[1,1]} 
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

                                    {/* Đồng */}
                                    <Row 
                                        data={item.title4}
                                        style={{
                                            backgroundColor:'black',
                                        }} 
                                        height={40}
                                        flexArr={[1,1]}
                                        textStyle={{
                                            textAlign: 'center',
                                            fontSize: 16,
                                            fontWeight: 'bold',
                                            color: '#fff'
                                        }}
                                    />

                                    <TableWrapper style={{flexDirection: 'row'}}>
                                        <Rows 
                                            data={item.mauSac4}  
                                            flexArr={[1,1]} 
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

                                    {/* Mangan */}
                                    <Row 
                                        data={item.title5}
                                        style={{
                                            backgroundColor:'black',
                                        }} 
                                        height={40}
                                        flexArr={[1,1]}
                                        textStyle={{
                                            textAlign: 'center',
                                            fontSize: 16,
                                            fontWeight: 'bold',
                                            color: '#fff'
                                        }}
                                    />

                                    <TableWrapper style={{flexDirection: 'row'}}>
                                        <Rows 
                                            data={item.mauSac5}  
                                            flexArr={[1,1]} 
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

                                    {/* Kẽm */}
                                    <Row 
                                        data={item.title6}
                                        style={{
                                            backgroundColor:'black',
                                        }} 
                                        height={40}
                                        flexArr={[1,1]}
                                        textStyle={{
                                            textAlign: 'center',
                                            fontSize: 16,
                                            fontWeight: 'bold',
                                            color: '#fff'
                                        }}
                                    />

                                    <TableWrapper style={{flexDirection: 'row'}}>
                                        <Rows 
                                            data={item.mauSac6}  
                                            flexArr={[1,1]} 
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

                                    {/* Crom */}
                                    <Row 
                                        data={item.title7}
                                        style={{
                                            backgroundColor:'black',
                                        }} 
                                        height={40}
                                        flexArr={[1,1]}
                                        textStyle={{
                                            textAlign: 'center',
                                            fontSize: 16,
                                            fontWeight: 'bold',
                                            color: '#fff'
                                        }}
                                    />

                                    <TableWrapper style={{flexDirection: 'row'}}>
                                        <Rows 
                                            data={item.mauSac7}  
                                            flexArr={[1,1]} 
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

                                    {/* Bạc */}
                                    <Row 
                                        data={item.title8}
                                        style={{
                                            backgroundColor:'black',
                                        }} 
                                        height={40}
                                        flexArr={[1,1]}
                                        textStyle={{
                                            textAlign: 'center',
                                            fontSize: 16,
                                            fontWeight: 'bold',
                                            color: '#fff'
                                        }}
                                    />

                                    <TableWrapper style={{flexDirection: 'row'}}>
                                        <Rows 
                                            data={item.mauSac8}  
                                            flexArr={[1,1]} 
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
                                    
                                    {/* Các hợp chất khác */}
                                    <Row 
                                        data={item.title9}
                                        style={{
                                            backgroundColor:'black',
                                        }} 
                                        height={40}
                                        flexArr={[1,1]}
                                        textStyle={{
                                            textAlign: 'center',
                                            fontSize: 16,
                                            fontWeight: 'bold',
                                            color: '#fff'
                                        }}
                                    />

                                    <TableWrapper style={{flexDirection: 'row'}}>
                                        <Rows 
                                            data={item.mauSac9}  
                                            flexArr={[1,1]} 
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

                                    {/* Màu của ngọn lửa */}
                                    <Row 
                                        data={item.title10}
                                        style={{
                                            backgroundColor:'black',
                                        }} 
                                        height={40}
                                        flexArr={[1,1]}
                                        textStyle={{
                                            textAlign: 'center',
                                            fontSize: 16,
                                            fontWeight: 'bold',
                                            color: '#fff'
                                        }}
                                    />

                                    <TableWrapper style={{flexDirection: 'row'}}>
                                        <Rows 
                                            data={item.mauSac10}  
                                            flexArr={[1,1]} 
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

                                    {/* Màu sắc của các muối kim loại khi cháy được ứng dụng làm pháo hoa */}
                                    <Row 
                                        data={item.title11}
                                        style={{
                                            backgroundColor:'black',
                                        }} 
                                        height={40}
                                        flexArr={[1,1]}
                                        textStyle={{
                                            textAlign: 'center',
                                            fontSize: 16,
                                            fontWeight: 'bold',
                                            color: '#fff'
                                        }}
                                    />

                                    <TableWrapper style={{flexDirection: 'row'}}>
                                        <Rows 
                                            data={item.mauSac11}  
                                            flexArr={[1,1]} 
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

                                    {/* Màu của ion trong dung dịch */}
                                    <Row 
                                        data={item.title12}
                                        style={{
                                            backgroundColor:'black',
                                        }} 
                                        height={40}
                                        flexArr={[1,1]}
                                        textStyle={{
                                            textAlign: 'center',
                                            fontSize: 16,
                                            fontWeight: 'bold',
                                            color: '#fff'
                                        }}
                                    />

                                    <TableWrapper style={{flexDirection: 'row'}}>
                                        <Rows 
                                            data={item.mauSac12}  
                                            flexArr={[1,1]} 
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

                                    {/* Các nhận dạng khác theo màu sắc */}
                                    <Row 
                                        data={item.title13}
                                        style={{
                                            backgroundColor:'black',
                                        }} 
                                        height={40}
                                        flexArr={[1,1]}
                                        textStyle={{
                                            textAlign: 'center',
                                            fontSize: 16,
                                            fontWeight: 'bold',
                                            color: '#fff'
                                        }}
                                    />

                                    <TableWrapper style={{flexDirection: 'row'}}>
                                        <Rows 
                                            data={item.mauSac13}  
                                            flexArr={[1,1]} 
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