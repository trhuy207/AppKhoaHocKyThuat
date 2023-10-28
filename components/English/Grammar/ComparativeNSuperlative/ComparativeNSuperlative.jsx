import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'

import styles from './ComparativeNSuperlative.style'

const ComparativeNSuperlative = () => {
    const [p1, showP1] = useState(false)
    const [p11, showP11] = useState(false)
    const [p12, showP12] = useState(false)
    const [p13, showP13] = useState(false)
    const [p14, showP14] = useState(false)

    const [p2, showP2] = useState(false)
    const [p21, showP21] = useState(false)
    const [p22, showP22] = useState(false)
    const [p23, showP23] = useState(false)
    const [p24, showP24] = useState(false)

    const [p3, showP3] = useState(false)
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.body}>
                    <View style={styles.card}>
                        {/* I. So sánh hơn trong tiếng Anh (Comparative) */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <TouchableOpacity style={styles.hideShowBtn} onPress={() => showP1(!p1)}>
                                    <Text style={styles.headerText}>I. So sánh hơn trong tiếng Anh (Comparative)</Text>
                                </TouchableOpacity>
                            </View>
                            {p1 ? (
                                <View style={styles.cardContent}>
                                    <Text style={styles.contentTitle}>1. So sánh hơn với tính từ/ trạng từ ngắn</Text>
                                    <TouchableOpacity style={styles.hideShowBtn} onPress={() => showP11(!p11)}>
                                        <Text style={styles.hideShowBtnText}>Xem Công Thức</Text>
                                    </TouchableOpacity>
                                    {p11 ? (
                                        <View>
                                                <Text style={styles.contentCT}>• Công thức: S + V + Adj/Adv + -er + than</Text>
                                                <Text style={styles.contentText}>• <Text style={{fontWeight: 'bold'}}>Ví dụ</Text>: Hoa came later than me. (Hoa đến muộn hơn tôi)</Text>
                                                <Text style={styles.contentText}>• <Text style={{fontWeight: 'bold'}}>Lưu ý</Text>: Trong những câu có chứa công thức <Text style={{fontWeight: 'bold'}}>so sánh hơn</Text>, các tính từ hoặc trạng từ trong câu được biến đổi phù hợp với công thức.</Text>
                                                <Text style={styles.contentText}>- Những tính từ/ trạng từ ngắn có 1 âm tiết, chúng ta chỉ cần thêm đuôi -er vào ngay sau tính từ đó để tạo thành dạng phù hợp trong công thức so sánh hơn.</Text>
                                                <Text style={styles.contentText}>- Những tính từ/ trạng từ 2 âm tiết kết thúc bằng -y, ta chuyển -y thành -i sau đó thêm đuôi -er. Ví dụ: easy → easier, lucky → luckier, tiny → tinier, crazy → crazier, sexy → sexier.</Text>
                                                <Text style={styles.contentText}>- Những tính từ/ trạng từ ngắn có kết thúc bằng 1 phụ âm nhưng trước đó là 1 nguyên âm, ta nhân đôi phụ âm cuối rồi thêm đuôi -er. Ví dụ: fat → fatter, big → bigger, sad → sadder.</Text>
                                        </View>
                                    ):null}

                                    <Text style={styles.contentTitle}>2. So sánh hơn với tính từ/ trạng từ dài</Text>
                                    <TouchableOpacity style={styles.hideShowBtn} onPress={() => showP12(!p12)}>
                                        <Text style={styles.hideShowBtnText}>Xem Công Thức</Text>
                                    </TouchableOpacity>
                                    {p12 ? (
                                        <View>
                                                <Text style={styles.contentCT}>• Công thức: S + V + more + Adj/ Adv + than</Text>
                                                <Text style={styles.contentText}>• <Text style={{fontWeight: 'bold'}}>Ví dụ</Text>: This month’s sale project is more difficult than last month’s sale project. (Dự án kinh doanh tháng này khó hơn dự án kinh doanh tháng trước)</Text>
                                                <Text style={styles.contentText}>• <Text style={{fontWeight: 'bold'}}>Lưu ý</Text>:</Text>
                                                <Text style={styles.contentText}>- Những tính từ/ trạng từ 2 âm tiết trở lên, có kết thúc bằng -ly, giữ nguyên đuôi -y, thêm more vào trước từ đó để tạo công thức so sánh hơn. Ví dụ: boldly → more boldly, likely → more likely, coldly → more coldly, sadly → more sadly.</Text>
                                                <Text style={styles.contentText}>- Thêm “far”, “much”, “a lot” trước cụm từ so sánh để nhấn mạnh. Ví dụ: Cherries are much more expensive than apples. (Anh đào thì đắt hơn táo rất nhiều.)</Text>
                                        </View>
                                    ):null}

                                    <Text style={styles.contentTitle}>3. So sánh kém hơn trong tiếng Anh</Text>
                                    <TouchableOpacity style={styles.hideShowBtn} onPress={() => showP13(!p13)}>
                                        <Text style={styles.hideShowBtnText}>Xem Công Thức</Text>
                                    </TouchableOpacity>
                                    {p13 ? (
                                        <View>
                                                <Text style={styles.contentCT}>• Công thức: S + V + Less + Adj + than + N</Text>
                                                <Text style={styles.contentText}>Trong tiếng Anh, thường ít sử dụng công thức so sánh kém hơn này, mà sẽ dùng công thức so sánh hơn đi kèm với các tính từ hoặc trạng từ ngược lại hoặc cấu trúc not as…as hoặc so…as.</Text>
                                                <Text style={styles.contentText}>• <Text style={{fontWeight: 'bold'}}>Ví dụ</Text>: Apples are less expensive than cherries. (Táo thì kém đắt hơn anh đào.)</Text>
                                                <Text style={styles.contentText}>{'=>'} Cherries are more expensive than apples</Text>
                                                <Text style={styles.contentText}>{'=>'} Apples are not as/so expensive than cherries</Text>
                                        </View>
                                    ):null}

                                    <Text style={styles.contentTitle}>4. Một số cấu trúc so sánh hơn đặc biệt khác</Text>
                                    <TouchableOpacity style={styles.hideShowBtn} onPress={() => showP14(!p14)}>
                                        <Text style={styles.hideShowBtnText}>Xem Công Thức</Text>
                                    </TouchableOpacity>
                                    {p14 ? (
                                        <View>
                                                <Text style={styles.contentText}>⁕ <Text style={{fontWeight: 'bold'}}>Cấu trúc so sánh hơn gấp theo bội số</Text>: Đây là cấu trúc so sánh hơn để diễn tả vật này hơn vật kia bao nhiêu lần: 2 lần, 3 lần,...</Text>
                                                <Text style={styles.contentCT}>• Công thức: S + V + số lần + as + Adj/adv + as + N</Text>
                                                <Text style={styles.contentText}>• <Text style={{fontWeight: 'bold'}}>Ví dụ</Text>: Their garden is twice as big as ours. (Vườn nhà họ to gấp đôi vườn nhà của chúng tôi.)</Text>

                                                <Text style={styles.contentText}>⁕ <Text style={{fontWeight: 'bold'}}>Cấu trúc so sánh hơn cấp tiến “càng…càng…”</Text>: Đây là cấu trúc so sánh mang ý nghĩa cấp tiến, thể hiện sự nhấn mạnh trạng thái đang muốn nói tới, càng A thì càng B.</Text>
                                                <Text style={styles.contentCT}>• Công thức: so sánh hơn + so sánh hơn</Text>
                                                <Text style={styles.contentText}>• <Text style={{fontWeight: 'bold'}}>Ví dụ</Text>: The more the merrier! (Càng đông thì càng vui)</Text>
                                        </View>
                                    ):null}
                                </View>
                            ): null}
                        </View>

                        {/* II. So sánh nhất trong tiếng Anh (Superlative) */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <TouchableOpacity style={styles.hideShowBtn} onPress={() => showP2(!p2)}>
                                    <Text style={styles.headerText}>II. So sánh nhất trong tiếng Anh (Superlative)</Text>
                                </TouchableOpacity>
                            </View>
                            {p2 ? (
                                <View style={styles.cardContent}>
                                    <Text style={styles.contentTitle}>1. So sánh nhất với tính từ/trạng từ ngắn</Text>
                                    <TouchableOpacity style={styles.hideShowBtn} onPress={() => showP21(!p21)}>
                                        <Text style={styles.hideShowBtnText}>Xem Công Thức</Text>
                                    </TouchableOpacity>
                                    {p21 ? (
                                        <View>
                                                <Text style={styles.contentCT}>• Công thức: S + V + the + Adj/adv + est + N</Text>
                                                <Text style={styles.contentText}>• <Text style={{fontWeight: 'bold'}}>Ví dụ</Text>: My dad is the greatest person in the world. (Bố tôi là người vĩ đại nhất thế giới)</Text>
                                                <Text style={styles.contentText}>• <Text style={{fontWeight: 'bold'}}>Lưu ý</Text>: Trong những câu có chứa công thức so sánh nhất, chúng ta có thể thấy các tính từ hoặc trạng từ trong câu được biến đổi, chúng sẽ được thêm đuôi -est so với dạng nguyên thể. Bên cạnh đó, những tính từ và trạng từ trong một câu so sánh nhất thì sẽ đi kèm với “the”. </Text>
                                                <Text style={styles.contentText}>- Những tính từ/ trạng từ ngắn có 1 âm tiết, ta thêm đuôi -est vào sau dạng nguyên thể của chúng. Ví dụ: cold {'=>'} coldest.</Text>
                                                <Text style={styles.contentText}>- Những tính từ/ trạng từ có tận cùng là e thì chỉ thêm -st. Ví dụ: cute {'=>'} cutest</Text>
                                                <Text style={styles.contentText}>- Những tính từ/ trạng từ có 1 âm tiết, kết thúc bằng nguyên âm + phụ âm thì nhân đôi phụ âm và thêm -est. Ví dụ: hot {'=>'} hottest, big {'=>'} biggest.</Text>
                                                <Text style={styles.contentText}>- Những tính từ/ trạng từ có 2 âm tiết kết thúc bằng phụ âm y {'->'} ta đổi y thành i và thêm -est. Ví dụ: dry {'=>'} driest, happy {'=>'} happiest.</Text>
                                        </View>
                                    ):null}

                                    <Text style={styles.contentTitle}>2. So sánh nhất với tính từ/ trạng từ dài</Text>
                                    <TouchableOpacity style={styles.hideShowBtn} onPress={() => showP22(!p22)}>
                                        <Text style={styles.hideShowBtnText}>Xem Công Thức</Text>
                                    </TouchableOpacity>
                                    {p22 ? (
                                        <View>
                                                <Text style={styles.contentCT}>• Công thức: S + V + the + most + adj + N</Text>
                                                <Text style={styles.contentText}>• <Text style={{fontWeight: 'bold'}}>Ví dụ</Text>:</Text>
                                                <Text style={styles.contentText}>- He is the most handsome in his class. (Anh ấy là người đẹp trai nhất lớp)</Text>
                                                <Text style={styles.contentText}>- Thêm “far”, “much”, “a lot” trước cụm từ so sánh để nhấn mạnh. Ví dụ: Cherries are much more expensive than apples. (Anh đào thì đắt hơn táo rất nhiều.)</Text>
                                                <Text style={styles.contentText}>- These shirt are the most expensive of all. (Chiếc áo này thì đắt nhất trong tất cả.)</Text>
                                                <Text style={styles.contentText}>• <Text style={{fontWeight: 'bold'}}>Lưu ý</Text>: Những tính từ/ trạng từ 2 âm tiết trở lên, ta thêm "the most" vào trước từ đó</Text>
                                        </View>
                                    ):null}

                                    <Text style={styles.contentTitle}>3. So sánh kém nhất trong tiếng Anh</Text>
                                    <TouchableOpacity style={styles.hideShowBtn} onPress={() => showP23(!p23)}>
                                        <Text style={styles.hideShowBtnText}>Xem Công Thức</Text>
                                    </TouchableOpacity>
                                    {p23 ? (
                                        <View>
                                                <Text style={styles.contentCT}>• Công thức: S + V + the + least + Adj/Adv + N</Text>
                                                <Text style={styles.contentText}>• <Text style={{fontWeight: 'bold'}}>Ví dụ</Text>: Her ideas were the least practical suggestions. (Những ý tưởng của cô ấy là những gợi ý kém thực tế nhất.)</Text>
                                        </View>
                                    ):null}

                                    <Text style={styles.contentTitle}>4. Một số trường hợp mở rộng của công thức so sánh nhất</Text>
                                    <TouchableOpacity style={styles.hideShowBtn} onPress={() => showP24(!p24)}>
                                        <Text style={styles.hideShowBtnText}>Xem Công Thức</Text>
                                    </TouchableOpacity>
                                    {p24 ? (
                                        <View>
                                                <Text style={styles.contentText}>– Khi dùng “most+ adj” và không đi kèm với “the” thì cụm “most + adj” tương đương với “very”.</Text>
                                                <Text style={styles.contentText}>• <Text style={{fontWeight: 'bold'}}>Ví dụ</Text>: The notebook you lent me was <Text style={{fontWeight: 'bold'}}>most interesting</Text>. (Cuốn vở mà bạn cho tôi mượn là cuốn thú vị nhất đấy)</Text>

                                                <Text style={styles.contentText}>– Khi muốn nhấn mạnh, chúng ta có thể thêm “by far” vào công thức so sánh nhất.</Text>
                                                <Text style={styles.contentText}>• <Text style={{fontWeight: 'bold'}}>Ví dụ</Text>: Jim is the smartest <Text style={{fontWeight: 'bold'}}>by far</Text>. (Jim là người thông minh nhất, hơn nhiều những người còn lại)</Text>
                                        </View>
                                    ):null}
                                </View>
                            ): null}
                        </View>

                        {/* III. Một số tính từ, trạng từ bất quy tắc trong công thức so sánh hơn và so sánh nhất */}
                        <View style={styles.cardElement}>
                            <View style={styles.cardHeader}>
                                <TouchableOpacity style={styles.hideShowBtn} onPress={() => showP3(!p3)}>
                                    <Text style={styles.headerText}>III. Một số tính từ, trạng từ bất quy tắc trong công thức so sánh hơn và so sánh nhất</Text>
                                </TouchableOpacity>
                            </View>
                            {p3 ? (
                                <View style={styles.cardContent}>
                                    <Text style={styles.contentText}>Trong công thức so sánh hơn và so sánh nhất, ngoài cách biến đổi dạng của tính từ và trạng từ như trên, một số các từ khác có <Text style={{fontWeight: 'bold'}}>dạng bất quy tắc đặc biệt</Text> như sau:</Text>
                                    <View styles={styles.table}>
                                        <ScrollView horizontal={true}>
                                            <View style={styles.tableContent}>
                                                <View style={styles.tableHeader}>
                                                    <Text style={styles.tableHeaderText1}>Tính từ / trạng từ</Text>
                                                    <Text style={styles.tableHeaderText}>So sánh hơn</Text>
                                                    <Text style={styles.tableHeaderText}>So sánh nhất</Text>
                                                    <Text style={styles.tableHeaderText2}>Nghĩa</Text>
                                                </View>

                                                <View style={styles.tableBody}>
                                                    <View style={styles.tableBodyText1}>
                                                        <Text style={{fontSize: 15, textAlign: 'center'}}>Good/Well</Text>
                                                    </View>
                                                    <View style={styles.tableBodyText}>
                                                        <Text style={{fontSize: 15, textAlign: 'center'}}>Better</Text>
                                                    </View>
                                                    <View style={styles.tableBodyText}>
                                                        <Text style={{fontSize: 15, textAlign: 'center'}}>Best</Text>
                                                    </View>
                                                    <View style={styles.tableBodyText2}>
                                                        <Text style={{fontSize: 15, textAlign: 'center'}}>Tốt</Text>
                                                    </View>
                                                </View>

                                                <View style={styles.tableBody}>
                                                    <View style={styles.tableBodyText1}>
                                                        <Text style={{fontSize: 15, textAlign: 'center'}}>Bad</Text>
                                                    </View>
                                                    <View style={styles.tableBodyText}>
                                                        <Text style={{fontSize: 15, textAlign: 'center'}}>Worse</Text>
                                                    </View>
                                                    <View style={styles.tableBodyText}>
                                                        <Text style={{fontSize: 15, textAlign: 'center'}}>Worst</Text>
                                                    </View>
                                                    <View style={styles.tableBodyText2}>
                                                        <Text style={{fontSize: 15, textAlign: 'center'}}>Tệ</Text>
                                                    </View>
                                                </View>

                                                <View style={styles.tableBody}>
                                                    <View style={styles.tableBodyText1}>
                                                        <Text style={{fontSize: 15, textAlign: 'center'}}>Far</Text>
                                                    </View>
                                                    <View style={styles.tableBodyText}>
                                                        <Text style={{fontSize: 15, textAlign: 'center'}}>Farther</Text>
                                                    </View>
                                                    <View style={styles.tableBodyText}>
                                                        <Text style={{fontSize: 15, textAlign: 'center'}}>The farthest/ the furthest</Text>
                                                    </View>
                                                    <View style={styles.tableBodyText2}>
                                                        <Text style={{fontSize: 15, textAlign: 'center'}}>Xa</Text>
                                                    </View>
                                                </View>

                                                <View style={styles.tableBody}>
                                                    <View style={styles.tableBodyText1}>
                                                        <Text style={{fontSize: 15, textAlign: 'center'}}>Much/Many</Text>
                                                    </View>
                                                    <View style={styles.tableBodyText}>
                                                        <Text style={{fontSize: 15, textAlign: 'center'}}>More</Text>
                                                    </View>
                                                    <View style={styles.tableBodyText}>
                                                        <Text style={{fontSize: 15, textAlign: 'center'}}>Most</Text>
                                                    </View>
                                                    <View style={styles.tableBodyText2}>
                                                        <Text style={{fontSize: 15, textAlign: 'center'}}>Nhiều</Text>
                                                    </View>
                                                </View>

                                                <View style={styles.tableBody}>
                                                    <View style={styles.tableBodyText1}>
                                                        <Text style={{fontSize: 15, textAlign: 'center'}}>Little</Text>
                                                    </View>
                                                    <View style={styles.tableBodyText}>
                                                        <Text style={{fontSize: 15, textAlign: 'center'}}>Less</Text>
                                                    </View>
                                                    <View style={styles.tableBodyText}>
                                                        <Text style={{fontSize: 15, textAlign: 'center'}}>Least</Text>
                                                    </View>
                                                    <View style={styles.tableBodyText2}>
                                                        <Text style={{fontSize: 15, textAlign: 'center'}}>Ít</Text>
                                                    </View>
                                                </View>

                                                <View style={styles.tableBody}>
                                                    <View style={styles.tableBodyText1}>
                                                        <Text style={{fontSize: 15, textAlign: 'center'}}>Old</Text>
                                                    </View>
                                                    <View style={styles.tableBodyText}>
                                                        <Text style={{fontSize: 15, textAlign: 'center'}}>Older/Elder</Text>
                                                    </View>
                                                    <View style={styles.tableBodyText}>
                                                        <Text style={{fontSize: 15, textAlign: 'center'}}>Oldest/Eldest</Text>
                                                    </View>
                                                    <View style={styles.tableBodyText2}>
                                                        <Text style={{fontSize: 15, textAlign: 'center'}}>Già</Text>
                                                    </View>
                                                </View>
                                            </View>
                                        </ScrollView>
                                    </View>
                                </View>
                            ): null}
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default ComparativeNSuperlative