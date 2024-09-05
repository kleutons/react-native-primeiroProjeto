
import React, { useState } from 'react';
import { StyleSheet, Image, View, TouchableOpacity } from 'react-native';
import simbolOn from './assets/pictures/symbol-on.png';
import simbolOff from './assets/pictures/symbol-off.png';

export default function App() {

  const [active, setActive] = useState(false);


  function handleSymbol(){
    // setActive((oldValue:boolean) =>{
    //   return !oldValue
    // })
      setActive(!active);
  }

  return (
    <View style={active ? styles.containerOn : styles.containerOff}>
      <TouchableOpacity onPress={handleSymbol}>
        <Image source={active ? simbolOn : simbolOff} />
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  containerOn: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerOff: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
