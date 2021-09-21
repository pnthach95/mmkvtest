import MMKVStorage, { useMMKVStorage } from 'react-native-mmkv-storage';

const MMKV = new MMKVStorage.Loader()
  .withInstanceID('test')
  .withEncryption()
  .initialize();

const useStorage = (
  key,
  defaultValue,
) => {
  const [value, setValue] = useMMKVStorage(key, MMKV, defaultValue);
  return [value, setValue];
};

export default useStorage;
