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
    width: sizes.screenWidth * 0.5,
  },
  marginTop: {
    marginTop: sizes.screenHeight * 0.1,
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
  bottom: {
    bottom: sizes.screenHeight * 0.05,
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
    alignSelf: 'center',
  },

  textNormal: {
    color: '#727272',
  },

  textTouchable: {
    color: colors.black,
    fontWeight: '800',
  },
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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: sizes.screenWidth * 0.35,
  },
  img: {
    height: sizes.screenHeight * 0.032,
    width: sizes.screenWidth * 0.04,
    left: sizes.screenWidth * 0.1,
    tintColor: colors.white,
  },
  loginViaText:{
    color:colors.black,
    fontSize:fontSize.h6,
    top:sizes.screenHeight*0.02
  },
  loginBg:{
    height:sizes.screenHeight*0.19,
    width:sizes.screenWidth*0.3,
    alignSelf:'center',
    top:sizes.screenHeight*0.07
  }
});
