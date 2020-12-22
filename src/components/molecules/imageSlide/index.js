import React, {Component} from 'react';
import {View} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import {Logo} from './../../../assets/icon';
import {FastImage} from 'react-native-fast-image';

export default class ImageSlide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        require('./../../../assets/images/cupang1.jpg'),
        require('./../../../assets/images/cupangg-2-lagi.jpg'),
        require('./../../../assets/images/cupangg-3-lagi.jpg'),
      ],
    };
  }
  render() {
    return (
      <View>
        <View style={{flex: 1, marginTop: 10, position: 'relative'}}>
          <SliderBox
            ImageComponent={FastImage}
            images={this.state.images}
            sliderBoxHeight={110}
            onCurrentImagePressed={(index) =>
              console.warn(`image ${index} pressed`)
            }
            dotColor="#FFEE58"
            inactiveDotColor="#90A4AE"
            paginationBoxVerticalPadding={20}
            autoplay
            circleLoop
            resizeMethod={'resize'}
            resizeMode={'cover'}
            paginationBoxStyle={{
              position: 'absolute',
              bottom: 5,
              padding: 0,
              alignItems: 'center',
              alignSelf: 'center',
              justifyContent: 'center',
              paddingVertical: 5,
            }}
            dotStyle={{
              width: 7,
              height: 7,
              borderRadius: 3.5,
              marginHorizontal: 0,
              padding: 0,
              margin: 0,
              backgroundColor: 'rgba(128, 128, 128, 128)',
            }}
            ImageComponentStyle={{
              borderRadius: 10,
              width: '95%',
            }}
            imageLoadingColor="#2196F3"
          />
        </View>
        <View style={{position: 'absolute', width: '100%', height: '100%'}}>
          <Logo width={50} height={100} paddingLeft={107} marginTop={7} />
        </View>
      </View>
    );
  }
}
