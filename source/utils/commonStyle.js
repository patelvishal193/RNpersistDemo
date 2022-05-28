import {StyleSheet} from 'react-native';
import {Colors} from '../../source/utils/colors';
import {Fonts} from './fonts';
//import {Font} from '../../source/utils/fonts';

const Common_styles = StyleSheet.create({
  Flex_1_With_White: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  Flex_1: {
    flex: 1,
  },
  Align_Justify_center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Align_center: {
    alignItems: 'center',
  },
  Justify_center: {
    justifyContent: 'center',
  },
  Flex_Direction_Row: {
    flexDirection: 'row',
  },
  SafeAreaView: {
    backgroundColor: Colors.black_opacity_40,
  },
  View_Main_Main: {
    flex: 1,
    backgroundColor: Colors.black_opacity_40,
  },
  Scrollview: {
    flexGrow: 1,
  },
  errorView: {height: 30},
  errorTextStyle: {
    color: Colors.red,
    fontSize: 14,
    fontFamily: Fonts.Regular_font,
    marginTop: 5,
    marginBottom: 10,
  },
});
export default Common_styles;
