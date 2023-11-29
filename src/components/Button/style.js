import {Dimensions, StyleSheet} from 'react-native';
import {colors, fontFamily, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.black,
    padding: sizes.screenHeight * 0.022,
    width: sizes.screenWidth * 0.9,
    alignSelf: 'center',
    borderRadius: sizes.screenWidth * 0.1,
  },
  buttonTxt: {
    color: colors.white,
    textAlign: 'center',
    fontSize: fontSize.h6,
  },
  buttonLight:{
    backgroundColor: colors.white,
    padding: sizes.screenHeight * 0.022,
    width: sizes.screenWidth * 0.9,
    alignSelf: 'center',
    borderRadius: sizes.screenWidth * 0.1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  buttonTxtLight:{
    color: colors.black,
    textAlign: 'center',
    fontSize: fontSize.h6,
  }
});
