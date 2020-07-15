/* eslint-disable react-native/no-color-literals */
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, TouchableOpacity } from 'react-native';

import { setString, setBool, getString, getBool, remove } from './mmkv';

const App = () => {
  const [user, setUser] = useState({
    username: '',
    password: '',
  });
  const [isSaveData, setIsSaveData] = useState(false);
  const [login, setLogin] = useState(false);
  const keys = {
    SAVE_DATA: 'SaveData',
    USERNAME: 'Username',
    PASSWORD: 'Password',
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const sd = await getBool(keys.SAVE_DATA);
        setIsSaveData(sd);
        if (sd) {
          const username = await getString(keys.USERNAME);
          const password = await getString(keys.PASSWORD);
          setUser({ username, password });
        }
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  const setUsername = (username) => setUser({ ...user, username });

  const setPassword = (password) => setUser({ ...user, password });

  const toggleSaveData = () => setIsSaveData(!isSaveData);

  const onLogin = async () => {
    if (user.username.length > 0 && user.password.length > 0) {
      try {
        await setBool(keys.SAVE_DATA, isSaveData);
        if (isSaveData) {
          await setString(keys.USERNAME, user.username);
          await setString(keys.PASSWORD, user.password);
        } else {
          await remove(keys.USERNAME);
          await remove(keys.PASSWORD);
        }
      }
      catch (error) {
        console.log(error);
      }
      finally {
        setLogin(true);
      }
    }
  };

  return <View style={styles.container}>
    <Text>Username</Text>
    <TextInput value={user.username}
      style={styles.textInput}
      onChangeText={setUsername} />
    <Text>Password</Text>
    <TextInput value={user.password}
      style={styles.textInput}
      onChangeText={setPassword} />
    <TouchableOpacity onPress={toggleSaveData}
      style={styles.saveData}>
      <Text>{isSaveData ? '✅' : '🟩'} Save data</Text>
    </TouchableOpacity>
    <Button title='Log in' onPress={onLogin} />
    {login && <Text>Login success</Text>}
  </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  saveData: {
    paddingVertical: 10,
  },
  textInput: {
    borderColor: 'black',
    borderWidth: 1,
  },
});

export default App;
