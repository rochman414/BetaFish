import React from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import {Zoom, Mail, Notif} from './../../../assets/icon';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const SearchFeature = () => {
  return (
    <View
      style={{
        height: 40,
        flexDirection: 'row',
        backgroundColor: 'white',
        paddingHorizontal: 5,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2.5},
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 6,
      }}>
      <View style={{flexDirection: 'row', flex: 1}}>
        <View
          style={{
            marginTop: 5,
            height: 32,
            marginLeft: 5,
            backgroundColor: 'white',
            borderRadius: 10,
          }}>
          <TextInput
            placeholder={'Cari Apa gans ?'}
            style={{
              borderWidth: 0.3,
              width: wp('75%'),
              justifyContent: 'center',
              borderRadius: 10,
              borderColor: 'grey',
              paddingLeft: 35,
              paddingRight: 20,
              fontSize: 11,
              fontWeight: '500',
              position: 'relative',
            }}></TextInput>
          <Zoom
            width={24}
            height={24}
            fill={'grey'}
            position={'absolute'}
            margin={(4, 5)}></Zoom>
        </View>
        <TouchableOpacity
          style={{
            paddingHorizontal: 5,
            width: wp('11%'),
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Mail width={24} height={24} fill={'grey'} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: wp('12.5%'),
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Notif width={24} height={24} fill={'grey'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default SearchFeature;
