'use strict';

import React from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;

export default class ImageButton extends React.Component {
  static defaultProps = {
    onPress() {},
    disabled: false,
    resizeMode: "contain"
  }
  constructor(props: {}) {
    super(props);

    this.state = {
      width: 0,
      height: 1,
    };
  }
  componentDidMount() {
    
    Image.getSize(this.props.image, (width, height) => {
         height = screenWidth * height / width
         this.setState({width: screenWidth, height: height});
    }, (err)=>{
      console.log('getSize err', err)
    });

    console.log('image=', this.props.image, ',width=', this.state.width, ',height=', this.state.height)
}

  render() {
    return (
      <TouchableOpacity
    style={this.props.style}
    onPress={this.props.onPress}
    disabled={this.props.disabled}
  >
    <Image style={[this.props.imageStyle, {width: this.state.width, height: this.state.height}]}
           source={{uri: this.props.image}} />
  </TouchableOpacity>
    );
  }
}
