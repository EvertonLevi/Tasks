
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import Navigator from './src/Navigator';

// if (__DEV__) {
//     require('react-devtools');
// }

AppRegistry.registerComponent(appName, () => Navigator);
