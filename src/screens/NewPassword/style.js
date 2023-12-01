import {Dimensions, StyleSheet} from 'react-native';
import {colors, fontFamily, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  container: {height: sizes.screenHeight, backgroundColor: colors.white},
  content: {
    alignItems: 'center',
    marginTop: sizes.screenHeight * 0.17,
  },
  textView: {
    top: sizes.screenHeight * 0.06,
    paddingRight: sizes.screenWidth * 0.05,
    paddingLeft: sizes.screenWidth * 0.05,
  },
  text: {
    textAlign: 'center',
    color: colors.gray,
    fontSize: fontSize.h6,
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
  passwordImg: {
    height: sizes.screenHeight * 0.032,
    width: sizes.screenWidth * 0.057,
    tintColor: colors.black,
    left:sizes.screenWidth*0.02
  },
  eyeBtn: {
    right: sizes.screenWidth * 0.07,
  },
  eyeImg: {
    height: sizes.screenHeight * 0.025,
    width: sizes.screenWidth * 0.058,
  },
  input: {
    color: colors.black,
    left: sizes.screenWidth * 0.03,
    width: sizes.screenWidth * 0.8,
  },
  margin: {
    marginTop: sizes.screenHeight * 0.1,
    marginBottom: sizes.screenHeight * 0.02,
  },
  btnTop: {
    top: sizes.screenHeight * 0.05,
  },
  checkboxView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: sizes.screenHeight * 0.03,
    alignSelf: 'center',

    top: sizes.screenHeight * 0.04,
  },
  checkboxTitle: {color: colors.black, fontWeight: '500'},
  forgotPass: {
    height: sizes.screenHeight * 0.12,
    width: sizes.screenWidth * 0.236,
    alignSelf: 'center',
    top: sizes.screenHeight * 0.07,
  },
});
