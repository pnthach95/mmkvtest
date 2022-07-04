import {addPlugin} from 'react-native-flipper';
import type {MMKVInstance} from 'react-native-mmkv-storage';

export default function mmkvFlipper(mmkv: MMKVInstance) {
  if (__DEV__) {
    addPlugin({
      getId: () => 'react-native-mmkv-storage',
      runInBackground: () => true,
      onConnect(connection) {
        if (mmkv) {
          if (mmkv.transactions) {
            connection.send('supportStatus', {reason: null});

            //#region ARRAY
            mmkv.transactions.register('array', 'onread', (key, value) => {
              console.log('transactions read array:', key, value);
              connection.send('newData', {
                instanceID: mmkv.instanceID,
                mode: 'READ',
                key,
                type: 'array',
                value,
                time: new Date().toISOString(),
              });
            });
            mmkv.transactions.register('array', 'onwrite', (key, value) => {
              console.log('transactions write array:', key, value);
              connection.send('newData', {
                instanceID: mmkv.instanceID,
                mode: 'WRITE',
                key,
                type: 'array',
                value,
                time: new Date().toISOString(),
              });
            });
            mmkv.transactions.register('array', 'ondelete', (key, value) => {
              console.log('transactions delete array:', key);
              connection.send('newData', {
                instanceID: mmkv.instanceID,
                mode: 'DELETE',
                key,
                type: '',
                value,
                time: new Date().toISOString(),
              });
            });
            //#endregion

            //#region BOOLEAN
            mmkv.transactions.register('boolean', 'onread', (key, value) => {
              console.log('transactions read boolean:', key, value);
              connection.send('newData', {
                instanceID: mmkv.instanceID,
                mode: 'READ',
                key,
                type: 'boolean',
                value,
                time: new Date().toISOString(),
              });
            });
            mmkv.transactions.register('boolean', 'onwrite', (key, value) => {
              console.log('transactions write boolean:', key, value);
              connection.send('newData', {
                instanceID: mmkv.instanceID,
                mode: 'WRITE',
                key,
                type: 'boolean',
                value,
                time: new Date().toISOString(),
              });
            });
            mmkv.transactions.register('boolean', 'ondelete', (key, value) => {
              console.log('transactions delete boolean:', key);
              connection.send('newData', {
                instanceID: mmkv.instanceID,
                mode: 'DELETE',
                key,
                type: '',
                value,
                time: new Date().toISOString(),
              });
            });
            //#endregion

            //#region NUMBER
            mmkv.transactions.register('number', 'onread', (key, value) => {
              console.log('transactions read number:', key, value);
              connection.send('newData', {
                instanceID: mmkv.instanceID,
                mode: 'READ',
                key,
                type: 'number',
                value,
                time: new Date().toISOString(),
              });
            });
            mmkv.transactions.register('number', 'onwrite', (key, value) => {
              console.log('transactions write number:', key, value);
              connection.send('newData', {
                instanceID: mmkv.instanceID,
                mode: 'WRITE',
                key,
                type: 'number',
                value,
                time: new Date().toISOString(),
              });
            });
            mmkv.transactions.register('number', 'ondelete', (key, value) => {
              console.log('transactions delete number:', key);
              connection.send('newData', {
                instanceID: mmkv.instanceID,
                mode: 'DELETE',
                key,
                type: '',
                value,
                time: new Date().toISOString(),
              });
            });
            //#endregion

            //#region OBJECT
            mmkv.transactions.register('object', 'onread', (key, value) => {
              console.log('transactions read object:', key, value);
              connection.send('newData', {
                instanceID: mmkv.instanceID,
                mode: 'READ',
                key,
                type: 'object',
                value,
                time: new Date().toISOString(),
              });
            });
            mmkv.transactions.register('object', 'onwrite', (key, value) => {
              console.log('transactions write object:', key, value);
              connection.send('newData', {
                instanceID: mmkv.instanceID,
                mode: 'WRITE',
                key,
                type: 'object',
                value,
                time: new Date().toISOString(),
              });
            });
            mmkv.transactions.register('object', 'ondelete', (key, value) => {
              console.log('transactions delete object:', key);
              connection.send('newData', {
                instanceID: mmkv.instanceID,
                mode: 'DELETE',
                key,
                type: '',
                value,
                time: new Date().toISOString(),
              });
            });
            //#endregion

            //#region STRING
            mmkv.transactions.register('string', 'onread', (key, value) => {
              console.log('transactions read string:', key, value);
              connection.send('newData', {
                instanceID: mmkv.instanceID,
                mode: 'READ',
                key,
                type: 'string',
                value,
                time: new Date().toISOString(),
              });
            });
            mmkv.transactions.register('string', 'onwrite', (key, value) => {
              console.log('transactions write string:', key, value);
              connection.send('newData', {
                instanceID: mmkv.instanceID,
                mode: 'WRITE',
                key,
                type: 'string',
                value,
                time: new Date().toISOString(),
              });
            });
            mmkv.transactions.register('string', 'ondelete', (key, value) => {
              console.log('transactions delete string:', key);
              connection.send('newData', {
                instanceID: mmkv.instanceID,
                mode: 'DELETE',
                key,
                type: '',
                value,
                time: new Date().toISOString(),
              });
            });
            //#endregion
          } else {
            connection.send('supportStatus', {
              reason:
                "You're using RN MMKV storage that don't have Transaction Manager. Please update to the latest version.",
            });
          }
        } else {
          connection.send('supportStatus', {
            reason: 'MMKV instance not found!',
          });
        }
      },
      onDisconnect() {
        try {
          mmkv.transactions.clear();
        } catch (error) {
          // console.log('flipper', error);
        }
      },
    });
  }
}
