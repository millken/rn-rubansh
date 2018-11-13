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
      height: 0,
    };
  }
  componentDidMount() {
    // Image.getSize(this.props.source, (width, height) => {
    //     // height = Math.floor(screenWidth * height / width); //按照屏幕宽度进行等比缩放
    //     // this.setState({screenWidth, height});
    // });
}

  render() {
    return (
      <TouchableOpacity
    style={this.props.style}
    onPress={this.props.onPress}
    disabled={this.props.disabled}
  >
    <Image style={ this.props.imageStyle } source={ this.props.source} resizeMode={this.props.resizeMode} />
  </TouchableOpacity>
    );
  }
}
