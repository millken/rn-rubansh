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
  _pressItem(id) {
    alert(id);
  };
  _renderItem = ({item}) => {
    console.log(item)
    return (<ImageButton
      //onPress={this._onPressImage}
      source={require('../assets/dc6b3900fc3e5ae6.png')}
      style={{ width: '100%'}}
    />)
  };
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
          data={[{ id:"1", image: '../assets/dc6b3900fc3e5ae6.png' }, { id:"2", image: '../assets/dc6b3900fc3e5ae6.png' }]}
          renderItem={({ item }) => (
          <ImageButton
            onPress={this._pressItem.bind(this,item.id)}
            source={require('../assets/dc6b3900fc3e5ae6.png')}
            //style={{ width: '100%'}}
          />
          )}
          keyExtractor={item => item.id}
        />

      </View>
    );
  }
}

export default List