import {StyleSheet, Dimensions} from 'react-native';
import {Colors} from '../../utils/colors';
import {Fonts} from '../../utils/fonts';

const screen_width = Dimensions.get('window').width;
export default StyleSheet.create({
  View_Main: {
    flex: 1,
    backgroundColor: '#e8e4f7',
  },
  View_Main2: {
    paddingTop: 20,
    paddingHorizontal: 20,
    backgroundColor: Colors.white,
    marginTop: 120,
    marginHorizontal: 10,
    borderRadius:5
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
  Image: {
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor: Colors.grey,
    borderWidth: 1,
    borderColor: Colors.border_color,
  },
  Camera_back: {
    height: 40,
    width: 40,
    borderRadius: 20,
    position: 'absolute',
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: -15,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: Colors.border_color,
  },
  View_Image_spec: {
    borderRadius: 15,
    backgroundColor: Colors.dull_white,
    alignSelf: 'center',
    paddingHorizontal: 15,
    paddingVertical: 3,
    marginTop: 30,
    marginBottom: 10,
  },
  Save_button: {
    backgroundColor: Colors.app_theme,
    borderRadius:5,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginBottom:-20
  },
});
