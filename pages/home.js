import React from 'react';
import { View, Button, StyleSheet, ImageBackground, Text,TouchableHighlight } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';

class Home extends React.Component {
  render() {
    return (
      <ImageBackground source={require("../assets/4867628b15e571097b5fd617126b70d6.png")} style={{ width: '100%', height: '100%' }}>
        <View style={styles.container}>

          {/* <View style={styles.button}>
            <Button
              title="立即定制"
              color="#009c5f"
              onPress={() => {
                this.props.navigation.dispatch(StackActions.reset({
                  index: 0,
                  actions: [
                    NavigationActions.navigate({ routeName: 'Detail' })
                  ],
                }))
              }}
            /></View> */}
            <TouchableHighlight
  style={styles.submit}
  onPress={() => {
    this.props.navigation.dispatch(StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'List' })
      ],
    }))
  }}
  underlayColor='#fff'>
    <Text style={styles.submitText}>立即定制</Text>
</TouchableHighlight>
        </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  button: {
    width: 200,
    position: 'absolute',
    bottom: 50,
  },
  submit:{
    position: 'absolute',
    width:174,
    height:32,
    bottom:45,
    marginLeft:40,
    backgroundColor:'#009c5f',
    borderRadius:30,
  },
  submitText:{
      paddingTop:6,
      color:'#fff',
      textAlign:'center',
      fontWeight:('bold', '700'),
  }
})

export default Home