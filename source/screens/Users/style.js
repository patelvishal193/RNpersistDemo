import {StyleSheet, Dimensions,Platform} from 'react-native';
import {Colors} from '../../utils/colors';
import {Fonts} from '../../utils/fonts';

const screen_width = Dimensions.get('window').width;
export default StyleSheet.create({
  View_Main: {
    flex: 1,
    padding: 5,
    backgroundColor: '#e8e4f7',
  },
  View_header: {
    padding: 20,
    backgroundColor: Colors.app_theme,
    flexDirection: 'row',
  },
  headerText: {
    fontSize: 18,
    color: Colors.white,
    flex: 1,
    textAlign: 'center',
  },
  View_search: {
    padding: 5,
    paddingHorizontal: 15,
    backgroundColor: Colors.white,
    flexDirection: 'row',
    borderRadius: 20,
    alignItems: 'center',
    height: 40,
  },
  SearchSymbol: {
    height: 25,
    width: 25,
    marginTop: -5,
  },
  TextInput: {
    flex: 1,
    height:40,
  fontSize:14
  },
  textList1: {
    fontSize: 16,
    color: Colors.black,
    fontWeight: 'bold',
  },
  textList3: {
    fontSize: 12,
    color: Colors.grey,
    marginTop: 5,
  },
  float_button: {
    backgroundColor: Colors.app_theme,
    position: 'absolute',
    bottom: 30,
    right: 20,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  /////////////////
  list_image: {
    backgroundColor: Colors.black_opacity_25,
    height: 50,
    width: 50,
    borderRadius: 25,
    borderColor: Colors.grey,
    marginBottom: 15,
  },
});
