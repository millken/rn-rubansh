import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet,
  Image,
  ScrollView,
  ImageBackground
 } from 'react-native';
import TextButton from '../components/TextButton';
import ImageScale from '../components/ImageScale';
import Swiper from '../components/swiper';
import { getProduct } from '../libs/service';

const bannerImage = [
  "https://wx.rubansh.com/rubansh/b81a47f1253854bd.jpg",
 "https://wx.rubansh.com/rubansh/a71001d2e3598842.jpg",
 "https://wx.rubansh.com/rubansh/78134bfb06d52b0f.jpg",
 "https://wx.rubansh.com/rubansh/8f7bef2b3fb7b4c5.jpg",
 "https://wx.rubansh.com/rubansh/20932d55e71c5239.jpg"
];

const detailImage = [
  "https://wx.rubansh.com/rubansh/c419be935c2671a3.jpg",
 "https://wx.rubansh.com/rubansh/641ff835db1ee74e.jpg",
 "https://wx.rubansh.com/rubansh/2d0a28ede208ca05.jpg",
 "https://wx.rubansh.com/rubansh/b6016aef0f447e42.jpg"
]


class Detail extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      error: null,
      refreshing: false,
      bannerImage: null,
      detailImage: null,
    };
  }


  componentWillMount() {}

  //render 完后调用
  componentDidMount() {
    const { navigation } = this.props;
    const productID = navigation.getParam('productID', 0);
    console.log('productID=', productID)

    this.setState({ loading: true });
    getProduct({productID: productID}).then(res => {
      if (res.status) { //成功时
        let data = res.data || {}
        this.setState({
          productID:productID,
          name: data.name,
          price: data.price,
          bannerImage: data.productImage || [],
          detailImage: data.detailImage || [],
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
      {
        this.state.bannerImage === null ?
        <View />
        :
        (
        <ScrollView> 
        <Swiper 
        loop={true}
        style={styles.wrapper}
        showsButtons={true}
        autoplay={true}
        >
        {
this.state.bannerImage.map(( uri , index) => {
              return (
                <ImageBackground key={index} source={{uri: uri}} style={{ width: '100%', height: '100%' }} />
              );
            })
          }
      </Swiper>
        
          <View style={{flex:1,flexDirection:'row',justifyContent: 'flex-end', marginLeft:10,marginRight:10, height:40, paddingTop:10}}>
          <Text style={{ width:'80%'}}>{this.state.name || ''}</Text>
          <Text style={{color:'red', width:70}}>￥ {this.state.price || ''}</Text>
          </View>
          <View>
          {
            this.state.detailImage.map(( uri , index) => {
              return (
                <ImageScale 
                key={index} uri={uri} />
              );
            })
          }
          </View>
        
        </ScrollView>
        )
      }
        <View style={styles.buttomArea}>
          <TextButton
           onPress={() => this.props.navigation.navigate('List')}
            style={styles.homeButton}
            buttonStyle={{textAlign:'center',color:'#161616',fontSize: 18,paddingTop:10}}
            title="返回首页"
          />
          <TextButton
            style={styles.buyButton}
            onPress={() => this.props.navigation.navigate('Custom', {
              productID: this.state.productID
            })}
            buttonStyle={{textAlign:'center',color:'#fff',fontSize: 18,paddingTop:10}}
            title="立即定制"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  buttomArea: {
    flex: 1,
    position: 'absolute',
    bottom:0,
    left:0,
    height:45,
    width: '100%',
    flexDirection: 'row',
  },
  homeButton: {
    width: '50%',
    textAlign:'center',
    backgroundColor: '#b5b5b5',
  },
  buyButton: {
    width: '50%',
    alignContent:"center",
    backgroundColor: '#009c5f',
  },
  wrapper: {
    flex:1,
    height:300,
  }
})
export default Detail