'use strict';

import React from 'react';
import {
  View,
  Image,
  Platform,
  TouchableHighlight,
  TouchableNativeFeedback,
  Dimensions,
} from 'react-native';

let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;

export default class ImageButton extends React.Component {
  static defaultProps = {
    onPress() { },
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
      this.setState({ width: screenWidth, height: height });
    }, (err) => {
      console.log('getSize err', err)
    });

    console.log('image=', this.props.image, ',width=', this.state.width, ',height=', this.state.height)
  }

  render() {
    var TouchableElement = TouchableHighlight;
    if (Platform.OS === 'android') {
      TouchableElement = TouchableNativeFeedback;
    }

    return (
      <TouchableElement
        onPress={this.props.onPress}
        disabled={this.props.disabled}
      >
        <View style={this.props.style}>
          <Image style={[this.props.imageStyle, { width: this.state.width, height: this.state.height }]}
            source={{ uri: this.props.image }} />
        </View>
      </TouchableElement>
    );
  }
}
