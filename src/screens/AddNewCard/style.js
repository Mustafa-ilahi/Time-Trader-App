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
    width: sizes.screenWidth * 0.75,
    fontSize: fontSize.large,
    fontWeight: '500',
    marginLeft: sizes.screenWidth * 0.05,
    marginTop: sizes.screenHeight * 0.04,
  },

  accountDetailsInput2: {
    color: colors.black,
    width: sizes.screenWidth * 0.3,
    fontSize: fontSize.large,
    fontWeight: '500',
    marginTop: sizes.screenHeight * 0.04,
  },

  horizontalLine: {
    height: 1,
    width: sizes.screenWidth * 0.9,
    backgroundColor: colors.grayBorder,
    alignSelf: 'center',
  },

  horizontalLine2: {
    height: 1,
    width: sizes.screenWidth * 0.42,
    backgroundColor: colors.grayBorder,
  },

  masterCardIcon: {
    resizeMode: 'contain',
    height: sizes.screenHeight * 0.05,
    width: sizes.screenHeight * 0.07,
    top: sizes.screenHeight * 0.042,
    left: sizes.screenWidth * 0.03,
  },

  row: {
    flexDirection: 'row',
  },

  row2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: sizes.screenWidth * 0.9,
    alignSelf: 'center',
  },

  warningIcon: {
    resizeMode: 'contain',
    height: sizes.screenHeight * 0.026,
    width: sizes.screenHeight * 0.026,
    top: sizes.screenHeight * 0.055,
    left: sizes.screenWidth * 0.04,
  },

  continueBtn: {
    width: sizes.screenWidth * 0.9,
    backgroundColor: colors.black,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    height: sizes.screenHeight * 0.06,
    borderRadius: sizes.screenHeight * 0.1,
    position: 'absolute',
    top: sizes.screenHeight * 0.88,
  },

  continueBtnText: {
    color: colors.white,
    fontSize: fontSize.large,
    fontWeight: '600',
  },

  modalBody: {
    backgroundColor: colors.white,
    width: sizes.screenWidth * 0.9,
    height: sizes.screenHeight * 0.38,
    alignSelf: 'center',
    borderRadius: sizes.screenHeight * 0.04,
    alignItems: 'center',
    justifyContent: 'center',
  },

  modalIcon: {
    resizeMode: 'contain',
    height: sizes.screenHeight * 0.08,
    width: sizes.screenHeight * 0.08,
  },

  modalText: {
    color: colors.black,
    width: sizes.screenWidth * 0.7,
    alignSelf: 'center',
    fontSize: fontSize.extraLarge,
    fontWeight: '600',
    textAlign: 'center',
    marginVertical: sizes.screenHeight * 0.03,
  },

  modalBtn: {
    height: sizes.screenHeight * 0.056,
    width: sizes.screenWidth * 0.7,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: sizes.screenHeight * 0.1,
    backgroundColor: colors.black,
  },

  modalBtnText: {
    color: colors.white,
    fontSize: fontSize.large,
    fontWeight: '600',
  },
});
