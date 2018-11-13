<<<<<<< HEAD
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
=======
/**
 *
 * Copyright 2016-present reading
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import { ViewPropTypes, Image, TouchableOpacity } from 'react-native';

const propTypes = {
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
  source: PropTypes.object,
  style: ViewPropTypes.style,
  containerStyle: ViewPropTypes.style
};

const ImageButton = ({
  onPress, disabled, source, style, containerStyle
}) => (
  <TouchableOpacity
    style={containerStyle}
    onPress={onPress}
    disabled={disabled}
  >
    <Image style={style} source={source} />
  </TouchableOpacity>
);

ImageButton.propTypes = propTypes;

ImageButton.defaultProps = {
  onPress() {},
  disabled: false
};

export default ImageButton;
>>>>>>> 5617ef869cf31e858473288267164a5182540426
