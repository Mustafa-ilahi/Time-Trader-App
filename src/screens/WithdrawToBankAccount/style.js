import {Dimensions, StyleSheet} from 'react-native';
import {colors, fontFamily, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  body: {
    width: sizes.screenWidth,
    height: sizes.screenHeight,
    backgroundColor: colors.white,
  },

  header: {
    flexDirection: 'row',
    width: sizes.screenWidth * 0.9,
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginTop: sizes.screenHeight * 0.03,
  },

  headerIcon: {
    resizeMode: 'contain',
    height: sizes.screenHeight * 0.03,
    width: sizes.screenHeight * 0.02,
  },

  headerIcon2: {
    resizeMode: 'contain',
    height: sizes.screenHeight * 0.028,
    width: sizes.screenHeight * 0.028,
  },

  headerText: {
    color: colors.black,
    fontSize: fontSize.extraLarge,
    fontWeight: '600',
  },

  accountDetailsInput: {
    color: colors.black,
    width: sizes.screenWidth * 0.8,
    fontSize: fontSize.large,
    fontWeight: '500',
    marginLeft: sizes.screenWidth * 0.05,
    marginTop: sizes.screenHeight * 0.04,
  },

  horizontalLine: {
    height: 1,
    width: sizes.screenWidth * 0.9,
    alignSelf: 'center',
    backgroundColor: colors.grayBorder,
  },

  row: {
    flexDirection: 'row',
  },

  warningIcon: {
    resizeMode: 'contain',
    height: sizes.screenHeight * 0.03,
    width: sizes.screenHeight * 0.03,
    top: sizes.screenHeight * 0.055,
    left: sizes.screenWidth * 0.02,
  },

  continueBtn: {
    width: sizes.screenWidth * 0.7,
    backgroundColor: colors.black,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    height: sizes.screenHeight * 0.056,
    borderRadius: sizes.screenHeight * 0.1,
    position: 'absolute',
    top: sizes.screenHeight * 0.88,
  },

  continueBtnText: {
    color: colors.white,
    fontSize: fontSize.large,
    fontWeight: '600',
  },
});
