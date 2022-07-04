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
  setArray,
  setArrayAsync,
  setBool,
  setBoolAsync,
  setNumber,
  setNumberAsync,
  setObject,
  setObjectAsync,
  setString,
  setStringAsync,
} from './useMMKV';

const KEYS = {
  BOOL: 'my_bool',
  STRING: 'my_string',
  ARRAY: 'my_array',
  OBJECT: 'my_object',
  NUMBER: 'my_number',
};

const App = (): JSX.Element => {
  const [bool, setBoolHook] = useStorage<boolean>(KEYS.BOOL);
  const [str, setStrHook] = useStorage<string>(KEYS.STRING);
  const [num, setNumHook] = useStorage<number>(KEYS.NUMBER);
  const [arr, setArrHook] = useStorage<string[]>(KEYS.ARRAY);
  const [obj, setObjHook] = useStorage<Record<string, string>>(KEYS.OBJECT);
  const [b, setB] = useState<boolean | null | undefined>(undefined);
  const [s, setS] = useState<string | null | undefined>(undefined);
  const [n, setN] = useState<number | null | undefined>(undefined);
  const [a, setA] = useState<string[] | null | undefined>(undefined);
  const [o, setO] = useState<Record<string, string> | null | undefined>(
    undefined,
  );

  const onPressGetBool = () => {
    const bb = getBool(KEYS.BOOL);
    console.log('onPressGetBool', bb);
    setB(bb);
  };

  const onPressGetBoolAsync = async () => {
    const bb = await getBoolAsync(KEYS.BOOL);
    console.log('onPressGetBoolAsync', bb);
    setB(bb);
  };

  const onPressDeleteBool = () => {
    remove(KEYS.BOOL);
    setB(undefined);
    console.log('Removed', KEYS.BOOL);
  };

  const onPressFalse = async () => {
    setBoolHook(false);
    await setBoolAsync(KEYS.BOOL, false);
    setBool(KEYS.BOOL, false);
  };

  const onPressTrue = async () => {
    setBoolHook(true);
    await setBoolAsync(KEYS.BOOL, true);
    setBool(KEYS.BOOL, true);
  };

  const onPressEmptyString = () => {
    remove(KEYS.STRING);
    setS(undefined);
    console.log('Removed', KEYS.STRING);
  };

  const onPressGetString = () => {
    const ss = getString(KEYS.STRING);
    setS(ss);
    console.log('onPressGetString', ss);
  };

  const onPressGetStringAsync = async () => {
    const ss = await getStringAsync(KEYS.STRING);
    setS(ss);
    console.log('onPressGetStringAsync', ss);
  };

  const onPressSetString = async () => {
    setStrHook('this is a string');
    await setStringAsync(KEYS.STRING, 'this is a string');
    setString(KEYS.STRING, 'this is a string');
  };

  const onPressDeleteNumber = () => {
    remove(KEYS.NUMBER);
    setN(undefined);
    console.log('Removed', KEYS.NUMBER);
  };

  const onPressGetNum = () => {
    const nn = getNumber(KEYS.NUMBER);
    setN(nn);
    console.log('onPressGetNum', nn);
  };

  const onPressGetNumAsync = async () => {
    const nn = await getNumberAsync(KEYS.NUMBER);
    setN(nn);
    console.log('onPressGetNumAsync', nn);
  };

  const onPressSetNum = async () => {
    setNumHook(42);
    await setNumberAsync(KEYS.NUMBER, 42);
    setNumber(KEYS.NUMBER, 42);
  };

  const onPressDeleteArray = () => {
    remove(KEYS.ARRAY);
    setA(undefined);
    console.log('Removed', KEYS.ARRAY);
  };

  const onPressGetArray = () => {
    const aa = getArray(KEYS.ARRAY);
    console.log('onPressGetNum', aa);
    setA(aa as string[]);
  };

  const onPressGetArrayAsync = async () => {
    const aa = await getArrayAsync(KEYS.ARRAY);
    console.log('onPressGetNum', aa);
    setA(aa as string[]);
  };

  const onPressSetArray = async () => {
    const x = ['adfg', 'opij', '89uhion', 'ooo'];
    setArrHook(x);
    await setArrayAsync(KEYS.ARRAY, x);
    setArray(KEYS.ARRAY, x);
  };

  const onPressGetObject = () => {
    const oo = getObject(KEYS.OBJECT);
    console.log('onPressGetObject', oo);
    setO(oo as Record<string, string>);
  };

  const onPressGetObjectAsync = async () => {
    const oo = await getObjectAsync(KEYS.OBJECT);
    console.log('onPressGetObject', oo);
    setO(oo as Record<string, string>);
  };

  const onPressSetObject = async () => {
    const x = {asd: 'asd', lkj: '987'};
    setObjHook(x);
    await setObjectAsync(KEYS.OBJECT, x);
    setObject(KEYS.OBJECT, x);
  };

  const onPressDeleteObject = () => {
    remove(KEYS.OBJECT);
    setO(undefined);
    console.log('Removed', KEYS.OBJECT);
  };

  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}>
        <Text>Bool from hook: {JSON.stringify(bool)}</Text>
        <Text>Bool from getBool: {JSON.stringify(b)}</Text>
        <View style={styles.row}>
          <Button title="Get bool" onPress={onPressGetBool} />
          <Button title="Get bool async" onPress={onPressGetBoolAsync} />
        </View>
        <View style={styles.row}>
          <Button title="Set false" onPress={onPressFalse} />
          <Button title="Set true" onPress={onPressTrue} />
        </View>
        <View style={styles.space} />
        <Button title="Remove bool" onPress={onPressDeleteBool} />
        <View style={styles.divider} />

        <Text>String from hook: {str}</Text>
        <Text>String from getString: {s}</Text>
        <View style={styles.row}>
          <Button title="Get string" onPress={onPressGetString} />
          <Button title="Get string async" onPress={onPressGetStringAsync} />
        </View>
        <View style={styles.row}>
          <Button title="Set string" onPress={onPressSetString} />
          <Button title="Remove string" onPress={onPressEmptyString} />
        </View>
        <View style={styles.divider} />

        <Text>Number from hook: {num}</Text>
        <Text>Number from getInt: {n}</Text>
        <View style={styles.row}>
          <Button title="Get number" onPress={onPressGetNum} />
          <Button title="Get number async" onPress={onPressGetNumAsync} />
        </View>
        <View style={styles.row}>
          <Button title="Set number" onPress={onPressSetNum} />
          <Button title="Remove number" onPress={onPressDeleteNumber} />
        </View>
        <View style={styles.divider} />

        <Text>Array from hook: {JSON.stringify(arr)}</Text>
        <Text>Array from getArray: {JSON.stringify(a)}</Text>
        <View style={styles.row}>
          <Button title="Get array" onPress={onPressGetArray} />
          <Button title="Get array async" onPress={onPressGetArrayAsync} />
        </View>
        <View style={styles.row}>
          <Button title="Set array" onPress={onPressSetArray} />
          <Button title="Remove array" onPress={onPressDeleteArray} />
        </View>
        <View style={styles.divider} />

        <Text>Object from hook: {JSON.stringify(obj)}</Text>
        <Text>Object from getMap: {JSON.stringify(o)}</Text>
        <View style={styles.row}>
          <Button title="Get object" onPress={onPressGetObject} />
          <Button title="Get object async" onPress={onPressGetObjectAsync} />
        </View>
        <View style={styles.row}>
          <Button title="Set object" onPress={onPressSetObject} />
          <Button title="Remove object" onPress={onPressDeleteObject} />
        </View>
      </ScrollView>
    </SafeAreaView>
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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10,
  },
  space: {
    height: 10,
  },
});

export default App;
