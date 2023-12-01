import {Dimensions, StyleSheet} from 'react-native';
import {colors, fontFamily, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  container: {height: sizes.screenHeight, backgroundColor: colors.white},
  content: {
    alignItems: 'center',
    marginTop: sizes.screenHeight * 0.1,
  },

  textView: {
    paddingRight: sizes.screenWidth * 0.05,
    paddingLeft: sizes.screenWidth * 0.05,
  },
  text: {
    textAlign: 'center',
    color: colors.gray,
    fontSize: fontSize.h6,
  },
  fingerprintImg: {
    height: sizes.screenHeight * 0.3,
    width: sizes.screenHeight * 0.3,
    top: sizes.screenHeight * 0.06,
    marginBottom: sizes.screenHeight * 0.12,
  },
  skipText: {
    color: '#35383F',
    fontSize: fontSize.h6,
    fontWeight: '600',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: sizes.screenHeight * 0.05,
    justifyContent: 'space-around',
    top: sizes.screenHeight * 0.12,
  },
  button: {
    backgroundColor: colors.black,
    padding: sizes.screenHeight * 0.022,
    width: sizes.screenWidth * 0.4,
    alignSelf: 'center',
    borderRadius: sizes.screenWidth * 0.1,
  },
  buttonTxt: {
    color: colors.white,
    textAlign: 'center',
    fontSize: fontSize.h6,
  },
});
