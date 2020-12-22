import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Home, Account, Shop, Bind, Store} from './../../../assets/icon';
import NavIcon from './../../../components/molecules/navIcon';

class NavBar extends Component {
  render() {
    return (
      <View style={styles.bodyNavbar}>
        <NavIcon title="Home" icon={Home} onPress={() => alert()} />
        <NavIcon title="Store" icon={Store} />
        <NavIcon title="Bind" icon={Bind} />
        <NavIcon title="Keranjang" icon={Shop} />
        <NavIcon title="Account" icon={Account} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bodyNavbar: {
    backgroundColor: 'white',
    height: 42,
    flexDirection: 'row',
    paddingHorizontal: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 8},
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
  },
});
export default NavBar;
