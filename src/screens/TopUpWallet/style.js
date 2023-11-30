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

  cardDetailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: sizes.screenWidth * 0.9,
    height: sizes.screenHeight * 0.076,
    backgroundColor: '#CCB4EF11',
    paddingHorizontal: sizes.screenWidth * 0.05,
    borderRadius: 14,
    marginVertical: sizes.screenHeight * 0.03,
    alignSelf: 'center',
    borderColor: colors.disabledBg,
    borderWidth: 1,
  },

  masterCardIcon: {
    resizeMode: 'contain',
    height: sizes.screenHeight * 0.056,
    width: sizes.screenWidth * 0.16,
    marginRight: sizes.screenWidth * 0.03,
  },

  cardDetailTextBold: {
    color: colors.black,
    fontSize: fontSize.large,
    fontWeight: '600',
  },

  cardDetailNumberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  dot: {
    height: sizes.screenWidth * 0.015,
    width: sizes.screenWidth * 0.015,
    borderRadius: sizes.screenHeight * 0.01,
    backgroundColor: colors.grayBorder,
    marginRight: sizes.screenWidth * 0.008,
  },

  cardDetailDisabledText: {
    fontSize: fontSize.smallM,
    color: colors.disabledBg2,
  },

  amountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: sizes.screenHeight * 0.2,
    width: sizes.screenWidth,
  },

  amountText: {
    color: '#93939366',
    fontSize: fontSize.h4,
    fontWeight: '700',
  },

  amountTextBlack: {
    color: colors.black,
    fontSize: fontSize.h4,
    fontWeight: '700',
  },

  redTextContainer: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'baseline',
    right: sizes.screenWidth * 0.16,
    top: sizes.screenHeight * 0.05,
  },

  redText: {
    color: colors.red,
    fontSize: fontSize.smallM,
  },

  topUpBtn: {
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

  topUpBtnText: {
    color: colors.white,
    fontSize: fontSize.large,
    fontWeight: '600',
  },

  modalBody: {
    backgroundColor: colors.white,
    width: sizes.screenWidth * 0.9,
    height: sizes.screenHeight * 0.48,
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
    marginVertical: sizes.screenHeight * 0.02,
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
