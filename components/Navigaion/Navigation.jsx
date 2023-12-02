import React, { Component } from 'react'

import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Tab
import MainHome from '../MainHome/MainHome';

// Subject
import Chemistry from '../Chemistry/Chemistry';
import Physics from '../Physics/Physics';
import English from '../English/English';
import Math from '../Math/Math';

// More
import ThoiKhoaBieu from '../ThoiKhoaBieu/ThoiKhoaBieu';
import LichKiemTra from '../LichKiemTra/LichKiemTra';

// ThoiKhoaBieu Child
import UpdateThoiKhoaBieu from '../ThoiKhoaBieu/UpdateThoiKhoaBieu/UpdateThoiKhoaBieu';

// English Child
import Tenses from '../English/Tenses/Tenses'
import Grammar from '../English/Grammar/Grammar'
import IrregularVerbs from '../English/IrregularVerbs/IrregularVerbs'

// English Tenses Child
import FirstTense from '../English/Tenses/FirstTense/FirstTense'
import SecondTense from '../English/Tenses/SecondTense/SecondTense'
import ThirdTense from '../English/Tenses/ThirdTense/ThirdTense'
import FourthTense from '../English/Tenses/FourthTense/FourthTense'
import FifthTense from '../English/Tenses/FifthTense/FifthTense'
import SixthTense from '../English/Tenses/SixthTense/SixthTense'
import SeventhTense from '../English/Tenses/SeventhTense/SeventhTense'
import EighthTense from '../English/Tenses/EighthTense/EighthTense'
import NinethTense from '../English/Tenses/NinethTense/NinethTense'
import TenthTense from '../English/Tenses/TenthTense/TenthTense'
import EleventhTense from '../English/Tenses/EleventhTense/EleventhTense'
import TwelfthTense from '../English/Tenses/TwelfthTense/TwelfthTense'
import ThirteenthTense from '../English/Tenses/ThirteenthTense/ThirteenthTense'

// English Grammar Child
import ConditionalSentences from '../English/Grammar/ConditionalSentences/ConditionalSentences';
import Wish from '../English/Grammar/Wish/Wish';
import ReportedSpeech from '../English/Grammar/ReportedSpeech/ReportedSpeech';
import ClausesOfPurpose from '../English/Grammar/ClausesOfPurpose/ClausesOfPurpose';
import PassiveVoice from '../English/Grammar/PassiveVoice/PassiveVoice';
import ToVerbAndBareInfinitive from '../English/Grammar/ToVerbAndBareInfinitive/ToVerbAndBareInfinitive';
import WhenWhile from '../English/Grammar/WhenWhile/WhenWhile';
import SinceBeforeAfter from '../English/Grammar/SinceBeforeAfter/SinceBeforeAfter';
import CompoundSentence from '../English/Grammar/CompoundSentence/CompoundSentence';
import ComparativeNSuperlative from '../English/Grammar/ComparativeNSuperlative/ComparativeNSuperlative';
import ModalVerbs from '../English/Grammar/ModalVerbs/ModalVerbs';
import RelativeClause from '../English/Grammar/RelativeClause/RelativeClause';

// Chemistry Child
import CauHinhE from '../Chemistry/CauHinhE/CauHinhE';
import ColorChemistry from '../Chemistry/ColorChemistry/ColorChemistry';
import PTHH from '../Chemistry/PTHH/PTHH'
import DayHoatDongKimLoai from '../Chemistry/DayHoatDongKimLoai/DayHoatDongKimLoai'
import NTHHLop8 from '../Chemistry/NTHHLop8/NTHHLop8'
import BangTinhTan from '../Chemistry/BangTinhTan/BangTinhTan'
import BangTuanHoan from '../Chemistry/BangTuanHoan/BangTuanHoan'

// Physics Child
import Lop10 from '../Physics/Lop10/Lop10'
import Lop11 from '../Physics/Lop11/Lop11';
import Lop12 from '../Physics/Lop12/Lop12';

