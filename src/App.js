/* eslint-disable react-native/no-color-literals */
import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import useStorage from './useMMKV';

const App = () => {
  const [bool, setBool] = useStorage('bool');

  const onPressFalse = () => {
    setBool(false);
  }

  const onPressTrue = () => {
    setBool(true);
  }

  return <View style={styles.container}>
    <Text>{bool ? 'True' : 'False'}</Text>
    <View style={styles.space}/>
    <Button title='Set false' onPress={onPressFalse} />
    <View style={styles.space}/>
    <Button title='Set true' onPress={onPressTrue} />
  </View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  space:{
    height: 10,
  },
});

export default App;
