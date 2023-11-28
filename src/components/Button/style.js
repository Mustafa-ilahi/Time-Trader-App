import {Dimensions, StyleSheet} from 'react-native';
import {colors, fontFamily, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.black,
    padding: sizes.screenHeight * 0.022,
    width: sizes.screenWidth * 0.8,
    alignSelf: 'center',
    borderRadius: sizes.screenWidth * 0.1,
  },
  buttonTxt: {
    color: colors.white,
    textAlign: 'center',
    fontSize: fontSize.h6,
  },
});
