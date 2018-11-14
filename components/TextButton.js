'use strict';

import React from 'react';
import {
    Text,
  TouchableOpacity,
} from 'react-native';

export default class TextButton extends React.Component {
  static defaultProps = {
    onPress() {},
    disabled: false,
    title: "title"
  }
  constructor(props: {}) {
    super(props);

    this.state = {
      width: 0,
      height: 1,
    };
  }

  render() {
    return (
      <TouchableOpacity
    style={this.props.style}
    onPress={this.props.onPress}
    disabled={this.props.disabled}
  >
  <Text style={this.props.textStyle}>{this.props.title}</Text>
  </TouchableOpacity>
    );
  }
}
