import React from 'react';
import { View, Text, FlatList, StatusBar,
  StyleSheet,
  Image
 } from 'react-native';
 import ImageButton from '../components/ImageButton'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop:StatusBar.currentHeight, //保证显示区域
  },
  statusBar: {
    height:350,
  }
})
class List extends React.Component {
  _onPressImage = (id) => {
    console.log("id=f" ,id)
  };
  _renderItem = ({item}) => (
    <Image
      //onPress={this._onPressImage}
      source={require('../assets/dc6b3900fc3e5ae6.png')}
      style={{ width: '100%'}}
    />
  );
  render() {
    console.log("StatusBar.currentHeight=",StatusBar.currentHeight)
    return (
      <View style={styles.container}>
        <StatusBar
        backgroundColor='blue' //android设备设置背景色
        translucent={true}
          hidden={false} //隐藏
        />
        {/* <View style={styles.statusBar}>
      <Text>LFLFLFLF</Text>
        </View> */}
        <FlatList
          data={[{ key: 'a' }, { key: 'b' }]}
          renderItem={this._renderItem}
        />

      </View>
    );
  }
}

export default List