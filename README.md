react-native-mmkv-storage version 0.7.6

Try to create flipper plugin but kinda fail ☠️

| Function    | Async API          | Sync API           | transactions                      |
| ----------- | ------------------ | ------------------ | --------------------------------- |
| Set boolean | ✅                  | ✅                  | ✅                                 |
| Get boolean | ✅                  | ✅                  | `'boolean', 'onread'` not working |
| Set string  | ✅                  | ✅                  | ✅                                 |
| Get string  | Return `undefined` | Return `undefined` | ✅                                 |
| Set int     | ✅                  | ✅                  | ✅                                 |
| Get int     | ✅                  | ✅                  | `'number', 'onread'` not working  |
| Set map     | ✅                  | ✅                  | `'object', 'onwrite'` not working |
| Get map     | ✅                  | ✅                  | `'object', 'onread'` not working  |
| Set array   | ✅                  | ✅                  | ✅                                 |
| Get array   | ✅                  | ✅                  | `'array', 'onread'` not working   |