import {Dimensions, StyleSheet} from 'react-native';
import {colors, fontFamily, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  container: {height: sizes.screenHeight, backgroundColor: colors.white},
  imageStyle: {
    height: 400,
    width: '100%',
  },
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 17,
  },
  paginationWrapper: {
    position: 'absolute',
    bottom: sizes.screenHeight * 0.06,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  paginationDots: {
    // height: sizes.screenHeight * 0.2,
    // width: sizes.screenWidth * 0.04,
    // borderRadius: sizes.screenWidth * 0.02,
    // backgroundColor: colors.appTextColor1,
    // marginLeft: 10,
  },
  dotActive: {
    margin: 3,
    color: colors.black,
  },
  dot: {
    margin: 3,
    color: '#E9E7E7',
    opacity: 0.6,
  },

  wrapDot: {
    flexDirection: 'row',
    alignSelf: 'center',
    bottom: sizes.screenHeight * 0.2,
  },
  wrapDotIOS: {
    flexDirection: 'row',
    alignSelf: 'center',
    bottom: sizes.screenHeight * 0.08,
  },
  wrap: {
    width: sizes.screenWidth * 0.96,
  },
  bg: {
    height: sizes.screenHeight * 0.55,
  },
  content: {
    alignItems: 'center',
    marginTop: sizes.screenHeight * 0.01,
  },
  content2: {
    alignItems: 'center',
    marginTop: sizes.screenHeight * 0.035,
  },
  loginHead: {
    fontSize: fontSize.h4,
    fontWeight: '700',
    color: colors.black,
    width: sizes.screenWidth * 0.7,
    textAlign: 'center',
  },
  loginHeadIOS: {
    fontSize: fontSize.h4,
    fontWeight: '700',
    color: colors.black,
    width: sizes.screenWidth * 0.8,
    textAlign: 'center',
  },
  textView: {
    marginTop: sizes.screenHeight * 0.02,
  },
  text: {
    textAlign: 'center',
    color: colors.gray,
    fontSize: fontSize.h6,
    width: sizes.screenWidth * 0.7,
    bottom: sizes.screenHeight * 0.008,
  },
  inputTop: {
    marginTop: sizes.screenHeight * 0.08,
    marginBottom: sizes.screenHeight * 0.013,
  },
  signInBtn: {
    height: sizes.screenHeight * 0.06,
    width: sizes.screenWidth * 0.85,
    alignSelf: 'center',
    backgroundColor: colors.appTextColor1,
    borderRadius: sizes.screenWidth * 0.06,
  },
  signInBtnLight: {
    height: sizes.screenHeight * 0.06,
    width: sizes.screenWidth * 0.85,
    alignSelf: 'center',
    backgroundColor: colors.white,
    borderRadius: sizes.screenWidth * 0.06,
    borderWidth: 2,
    borderColor: colors.appTextColor1,
  },
  btnText: {
    textAlign: 'center',
    marginTop: sizes.screenHeight * 0.015,
    color: '#EFEFF0',
    fontSize: fontSize.medium,
  },
  btnTextIOS: {
    textAlign: 'center',
    marginTop: sizes.screenHeight * 0.018,
    color: '#EFEFF0',
    fontSize: fontSize.medium,
  },
  btnTextLight: {
    textAlign: 'center',
    marginTop: sizes.screenHeight * 0.015,
    color: colors.black,
    fontSize: fontSize.medium,
  },
  bg2: {
    height: sizes.screenHeight * 0.45,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  carIcon: {
    height: sizes.screenHeight * 0.03,
    width: sizes.screenWidth * 0.06,
  },
  contentText: {
    fontSize: fontSize.h6,
    width: sizes.screenWidth * 0.7,
    color: colors.black,
    marginLeft: sizes.screenWidth * 0.03,
  },
  top: {
    marginTop: sizes.screenHeight * 0.02,
  },
  bgImag: {
    width: sizes.screenWidth,
    height: sizes.screenHeight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text1: {
    textAlign: 'center',
    color: colors.white,
    fontSize: fontSize.h5,
    fontWeight: '700',
    // backgroundColor: 'red',
    marginTop: sizes.screenHeight * 0.2,
    width: sizes.screenWidth * 0.6,
  },
  text2: {
    textAlign: 'center',
    color: '#ADB3BC',
    fontSize: fontSize.medium,
    // fontWeight: '00',
    // backgroundColor: 'red',
    width: sizes.screenWidth * 0.7,
    marginTop: sizes.screenHeight * 0.02,
  },
  text3: {
    textAlign: 'center',
    color: '#555555',
    fontSize: fontSize.h5,
    fontWeight: '700',
    // backgroundColor: 'red',
    marginTop: sizes.screenHeight * 0.2,
    width: sizes.screenWidth * 0.6,
  },
});
