import {StyleSheet, Dimensions} from 'react-native';
import {Colors} from '../../utils/colors';
import {Fonts} from '../../utils/fonts';

const screen_width = Dimensions.get('window').width;
export default StyleSheet.create({
  Image:{
    height: 100,
    width:100,
    borderRadius:50,
  },
  view_button: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: Colors.grey,
    flexDirection: "row",
  },
  text1: {
    fontSize: 16,
    color: Colors.black
  },
  text2: {
    fontSize: 12,
    color: Colors.grey
  },
  text_button: {
    fontSize: 18,
    color: Colors.black
  },
});
