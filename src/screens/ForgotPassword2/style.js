import {Dimensions, StyleSheet} from 'react-native';
import {colors, fontFamily, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  container: {height: sizes.screenHeight, backgroundColor: colors.white},
  content: {
    alignItems: 'center',
    marginTop: sizes.screenHeight * 0.15,
  },
  otpHead: {
    fontSize: fontSize.h4,
    fontWeight: '700',
    color: colors.appTextColor1,
  },
  textView: {
    marginTop: sizes.screenHeight * 0.02,
    paddingRight: sizes.screenWidth * 0.05,
    paddingLeft: sizes.screenWidth * 0.05,
  },
  text: {
    textAlign: 'justify',
    color: '#212121',
    fontSize: fontSize.h6,
  },
  forgetText: {
    fontSize: fontSize.medium,
    color: '#61646B',
  },
  forgetText2: {
    fontSize: fontSize.medium,
    color: colors.appTextColor1,
    fontWeight: '600',
  },
  row: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  bottom: {
    // marginTop: sizes.screenHeight * 0.02,
  },
  footerbottom: {
    marginTop: sizes.screenHeight * 0.35,
  },

  codeFieldRoot: {
    width: sizes.screenWidth * 0.65,
    alignSelf: 'center',
    marginTop: sizes.screenHeight * 0.08,
  },

  cell: {
    width: sizes.screenWidth * 0.15,
    height: sizes.screenHeight * 0.07,
    lineHeight: sizes.screenHeight * 0.07,
    fontSize: fontSize.h5,
    fontWeight: '500',
    // borderWidth: 1,
    borderColor: colors.disabledBg2,
    textAlign: 'center',
    color: colors.black,
    borderRadius: sizes.screenWidth * 0.02,
    backgroundColor: '#E6E6E6',
  },

  focusCell: {
    borderColor: '#000',
  },
  otpText: {
    color: colors.gray,
    fontSize: fontSize.medium,
    textAlign: 'center',
    marginTop: sizes.screenHeight * 0.02,
  },
  center: {
    alignSelf: 'center',
    top: sizes.screenHeight * 0.06,
  },

  row: {
    flexDirection: 'row',
  },
  otpTime: {
    color: '#8189B0',
    fontWeight: '600',
  },
  btnBottom: {
    bottom: sizes.screenHeight * 0.2,
  },
  forgotPass: {
    height: sizes.screenHeight * 0.1,
    width: sizes.screenWidth * 0.24,
    alignSelf: 'center',
    top: sizes.screenHeight * 0.07,
  },
  padding: {
    padding: sizes.screenHeight * 0.05,
    borderColor: '#8189B0',
    borderWidth: 2,
    width: sizes.screenWidth * 0.9,
    alignSelf: 'center',
    borderRadius: sizes.screenWidth * 0.03,
    flexDirection: 'row',
    alignItems: 'center',
    top:sizes.screenHeight*0.04
  },
  smsText: {
    color: '#8189B0',
  },
  phoneText: {
    color: colors.black,
    paddingTop: sizes.screenHeight * 0.01,
    fontWeight: '600',
  },
  right: {
    left: sizes.screenWidth * 0.13,
  },
});
