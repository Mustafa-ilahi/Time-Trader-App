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
    fontWeight: '500',
  },
  row: {
    marginTop: sizes.screenHeight * 0.15,
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
  },
  mobileImg: {
    height: sizes.screenHeight * 0.032,
    width: sizes.screenWidth * 0.04,
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
  top:{
    top:sizes.screenHeight*0.02
  }
});
