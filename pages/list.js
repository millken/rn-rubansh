import React from 'react';
import {
  View, Text, FlatList, StatusBar,
  StyleSheet,
  Image
} from 'react-native';
import ImageButton from '../components/ImageButton'
import { getProducts } from '../libs/service'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    //paddingTop: StatusBar.currentHeight, //保证显示区域
  },
  statusBar: {
    height: 350,
  },
  image: {
    marginBottom: 7
  }
})
class List extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      error: null,
      refreshing: false
    };
  }


  //render 完后调用
  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest() {
    console.log('makeRemoteRequest getProducts')
    this.setState({ loading: true });
    getProducts().then(res => {
      if (res.status) { //成功时
        this.setState({
          data: [ ...res.data],
          error: res.error || null,
          loading: false
        });
        console.log(this.state.data)
      }
    }).catch(err => console.log(err))
  }

  _pressItem(id) {
    alert(id);
  };
  _renderItem = ({ item }) => {
    console.log(item)
    return (<ImageButton
      //onPress={this._onPressImage}
      source={require('../assets/dc6b3900fc3e5ae6.png')}
      style={{ width: '100%' }}
    />)
  };
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <ImageButton
              //onPress={this._pressItem.bind(this, item.productID)}
              onPress={() => this.props.navigation.navigate('Detail', {
                productID: item.productID
              })}
              image={item.imageUrl}
              style={styles.image}
            />
          )}
          keyExtractor={item => item.productID.toString()}
        />

      </View>
    );
  }
}

export default List