// Lop10 Child
import Chuong1_10 from '../Physics/Lop10/Chuong1/Chuong1_10';
import Chuong2_10 from '../Physics/Lop10/Chuong2/Chuong2_10';
import Chuong3_10 from '../Physics/Lop10/Chuong3/Chuong3_10';
import Chuong4_10 from '../Physics/Lop10/Chuong4/Chuong4_10';
import Chuong5_10 from '../Physics/Lop10/Chuong5/Chuong5_10';
import Chuong6_10 from '../Physics/Lop10/Chuong6/Chuong6_10';
import Chuong7_10 from '../Physics/Lop10/Chuong7/Chuong7_10';

// Chuong1 10 Child
import Bai3_10 from '../Physics/Lop10/Chuong1/Bai3/Bai3_10';

// Chuong2 10 Child
import Bai4_10 from '../Physics/Lop10/Chuong2/Bai4/Bai4_10';
import Bai5_10 from '../Physics/Lop10/Chuong2/Bai5/Bai5_10';
import Bai7_10 from '../Physics/Lop10/Chuong2/Bai7/Bai7_10';
import Bai8_10 from '../Physics/Lop10/Chuong2/Bai8/Bai8_10';
import Bai9_10 from '../Physics/Lop10/Chuong2/Bai9/Bai9_10';
import Bai10_10 from '../Physics/Lop10/Chuong2/Bai10/Bai10_10';
import Bai12_10 from '../Physics/Lop10/Chuong2/Bai12/Bai12_10';

// Chuong3 10 Child
import Bai13_10 from '../Physics/Lop10/Chuong3/Bai13/Bai13_10';
import BaiChuDe1_10 from '../Physics/Lop10/Chuong3/BaiChuDe1/BaiChuDe1_10'
import BaiChuDe2_10 from '../Physics/Lop10/Chuong3/BaiChuDe2/BaiChuDe2_10'
import Bai21_10 from '../Physics/Lop10/Chuong3/Bai21/Bai21_10';

// Chuong4 10 Child
import Bai23_10 from '../Physics/Lop10/Chuong4/Bai23/Bai23_10'
import Bai24_10 from '../Physics/Lop10/Chuong4/Bai24/Bai24_10'
import Bai25_10 from '../Physics/Lop10/Chuong4/Bai25/Bai25_10'
import Bai26_10 from '../Physics/Lop10/Chuong4/Bai26/Bai26_10'
import Bai27_10 from '../Physics/Lop10/Chuong4/Bai27/Bai27_10'

// Chuong5 10 Child
import Bai28_10 from '../Physics/Lop10/Chuong5/Bai28/Bai28_10'
import Bai29_10 from '../Physics/Lop10/Chuong5/Bai29/Bai29_10'

// Chuong6 10 Child
import Bai31_10 from '../Physics/Lop10/Chuong6/Bai31/Bai31_10';
import Bai32_10 from '../Physics/Lop10/Chuong6/Bai32/Bai32_10';

// Chuong7 10 Child
import Bai33_10 from '../Physics/Lop10/Chuong7/Bai33/Bai33_10';
import Bai34_10 from '../Physics/Lop10/Chuong7/Bai34/Bai34_10';

// Lop11 Child
import Chuong1_11 from '../Physics/Lop11/Chuong1/Chuong1_11';
import Chuong2_11 from '../Physics/Lop11/Chuong2/Chuong2_11';
import Chuong3_11 from '../Physics/Lop11/Chuong3/Chuong3_11';
import Chuong4_11 from '../Physics/Lop11/Chuong4/Chuong4_11';

// Chuong1 11 Child
import BaiChuDe1_11 from '../Physics/Lop11/Chuong1/BaiChuDe1/BaiChuDe1_11';
import Bai5_11 from '../Physics/Lop11/Chuong1/Bai5/Bai5_11';
import Bai6_11 from '../Physics/Lop11/Chuong1/Bai6/Bai6_11';

