import React, { useState } from 'react';
import { Text, View, FlatList, TouchableOpacity, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import constant from "../../../../Constants/Colors"
import * as roleInterstedArray from "../../../../Constants/StaticArray"
import styles from './style';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "../../../../Utility/index"
import { Input } from "react-native-elements"
import Buttons from "../../../../Components/Buttons"
import { Header } from '../../../../Components/commonHeader';
import { images } from '../../../../Constants/images';
var data =
    [
        { key: 'Android' }, { key: 'iOS' }, { key: 'Java' }, { key: 'Swift' },
        { key: 'Php' }, { key: 'Hadoop' },
    ]

const FiltterScreen = () => {
    const [roleArray, setRoleArray] = useState(roleInterstedArray.roleInterstedArray)
    const [selectedDegree, setSelectedDegree] = useState('')
    const changeValue = (itemSelected, index) => {
        const newData = roleArray.map(item => {
            if (item.id == itemSelected.id) {
                return {
                    ...item,
                    selected: !item.selected,
                };
            }
            return {
                ...item,
                selected: item.selected,
            };
        });
        setRoleArray(newData);

    };


    return (
        <View style={{ backgroundColor: constant.white_Colors, flex: 1 }}>

            <Header
                headerText={"Filters"}
                back_icons={false}
                right_side
            />
            <View style={{ marginVertical: wp("3%") }} />
            <ScrollView style={styles.main_row}>
                <View style={styles.title_row}>
                    <Text style={styles.titleTxt}>
                        Current Role
                     </Text>
                    <Image source={images.image_add} style={styles.img_animated} />
                </View>

                <View style={styles.inner_row}>
                    <View style={styles.paddder}>
                        <Image source={images.remove} style={styles.close_ic}></Image>
                        <Text style={styles.black_regular}>Uber</Text>
                    </View>
                    <View style={styles.paddder}>
                        <Image source={images.remove} style={styles.close_ic}></Image>
                        <Text style={styles.black_regular}>Apple</Text>
                    </View>
                </View>


                <>
                    <View style={{ marginVertical: wp("5%") }} />
                    <View style={styles.title_row}>
                        <Text style={styles.titleTxt}>
                            Current Company
                     </Text>
                        <Image source={images.image_add} style={styles.img_animated} />
                    </View>

                    <View style={styles.inner_row}>
                        <View style={styles.paddder}>
                            <Image source={images.remove} style={styles.close_ic}></Image>
                            <Text style={styles.black_regular}>AWS</Text>
                        </View>
                        <View style={styles.paddder}>
                            <Image source={images.remove} style={styles.close_ic}></Image>
                            <Text style={styles.black_regular}>Python</Text>
                        </View>
                    </View>
                </>

                <>
                    <View style={{ marginVertical: wp("5%") }} />
                    <View style={styles.title_row}>
                        <Text style={styles.titleTxt}>
                            Skills
                     </Text>
                        <Image source={images.image_add} style={styles.img_animated} />
                    </View>

                    <View style={styles.inner_row}>
                        <View style={styles.paddder}>
                            <Image source={images.remove} style={styles.close_ic}></Image>
                            <Text style={styles.black_regular}>AWS</Text>
                        </View>
                        <View style={styles.paddder}>
                            <Image source={images.remove} style={styles.close_ic}></Image>
                            <Text style={styles.black_regular}>Python</Text>
                        </View>
                    </View>
                </>

                <>
                    <View style={{ marginVertical: wp("5%") }} />
                    <View style={styles.title_row}>
                        <Text style={styles.titleTxt}>
                            Looking For
                     </Text>
                        <Image source={images.image_add} style={styles.img_animated} />
                    </View>

                    <View style={styles.inner_row}>
                        <View style={styles.paddder}>
                            <Image source={images.remove} style={styles.close_ic}></Image>
                            <Text style={styles.black_regular}>AWS</Text>
                        </View>
                        <View style={styles.paddder}>
                            <Image source={images.remove} style={styles.close_ic}></Image>
                            <Text style={styles.black_regular}>Python</Text>
                        </View>
                    </View>
                </>

                <>
                    <View style={{ marginVertical: wp("5%") }} />
                    <View style={styles.title_row}>
                        <Text style={styles.titleTxt}>
                            Gender
                     </Text>
                        <Image source={images.image_add} style={styles.img_animated} />
                    </View>

                    <View style={styles.inner_row}>
                        <View style={styles.paddder}>
                            <Image source={images.remove} style={styles.close_ic}></Image>
                            <Text style={styles.black_regular}>Male</Text>
                        </View>
                        <View style={styles.paddder}>
                            <Image source={images.remove} style={styles.close_ic}></Image>
                            <Text style={styles.black_regular}>Female</Text>
                        </View>
                    </View>
                </>

            </ScrollView>

        </View>
    );
}

export default React.memo(FiltterScreen);















