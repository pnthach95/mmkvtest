import {MMKVLoader, useMMKVStorage} from 'react-native-mmkv-storage';
import mmkvFlipper from 'rn-mmkv-storage-flipper';

const MMKV = new MMKVLoader()
  .withInstanceID('test')
  .withEncryption()
  .initialize();

if (__DEV__) {
  mmkvFlipper(MMKV);
}

const useStorage = <T>(key: string, defaultValue?: T) => {
  const m = useMMKVStorage(key, MMKV, defaultValue);
  return m;
};

//#region STRING
export const getStringAsync = async (key: string) => {
  try {
    const s = await MMKV.getStringAsync(key);
    return s;
  } catch (error) {
    return '';
  }
};

export const getString = (key: string) => {
  try {
    const s = MMKV.getString(key);
    return s;
  } catch (error) {
    return '';
  }
};

export const setStringAsync = async (key: string, value: string) => {
  try {
    await MMKV.setStringAsync(key, value);
  } catch (error) {
    console.log(`${key} error`, error);
  }
};

export const setString = (key: string, value: string) => {
  try {
    MMKV.setString(key, value);
  } catch (error) {
    console.log(`${key} error`, error);
  }
};
//#endregion

//#region BOOLEAN
export const getBoolAsync = async (key: string) => {
  try {
    const o = await MMKV.getBoolAsync(key);
    return o;
  } catch (error) {
    return false;
  }
};

export const getBool = (key: string) => {
  try {
    const o = MMKV.getBool(key);
    return o;
  } catch (error) {
    return false;
  }
};

export const setBoolAsync = async (key: string, value: boolean) => {
  try {
    await MMKV.setBoolAsync(key, value);
  } catch (error) {
    console.log(`${key} error`, error);
  }
};

export const setBool = (key: string, value: boolean) => {
  try {
    MMKV.setBool(key, value);
  } catch (error) {
    console.log(`${key} error`, error);
  }
};
//#endregion

//#region ARRAY
export const getArrayAsync = async (key: string) => {
  try {
    const a = await MMKV.getArrayAsync(key);
    return a;
  } catch (error) {
    return [];
  }
};

export const getArray = (key: string) => {
  try {
    const a = MMKV.getArray(key);
    return a;
  } catch (error) {
    return [];
  }
};

export const setArrayAsync = async (key: string, value: unknown[]) => {
  try {
    await MMKV.setArrayAsync(key, value);
  } catch (error) {
    console.log(error);
  }
};

export const setArray = (key: string, value: unknown[]) => {
  try {
    MMKV.setArray(key, value);
  } catch (error) {
    console.log(error);
  }
};
//#endregion

//#region OBJECT
export const getObjectAsync = async (key: string) => {
  try {
    const o = await MMKV.getMapAsync(key);
    return o;
  } catch (error) {
    return {};
  }
};

export const getObject = (key: string) => {
  try {
    const o = MMKV.getMap(key);
    return o;
  } catch (error) {
    return {};
  }
};

export const setObjectAsync = async (
  key: string,
  value: Record<string, unknown>,
) => {
  try {
    await MMKV.setMapAsync(key, value);
  } catch (error) {
    console.log(error);
  }
};

export const setObject = (key: string, value: Record<string, unknown>) => {
  try {
    MMKV.setMap(key, value);
  } catch (error) {
    console.log(error);
  }
};
//#endregion

//#region NUMBER
export const getNumberAsync = async (key: string) => {
  try {
    const n = await MMKV.getIntAsync(key);
    return n;
  } catch (error) {
    return 0;
  }
};

export const getNumber = (key: string) => {
  try {
    const n = MMKV.getInt(key);
    return n;
  } catch (error) {
    return 0;
  }
};

export const setNumberAsync = async (key: string, value: number) => {
  try {
    await MMKV.setIntAsync(key, value);
  } catch (error) {
    console.log(error);
  }
};

export const setNumber = (key: string, value: number) => {
  try {
    MMKV.setInt(key, value);
  } catch (error) {
    console.log(error);
  }
};
//#endregion

export const remove = (key: string) => {
  try {
    MMKV.removeItem(key);
  } catch (error) {
    console.log(`remove ${key} error`, error);
  }
};

export default useStorage;
