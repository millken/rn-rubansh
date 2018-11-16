'use strict';

import React from 'react';
import {
  View,
  Text,
  Platform,
  TouchableHighlight,
  TouchableNativeFeedback,
} from 'react-native';

export default class TextButton extends React.Component {
  static defaultProps = {
    onPress() { },
    disabled: false,
    title: "title"
  }
  constructor(props: {}) {
    super(props);
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
          <Text style={this.props.buttonStyle}>{this.props.title}</Text>
        </View>
      </TouchableElement>
    );
  }
}
