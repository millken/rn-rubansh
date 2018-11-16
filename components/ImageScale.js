'use strict';

import React from 'react';
import {
  Image,
  Dimensions,
} from 'react-native';

const screenWidth = Dimensions.get('window').width;

export default class ImageScale extends React.Component {
  static defaultProps = {
    disabled: false,
  }
  constructor(props: {}) {
    super(props);

    this.state = {
      width: 0,
      height: 1,
    };
  }
  componentDidMount() {
    
    Image.getSize(this.props.uri, (width, height) => {
         height = Math.floor(screenWidth / width * height)
         this.setState({width: screenWidth, height: height});
    }, (err)=>{
      console.log('getSize err', err)
    });

}

  render() {
    return (
    <Image style={[this.props.style, {width: this.state.width, height: this.state.height}]}
           source={{uri: this.props.uri}} 
           />
    );
  }
}
