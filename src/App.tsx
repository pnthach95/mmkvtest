/* eslint-disable react-native/no-color-literals */
import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import useStorage, {
  getArray,
  getArrayAsync,
  getBool,
  getBoolAsync,
  getNumber,
  getNumberAsync,
  getObject,
  getObjectAsync,
  getString,
  getStringAsync,
  remove,
} from './useMMKV';

const KEYS = {
  BOOL: 'bool',
  STRING: 'string',
  ARRAY: 'array',
  OBJECT: 'object',
  NUMBER: 'number',
};

const App = (): JSX.Element => {
  const [bool, setBool] = useStorage<boolean>(KEYS.BOOL);
  const [str, setStr] = useStorage<string>(KEYS.STRING);
  const [num, setNum] = useStorage<number>(KEYS.NUMBER);
  const [arr, setArr] = useStorage<string[]>(KEYS.ARRAY);
  const [obj, setObj] = useStorage<Record<string, string>>(KEYS.OBJECT);
  const [b, setB] = useState<boolean | null | undefined>(undefined);
  const [s, setS] = useState<string | null | undefined>(undefined);
  const [n, setN] = useState<number | null | undefined>(undefined);
  const [a, setA] = useState<string[] | null | undefined>(undefined);
  const [o, setO] = useState<Record<string, string> | null | undefined>(
    undefined,
  );

  const onPressGetBool = async () => {
    const bb = await getBoolAsync(KEYS.BOOL);
    const bbb = getBool(KEYS.BOOL);
    console.log('onPressGetBool', bb, bbb);
    setB(bb);
  };

  const onPressDeleteBool = () => {
    remove(KEYS.BOOL);
    setB(undefined);
  };

  const onPressFalse = () => {
    setBool(false);
  };

  const onPressTrue = () => {
    setBool(true);
  };

  const onPressEmptyString = () => {
    remove(KEYS.STRING);
  };

  const onPressGetString = async () => {
    const ss = await getStringAsync(KEYS.STRING);
    const sss = getString(KEYS.STRING);
    setS(ss);
    console.log('onPressGetString', ss, sss);
  };

  const onPressString = () => {
    setStr('this is a string');
  };

  const onPressDeleteNumber = () => {
    remove(KEYS.NUMBER);
  };

  const onPressGetNum = async () => {
    const nn = await getNumberAsync(KEYS.NUMBER);
    const nnn = getNumber(KEYS.NUMBER);
    setN(nn);
    console.log('onPressGetNum', nn, nnn);
  };

  const onPress0 = () => {
    setNum(0);
  };

  const onPress1 = () => {
    setNum(1);
  };

  const onPressDeleteArray = () => {
    remove(KEYS.ARRAY);
  };

  const onPressGetArray = async () => {
    const aa = await getArrayAsync(KEYS.ARRAY);
    const aaa = getArray(KEYS.ARRAY);
    console.log('onPressGetNum', aa, aaa);
    setA(aa as string[]);
  };

  const onPressSetArray = () => {
    setArr(['adfg', 'opij', '89uhion', 'o[']);
  };

  const onPressGetObject = async () => {
    const oo = await getObjectAsync(KEYS.OBJECT);
    const ooo = getObject(KEYS.OBJECT);
    console.log('onPressGetObject', oo, ooo);
    setO(oo as Record<string, string>);
  };

  const onPressSetObject = () => {
    setObj({asd: 'asd', lkj: '987'});
  };

  const onPressDeleteObject = () => {
    remove(KEYS.OBJECT);
  };

  return (
    <ScrollView style={styles.container}>
      <SafeAreaView>
        <Text>Bool from hook: {bool ? 'True' : 'False'}</Text>
        <Text>Bool from getBool: {JSON.stringify(b)}</Text>
        <View style={styles.space} />
        <Button title="Get bool" onPress={onPressGetBool} />
        <View style={styles.space} />
        <Button title="Set false" onPress={onPressFalse} />
        <View style={styles.space} />
        <Button title="Set true" onPress={onPressTrue} />
        <View style={styles.space} />
        <Button title="Delete bool" onPress={onPressDeleteBool} />
        <View style={styles.divider} />

        <Text>String from hook: {str}</Text>
        <Text>String from getString: {s}</Text>
        <View style={styles.space} />
        <Button title="Get string" onPress={onPressGetString} />
        <View style={styles.space} />
        <Button title="Set string" onPress={onPressString} />
        <View style={styles.space} />
        <Button title="Remove string" onPress={onPressEmptyString} />
        <View style={styles.divider} />

        <Text>Number from hook: {num}</Text>
        <Text>Number from getInt: {n}</Text>
        <View style={styles.space} />
        <Button title="Get number" onPress={onPressGetNum} />
        <View style={styles.space} />
        <Button title="Set 0" onPress={onPress0} />
        <View style={styles.space} />
        <Button title="Set 1" onPress={onPress1} />
        <View style={styles.space} />
        <Button title="Remove number" onPress={onPressDeleteNumber} />
        <View style={styles.divider} />

        <Text>Array from hook: {JSON.stringify(arr)}</Text>
        <Text>Array from getArray: {JSON.stringify(a)}</Text>
        <View style={styles.space} />
        <Button title="Get array" onPress={onPressGetArray} />
        <View style={styles.space} />
        <Button title="Set array" onPress={onPressSetArray} />
        <View style={styles.space} />
        <Button title="Remove array" onPress={onPressDeleteArray} />
        <View style={styles.divider} />

        <Text>Object from hook: {JSON.stringify(obj)}</Text>
        <Text>Object from getMap: {JSON.stringify(o)}</Text>
        <View style={styles.space} />
        <Button title="Get object" onPress={onPressGetObject} />
        <View style={styles.space} />
        <Button title="Set object" onPress={onPressSetObject} />
        <View style={styles.space} />
        <Button title="Remove object" onPress={onPressDeleteObject} />
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  divider: {
    backgroundColor: 'black',
    height: 1,
    marginVertical: 10,
  },
  space: {
    height: 10,
  },
});

export default App;