// Stack
const Stack = createNativeStackNavigator();

const StackGroup = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Home'
                component={MainHome}
                options={{
                    headerShown: true,
                    title: 'AH Study',
                    headerTitleStyle: {
                        fontSize: 35,
                        fontWeight: '800',
                        color: '#195298',
                    },
                    headerTitleAlign: 'center'
                }}
            />

            <Stack.Screen
                name='Chemistry'
                component={Chemistry}
                options={{
                    headerShown: true,
                    title: 'Kiến Thức Chung Môn Hóa Học',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    headerBackTitle: 'Trở lại'
                }}
            />

            <Stack.Screen
                name='Physics'
                component={Physics}
                options={{
                    headerShown: true,
                    title: 'Vật Lý',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    headerBackTitle: 'Trở lại'
                }}
            />

            <Stack.Screen
                name='Math'
                component={Math}
                options={{
                    headerShown: true,
                    title: 'Toán',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    headerBackTitle: 'Trở lại'
                }}
            />

            <Stack.Screen
                name='English'
                component={English}
                options={{
                    headerShown: true,
                    title: 'Tiếng Anh',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    headerBackTitle: 'Trở lại'
                }}
            />

            {/* More */}
            <Stack.Screen
                name='ThoiKhoaBieu'
                component={ThoiKhoaBieu}
                options={{
                    headerShown: true,
                    title: 'Thời Khóa Biểu',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    headerBackTitle: 'Trở lại'
                }}
            />

            <Stack.Screen
                name='LichKiemTra'
                component={LichKiemTra}
                options={{
                    headerShown: true,
                    title: 'Lịch Kiểm Tra',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    headerBackTitle: 'Trở lại'
                }}
            />

            {/* ThoiKhoaBieuChild */}
            <Stack.Screen
                name='UpdateThoiKhoaBieu'
                component={UpdateThoiKhoaBieu}
                options={{
                    headerShown: true,
                    title: 'Chỉnh sửa',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    headerBackTitle: 'Trở lại'
                }}
            />

            {/* English Child */}
            <Stack.Screen
                name='Tenses'
                component={Tenses}
                options={{
                    headerTitle: '13 Thì Cơ Bản',
                    headerBackTitle: 'Trở lại'
                }}
            />

            <Stack.Screen
                name='Grammar'
                component={Grammar}
                options={{
                    headerTitle: 'Ngữ Pháp Khác',
                    headerBackTitle: 'Trở lại'
                }}
            />

            {/* Chemistry child */}
            <Stack.Screen
                name='CauHinhE'
                component={CauHinhE}
                options={{
                    headerTitle: 'Cấu Hình Electron',
                    headerBackTitle: 'Trở lại'
                }}
            />

            <Stack.Screen
                name='ColorChemistry'
                component={ColorChemistry}
                options={{
                    headerTitle: 'Màu Một Số Chất',
                    headerBackTitle: 'Trở lại'
                }}
            />

            <Stack.Screen
                name='PTHH'
                component={PTHH}
                options={{
                    headerTitle: 'Phương Trình Hóa Học',
                    headerBackTitle: 'Trở lại'
                }}
            />

            <Stack.Screen
                name='DayHoatDongKimLoai'
                component={DayHoatDongKimLoai}
                options={{
                    headerTitle: 'Dãy Hoạt Động Kim Loại',
                    headerBackTitle: 'Trở lại'
                }}
            />

            <Stack.Screen
                name='NTHHLop8'
                component={NTHHLop8}
                options={{
                    headerTitle: 'Nguyên Tố Hóa Học Lớp 8',
                    headerBackTitle: 'Trở lại'
                }}
            />

            <Stack.Screen
                name='BangTinhTan'
                component={BangTinhTan}
                options={{
                    headerTitle: 'Bảng Tính Tan',
                    headerBackTitle: 'Trở lại'
                }}
            />

            <Stack.Screen
                name='BangTuanHoan'
                component={BangTuanHoan}
                options={{
                    headerTitle: 'Bảng Tuần Hoàn',
                    headerBackTitle: 'Trở lại'
                }}
            />

            {/* 13 basic tense */}
            <Stack.Screen
                name='IrregularVerbs'
                component={IrregularVerbs}
                options={{
                    headerTitle: 'Động Từ Bất Quy Tắc',
                    headerBackTitle: 'Trở lại'
                }}
            />

            <Stack.Screen
                name='FirstTense'
                component={FirstTense}
                options={{
                    headerTitle: 'Hiện Tại Đơn',
                    headerBackTitle: 'Trở lại'
                }}
            />

            <Stack.Screen
                name='SecondTense'
                component={SecondTense}
                options={{
                    headerTitle: 'Hiện Tại Tiếp Diễn',
                    headerBackTitle: 'Trở lại'
                }}
            />

            <Stack.Screen
                name='ThirdTense'
                component={ThirdTense}
                options={{
                    headerTitle: 'Hiện Tại Hoàn Thành',
                    headerBackTitle: 'Trở lại'
                }}
            />

            <Stack.Screen
                name='FourthTense'
                component={FourthTense}
                options={{
                    headerTitle: 'Quá Khứ Đơn',
                    headerBackTitle: 'Trở lại'
                }}
            />

            <Stack.Screen
                name='FifthTense'
                component={FifthTense}
                options={{
                    headerTitle: 'Quá Khứ Tiếp Diễn',
                    headerBackTitle: 'Trở lại'
                }}
            />

            <Stack.Screen
                name='SixthTense'
                component={SixthTense}
                options={{
                    headerTitle: 'Quá Khứ Hoàn Thành',
                    headerBackTitle: 'Trở lại'
                }}
            />

            <Stack.Screen
                name='SeventhTense'
                component={SeventhTense}
                options={{
                    headerTitle: 'Tương Lai Đơn',
                    headerBackTitle: 'Trở lại'
                }}
            />

            <Stack.Screen
                name='EighthTense'
                component={EighthTense}
                options={{
                    headerTitle: 'Tương Lai Gần',
                    headerBackTitle: 'Trở lại'
                }}
            />

            <Stack.Screen
                name='NinethTense'
                component={NinethTense}
                options={{
                    headerTitle: 'Tương Lai Tiếp Diễn',
                    headerBackTitle: 'Trở lại'
                }}
            />

            <Stack.Screen
                name='TenthTense'
                component={TenthTense}
                options={{
                    headerTitle: 'Tương Lai Hoàn Thành',
                    headerBackTitle: 'Trở lại'
                }}
            />

            <Stack.Screen
                name='EleventhTense'
                component={EleventhTense}
                options={{
                    headerTitle: 'Hiện Tại Hoàn Thành Tiếp Diễn',
                    headerBackTitle: 'Trở lại'
                }}
            />

            <Stack.Screen
                name='TwelfthTense'
                component={TwelfthTense}
                options={{
                    headerTitle: 'Quá Khứ Hoàn Thành Tiếp Diễn',
                    headerBackTitle: 'Trở lại'
                }}
            />

            <Stack.Screen
                name='ThirteenthTense'
                component={ThirteenthTense}
                options={{
                    headerTitle: 'Tương Lai Hoàn Thành Tiếp Diễn',
                    headerBackTitle: 'Trở lại'
                }}
            />

            {/* English Grammar Child */}
            <Stack.Screen
                name='ConditionalSentences'
                component={ConditionalSentences}
                options={{
                    headerTitle: 'Câu Điều kiện',
                    headerBackTitle: 'Trở lại'
                }}
            />

            <Stack.Screen
                name='Wish'
                component={Wish}
                options={{
                    headerTitle: 'Câu Điều Ước',
                    headerBackTitle: 'Trở lại'
                }}
            />

            <Stack.Screen
                name='ReportedSpeech'
                component={ReportedSpeech}
                options={{
                    headerTitle: 'Câu Tường Thuật',
                    headerBackTitle: 'Trở lại'
                }}
            />

            <Stack.Screen
                name='ClausesOfPurpose'
                component={ClausesOfPurpose}
                options={{
                    headerTitle: 'Câu Diễn Tả Mục Đích',
                    headerBackTitle: 'Trở lại'
                }}
            />

            <Stack.Screen
                name='PassiveVoice'
                component={PassiveVoice}
                options={{
                    headerTitle: 'Câu Bị Động',
                    headerBackTitle: 'Trở lại'
                }}
            />

            <Stack.Screen
                name='ToVerbAndBareInfinitive'
                component={ToVerbAndBareInfinitive}
                options={{
                    headerTitle: 'To-Verb và Bare Infinitive',
                    headerBackTitle: 'Trở lại'
                }}
            />

            <Stack.Screen
                name='WhenWhile'
                component={WhenWhile}
                options={{
                    headerTitle: 'When và While',
                    headerBackTitle: 'Trở lại'
                }}
            />

            <Stack.Screen
                name='SinceBeforeAfter'
                component={SinceBeforeAfter}
                options={{
                    headerTitle: 'Since, Before và After',
                    headerBackTitle: 'Trở lại'
                }}
            />

            <Stack.Screen
                name='CompoundSentence'
                component={CompoundSentence}
                options={{
                    headerTitle: 'Câu Ghép',
                    headerBackTitle: 'Trở lại'
                }}
            />

            <Stack.Screen
                name='ComparativeNSuperlative'
                component={ComparativeNSuperlative}
                options={{
                    headerTitle: 'So sánh hơn và nhất',
                    headerBackTitle: 'Trở lại'
                }}
            />

            <Stack.Screen
                name='ModalVerbs'
                component={ModalVerbs}
                options={{
                    headerTitle: 'Modal Verbs',
                    headerBackTitle: 'Trở lại'
                }}
            />

            <Stack.Screen
                name='RelativeClause'
                component={RelativeClause}
                options={{
                    headerTitle: 'Relative Clause',
                    headerBackTitle: 'Trở lại'
                }}
            />

            {/* Physics Child */}
            <Stack.Screen
                name='Lop10'
                component={Lop10}
                options={{
                    headerTitle: 'Lớp 10',
                    headerBackTitle: 'Trở lại'
                }}
            />

            <Stack.Screen
                name='Lop11'
                component={Lop11}
                options={{
                    headerTitle: 'Lớp 11',
                    headerBackTitle: 'Trở lại'
                }}
            />

            <Stack.Screen
                name='Lop12'
                component={Lop12}
                options={{
                    headerTitle: 'Lớp 12',
                    headerBackTitle: 'Trở lại'
                }}
            />

            {/* Lop10 Child */}
            <Stack.Screen
                name='Chuong1_10'
                component={Chuong1_10}
                options={{
                    headerTitle: 'Chương I',
                    headerBackTitle: 'Trở lại'
                }}
            />

            <Stack.Screen
                name='Chuong2_10'
                component={Chuong2_10}
                options={{
                    headerTitle: 'Chương II',
                    headerBackTitle: 'Trở lại'
                }}
            />

            <Stack.Screen
                name='Chuong3_10'
                component={Chuong3_10}
                options={{
                    headerTitle: 'Chương III',
                    headerBackTitle: 'Trở lại'
                }}
            />

            <Stack.Screen
                name='Chuong4_10'
                component={Chuong4_10}
                options={{
                    headerTitle: 'Chương IV',
                    headerBackTitle: 'Trở lại'
                }}
            />

            <Stack.Screen
                name='Chuong5_10'
                component={Chuong5_10}
                options={{
                    headerTitle: 'Chương V',
                    headerBackTitle: 'Trở lại'
                }}
            />

            <Stack.Screen
                name='Chuong6_10'
                component={Chuong6_10}
                options={{
                    headerTitle: 'Chương VI',
                    headerBackTitle: 'Trở lại'
                }}
            />

            <Stack.Screen
                name='Chuong7_10'
                component={Chuong7_10}
                options={{
                    headerTitle: 'Chương VII',
                    headerBackTitle: 'Trở lại'
                }}
            />

            {/* Chuong1 10 Child */}
            <Stack.Screen
                name='Bai3_10'
                component={Bai3_10}
                options={{
                    headerTitle: 'SAI SỐ',
                    headerBackTitle: 'Trở lại'
                }}
            />

            {/* Chuong2 10 Child */}
            <Stack.Screen
                name='Bai4_10'
                component={Bai4_10}
                options={{
                    headerTitle: 'Độ dịch chuyển và Quãng đường',
                    headerBackTitle: 'Trở lại'
                }}
            />

            <Stack.Screen
                name='Bai5_10'
                component={Bai5_10}
                options={{
                    headerTitle: 'Tốc độ và Vận Tốc',
                    headerBackTitle: 'Trở lại'
                }}
            />

            <Stack.Screen
                name='Bai7_10'
                component={Bai7_10}
                options={{
                    headerTitle: 'Đồ thị độ dịch chuyển - Thời gian',
                    headerBackTitle: 'Trở lại'
                }}
            />

            <Stack.Screen
                name='Bai8_10'
                component={Bai8_10}
                options={{
                    headerTitle: 'Chuyển động biến đổi – Gia tốc',
                    headerBackTitle: 'Trở lại'
                }}
            />

            <Stack.Screen
                name='Bai9_10'
                component={Bai9_10}
                options={{
                    headerTitle: 'Chuyển động thẳng biến đổi đều',
                    headerBackTitle: 'Trở lại'
                }}
            />

            <Stack.Screen
                name='Bai10_10'
                component={Bai10_10}
                options={{
                    headerTitle: 'Sự rơi tự do',
                    headerBackTitle: 'Trở lại'
                }}
            />

            <Stack.Screen
                name='Bai12_10'
                component={Bai12_10}
                options={{
                    headerTitle: 'Chuyển động ném',
                    headerBackTitle: 'Trở lại'
                }}
            />

            {/* Chuong3 10 Child */}
            <Stack.Screen
                name='Bai13_10'
                component={Bai13_10}
                options={{
                    headerTitle: 'Lực',
                    headerBackTitle: 'Trở lại'
                }}
            />

            <Stack.Screen
                name='BaiChuDe1_10'
                component={BaiChuDe1_10}
                options={{
                    headerTitle: '3 Định Luật Newton',
                    headerBackTitle: 'Trở lại'
                }}
            />

            <Stack.Screen
                name='BaiChuDe2_10'
                component={BaiChuDe2_10}
                options={{
                    headerTitle: 'Các lực cơ học',
                    headerBackTitle: 'Trở lại'
                }}
            />

            <Stack.Screen
                name='Bai21_10'
                component={Bai21_10}
                options={{
                    headerTitle: 'Moment lực',
                    headerBackTitle: 'Trở lại'
                }}
            />

            {/* Chuong4 10 Child */}
            <Stack.Screen
                name='Bai23_10'
                component={Bai23_10}
                options={{
                    headerTitle: 'Năng lượng - Công cơ học',
                    headerBackTitle: 'Trở lại'
                }}
            />

            <Stack.Screen
                name='Bai24_10'
                component={Bai24_10}
                options={{
                    headerTitle: 'Công suất',
                    headerBackTitle: 'Trở lại'
                }}
            />

            <Stack.Screen
                name='Bai25_10'
                component={Bai25_10}
                options={{
                    headerTitle: 'Động năng - Thế năng',
                    headerBackTitle: 'Trở lại'
                }}
            />

            <Stack.Screen
                name='Bai26_10'
                component={Bai26_10}
                options={{
                    headerTitle: 'Cơ năng',
                    headerBackTitle: 'Trở lại'
                }}
            />

            <Stack.Screen
                name='Bai27_10'
                component={Bai27_10}
                options={{
                    headerTitle: 'Hiệu suất',
                    headerBackTitle: 'Trở lại'
                }}
            />

            {/* Chuong5 10 Child */}
            <Stack.Screen
                name='Bai28_10'
                component={Bai28_10}
                options={{
                    headerTitle: 'Động lượng',
                    headerBackTitle: 'Trở lại'
                }}
            />

            <Stack.Screen
                name='Bai29_10'
                component={Bai29_10}
                options={{
                    headerTitle: 'Định luật bảo toàn Động lượng',
                    headerBackTitle: 'Trở lại'
                }}
            />

            {/* Chuong6 10 Child */}
            <Stack.Screen
                name='Bai31_10'
                component={Bai31_10}
                options={{
                    headerTitle: 'Động học của CĐ Tròn đều',
                    headerBackTitle: 'Trở lại'
                }}
            />

            <Stack.Screen
                name='Bai32_10'
                component={Bai32_10}
                options={{
                    headerTitle: 'Lực và Gia tốc hướng tâm',
                    headerBackTitle: 'Trở lại'
                }}
            />

            {/* Chuong7 10 Child */}
            <Stack.Screen
                name='Bai33_10'
                component={Bai33_10}
                options={{
                    headerTitle: 'Biến dạng của vật rắn',
                    headerBackTitle: 'Trở lại'
                }}
            />

            <Stack.Screen
                name='Bai34_10'
                component={Bai34_10}
                options={{
                    headerTitle: 'Khối lượng riêng - Áp suất chất lỏng',
                    headerBackTitle: 'Trở lại'
                }}
            />

            {/* Lop11 Child */}
            <Stack.Screen
                name='Chuong1_11'
                component={Chuong1_11}
                options={{
                    headerTitle: 'Chương I',
                    headerBackTitle: 'Trở lại'
                }}
            />

            <Stack.Screen
                name='Chuong2_11'
                component={Chuong2_11}
                options={{
                    headerTitle: 'Chương II',
                    headerBackTitle: 'Trở lại'
                }}
            />

            <Stack.Screen
                name='Chuong3_11'
                component={Chuong3_11}
                options={{
                    headerTitle: 'Chương III',
                    headerBackTitle: 'Trở lại'
                }}
            />

            <Stack.Screen
                name='Chuong4_11'
                component={Chuong4_11}
                options={{
                    headerTitle: 'Chương IV',
                    headerBackTitle: 'Trở lại'
                }}
            />
            
            {/* Chuong1 11 Child */}
            <Stack.Screen
                name='BaiChuDe1_11'
                component={BaiChuDe1_11}
                options={{
                    headerTitle: 'Dao động điều hòa',
                    headerBackTitle: 'Trở lại'
                }}
            />

            <Stack.Screen
                name='Bai5_11'
                component={Bai5_11}
                options={{
                    headerTitle: 'Động năng & Thế năng',
                    headerBackTitle: 'Trở lại'
                }}
            />

            <Stack.Screen
                name='Bai6_11'
                component={Bai6_11}
                options={{
                    headerTitle: 'Dao động tắt dần - cưỡng bức',
                    headerBackTitle: 'Trở lại'
                }}
            />
        </Stack.Navigator>
    )
}

export default class Navigation extends Component {
    render() {
        return (
            <NavigationContainer independent={true}>
                <StatusBar barStyle={'dark-content'} />
                <StackGroup />
            </NavigationContainer>
        )
    }
}