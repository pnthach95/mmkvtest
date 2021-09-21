/* eslint-disable react-native/no-color-literals */
import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import useStorage from './useMMKV';

const App = () => {
  const [bool, setBool] = useStorage('bool');
  const [str, setStr] = useStorage('string');
  const [num, setNum] = useStorage('num');

  const onPressFalse = () => {
    setBool(false);
  }

  const onPressTrue = () => {
    setBool(true);
  }

  const onPressEmptyString = () => {
    setStr('');
  }

  const onPressString = () => {
    setStr('this is a string');
  }

  const onPress0 = () => {
    setNum(0)
  }

  const onPress1 = () => {
    setNum(1)
  }

  return <View style={styles.container}>
    <Text>{bool ? 'True' : 'False'}</Text>
    <View style={styles.space}/>
    <Button title='Set false' onPress={onPressFalse} />
    <View style={styles.space}/>
    <Button title='Set true' onPress={onPressTrue} />
    <View style={styles.divider} />
    <Text>{str}</Text>
    <View style={styles.space}/>
    <Button title='Set empty string' onPress={onPressEmptyString} />
    <View style={styles.space}/>
    <Button title='Set string' onPress={onPressString} />
    <View style={styles.divider} />
    <Text>{num}</Text>
    <View style={styles.space}/>
    <Button title='Set 0' onPress={onPress0} />
    <View style={styles.space}/>
    <Button title='Set 1' onPress={onPress1} />
  </View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  divider:{
    backgroundColor: 'black',
    height: 1,
    marginVertical: 10,
  },
  space:{
    height: 10,
  },
});

export default App;
