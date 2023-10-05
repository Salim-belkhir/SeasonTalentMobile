import { Dimensions as RNDimensions } from 'react-native';
import Constants from 'expo-constants';
const screen = RNDimensions.get('screen');

const dimensions = {
  bottom_tab_height: 81,
  screen_padding: 24,
  screen_width: screen.width,
  screen_height: screen.height,
  status_bar_height: Constants.statusBarHeight,
};

export default dimensions;
