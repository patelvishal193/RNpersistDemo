import {StyleSheet, Dimensions, Platform} from 'react-native';
import {Colors} from '../../utils/colors';

const screen_width = Dimensions.get('window').width;
export default StyleSheet.create({
  View_Main: {
    // paddingVertical: 10,
    backgroundColor: 'white',
    borderWidth: 2,
    borderRadius: 20,
    height:40,
    borderColor: Colors.border_color,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: Platform.OS == 'ios' ? 5 : 0,
  },
  PasswordShowSymbol: {
    height: 20,
    width: 20,
  },
});
