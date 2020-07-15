import MMKVStorage from 'react-native-mmkv-storage';

const MMKV = new MMKVStorage.Loader()
  .withInstanceID('account')
  .withEncryption()
  .initialize();

const getString = async (key) => {
  try {
    const s = await MMKV.getStringAsync(key);
    return s;
  } catch (error) {
    return '';
  }
};

const setString = async (key, value) => {
  try {
    await MMKV.setStringAsync(key, value);
  } catch (error) {
    console.log(`${key} error`, error);
  }
};

const getBool = async (key) => {
  try {
    const o = await MMKV.getBoolAsync(key);
    return o;
  } catch (error) {
    return false;
  }
};

const setBool = async (key, value) => {
  try {
    await MMKV.setBoolAsync(key, value);
  } catch (error) {
    console.log(`${key} error`, error);
  }
};

const remove = async (key) => {
  try {
    await MMKV.removeItem(key);
  } catch (error) {
    console.log(`remove ${key} error`, error);
  }
};

export { getString, setString, getBool, setBool, remove };
