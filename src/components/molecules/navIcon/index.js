import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const NavIcon = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <View>
        <props.icon
          width={24}
          height={24}
          fill={props.active ? 'green' : 'grey'}
        />
      </View>
      <Text
        style={{
          justifyContent: 'center',
          fontSize: props.active ? 11 : 10,
          textAlign: 'center',
          color: props.active ? 'green' : 'grey',
        }}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

export default NavIcon;
