import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ImageBackground,
    ScrollView,
    TextInput
} from 'react-native';
import TextButton from '../components/TextButton';
import ImageScale from '../components/ImageScale';
import { getProductCustomOption } from '../libs/service';

const demoData = [
    {
        data: [],
        id: 367,
        imageUrl: "https://wx.rubansh.com/rubansh/d4c6d4421bf70643.png",
        key: "2339096187728a27fb31e0c509d08ad6",
        name: "测试TEXT",
        type: "text",
    },
    {
        data: [
            { optionID: 1861, name: "测试4", type: "radio", description: "测试", imageUrl: "https://wx.rubansh.com/rubansh/6298e40c958da79b.png", isDefault: false },
            { optionID: 1861, name: "测试2", type: "radio", description: "测试", imageUrl: "https://wx.rubansh.com/rubansh/6298e40c958da79b.png", isDefault: false },
            { optionID: 1861, name: "测试1", type: "radio", description: "测试", imageUrl: "https://wx.rubansh.com/rubansh/6298e40c958da79b.png", isDefault: false }
        ],
        id: 365,
        imageUrl: "https://wx.rubansh.com/rubansh/d4c6d4421bf70643.png",
        key: "5313c899a60feb53603713711a0aabf7",
        name: "测试",
        type: "radio",
    }
]

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'column',
    },
    buttomArea: {
        flex: 1,
        position: 'absolute',
        bottom: 0,
        left: 0,
        height: 45,
        width: '100%',
        flexDirection: 'row',
    },
    homeButton: {
        width: '50%',
        textAlign: 'center',
        backgroundColor: '#b5b5b5',
    },
    buyButton: {
        width: '50%',
        alignContent: "center",
        backgroundColor: '#009c5f',
    }
})

const InputCustom = ({ backgroundColor, ...props }) => (
    <View style={[styles.statusBar, { backgroundColor }]}>
        <TextInput {...props}>aaaa</TextInput>
    </View>
);

export default class Component extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            data: [],
            error: null,
            refreshing: false,
            productID: 0,
            detailImage: null,
        };
    }


    componentWillMount() {
        const { navigation } = this.props;
        const productID = navigation.getParam('productID', 0);
        this.setState({ loading: true, productID: productID });
        getProductCustomOption({ productID: productID }).then(res => {
            if (res.status) { //成功时
                let data = res.data || {}
                this.setState({
                    error: res.error || null,
                    loading: false
                });
                console.log(this.state.data)
            }
        }).catch(err => console.log(err))
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={{ paddingVertical: 10 }}>
                        <View
                            style={{ flex: 1, flexDirection: "row", borderLeftWidth: 6, marginBottom: 6, borderLeftColor: '#009c5f', borderStyle: 'solid' }}
                        ><Image source={{ uri: 'https://wx.rubansh.com/50/rubansh/d4c6d4421bf70643.png' }} style={{ marginHorizontal: 10, marginTop: 1, width: 20, height: 20 }} /><Text
                            style={{ fontSize: 17, color: '#959595' }}
                        >测试文本框输入</Text>
                        </View>
                        <View
                            style={{ alignSelf: "center", height: 40, width: '90%', alignItems: "center" }}
                        >
                            <TextInput
                                style={{ backgroundColor: '#eee', paddingLeft: 6, color: '#757575', height: '100%', width: '100%', borderRadius: 6 }}
                            >这个是输入的</TextInput></View>
                    </View>

                    <View style={{ paddingVertical: 10 }}>
                        <View
                            style={{ flex: 1, flexDirection: "row", borderLeftWidth: 6, marginBottom: 6, borderLeftColor: '#009c5f', borderStyle: 'solid' }}
                        ><Image source={{ uri: 'https://wx.rubansh.com/50/rubansh/d4c6d4421bf70643.png' }} style={{ marginHorizontal: 10, marginTop: 1, width: 20, height: 20 }} /><Text
                            style={{ fontSize: 17, color: '#959595' }}
                        >选择框</Text>
                        </View>
                        <View
                            style={{ width: '100%' }}
                        >
                            <View style={{ flex: 1, flexDirection: 'row', flexWrap: "wrap" }}>
                                <View style={{ width: 130, margin: 1 }}>
                                    <View style={{backgroundColor: 'powderblue', alignItems :"center",borderStyle:"solid"}}>
                                        <Image source={{ uri: 'https://wx.rubansh.com/130/rubansh/6298e40c958da79b.png' }} style={{width: 130, height: 85 }} />
                                    </View>
                                    <Text style={{ color: '#272727', fontSize: 14 }}>2标准身材</Text>
                                    <Text style={{ color: '#737373', fontSize: 12 }}>标准身材的介绍,标准身材的介绍,标准身材的介绍</Text>
                                </View>
                                <View style={{ width: 130, backgroundColor: 'powderblue', margin: 1 }}>
                                    <View>
                                        <Image source={{ uri: 'https://wx.rubansh.com/130/rubansh/6298e40c958da79b.png' }} style={{ width: 120, height: 85 }} />
                                    </View>
                                    <Text style={{ color: '#272727', fontSize: 14 }}>标准身材</Text>
                                    <Text style={{ color: '#737373', fontSize: 12 }}>标准身材的介绍,标准身材的介绍,标准身材的介绍</Text>
                                </View>
                                <View style={{ width: 130, backgroundColor: 'powderblue', margin: 1 }}>
                                    <View>
                                        <Image source={{ uri: 'https://wx.rubansh.com/130/rubansh/6298e40c958da79b.png' }} style={{ width: 120, height: 85 }} />
                                    </View>
                                    <Text style={{ color: '#272727', fontSize: 14 }}>标准身材</Text>
                                    <Text style={{ color: '#737373', fontSize: 12 }}>标准身材的介绍,标准身材的介绍,标准身材的介绍</Text>
                                </View>
                                <View style={{ width: 130, backgroundColor: 'powderblue', margin: 1 }}>
                                    <View>
                                        <Image source={{ uri: 'https://wx.rubansh.com/130/rubansh/6298e40c958da79b.png' }} style={{ width: 120, height: 85 }} />
                                    </View>
                                    <Text style={{ color: '#272727', fontSize: 14 }}>标准身材</Text>
                                    <Text style={{ color: '#737373', fontSize: 12 }}>标准身材的介绍,标准身材的介绍,标准身材的介绍</Text>
                                </View>
                            </View>

                        </View>
                    </View>

                </ScrollView>
                <View style={styles.buttomArea}>
                    <TextButton
                        onPress={() => this.props.navigation.navigate('Detail', {
                            productID: this.state.productID
                        })}
                        style={styles.homeButton}
                        buttonStyle={{ textAlign: 'center', color: '#161616', fontSize: 18, paddingTop: 10 }}
                        title="返回商品页"
                    />
                    <TextButton
                        style={styles.buyButton}
                        buttonStyle={{ textAlign: 'center', color: '#fff', fontSize: 18, paddingTop: 10 }}
                        title="下一步"
                    />
                </View>
            </View>
        );
    }
}

