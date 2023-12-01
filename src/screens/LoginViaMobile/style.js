import {Dimensions, StyleSheet} from 'react-native';
import {colors, fontFamily, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  container: {
    height: sizes.screenHeight,
    backgroundColor: colors.white,
  },
  contentView: {
    padding: sizes.screenHeight * 0.05,
    marginTop: sizes.screenHeight * 0.05,
  },
  heading: {
    color: colors.black,
    fontSize: fontSize.h1,
    fontWeight: '600',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    padding: sizes.screenHeight * 0.01,
    width: sizes.screenWidth * 0.9,
    alignSelf: 'center',
    borderRadius: sizes.screenWidth * 0.03,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  input: {
    color: colors.black,
    left: sizes.screenWidth * 0.03,
    width: sizes.screenWidth * 0.8,
  },
  mobileImg: {
    height: sizes.screenHeight * 0.032,
    width: sizes.screenWidth * 0.04,
  },
  passwordImg: {
    height: sizes.screenHeight * 0.032,
    width: sizes.screenWidth * 0.058,
  },
  bottom: {
    bottom: sizes.screenHeight * 0.02,
  },
  orText: {
    color: '#727272',
    textAlign: 'center',
    fontSize: fontSize.h6,
    marginTop: sizes.screenHeight * 0.02,
    marginBottom: sizes.screenHeight * 0.02,
  },
  top: {
    top: sizes.screenHeight * 0.02,
  },
  bottomTextContainer: {
    flexDirection: 'row',
    marginTop: sizes.screenHeight * 0.1,
    alignSelf: 'center',
  },

  textNormal: {
    color: '#727272',
  },

  textTouchable: {
    color: colors.black,
    fontWeight: '800',
  },
  marginTop: {
    marginTop: sizes.screenHeight * 0.06,
    marginBottom: sizes.screenHeight * 0.02,
  },
  eyeBtn: {
    right: sizes.screenWidth * 0.07,
  },
  eyeImg: {
    height: sizes.screenHeight * 0.025,
    width: sizes.screenWidth * 0.058,
  },
  forgotText: {
    color: colors.black,
    fontSize: fontSize.smallM,
    fontWeight: '500',
  },
  forgotPass: {
    left: sizes.screenWidth * 0.55,
    top: sizes.screenHeight * 0.01,
  },
  checkboxView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: sizes.screenHeight * 0.03,
    alignSelf: 'center',
  },
  checkboxTitle: {color: colors.black, fontWeight: '500'},
  forgotPassText: {
    color: colors.appTextColor1,
    fontWeight: 'bold',
    textDecorationColor: colors.appTextColor1,
    textDecorationLine: 'underline',
    fontSize: fontSize.medium,
  },
});
