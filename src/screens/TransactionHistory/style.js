import {Dimensions, StyleSheet} from 'react-native';
import {colors, fontFamily, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  container: {
    height: sizes.screenHeight * 1,
    width: sizes.screenWidth,
  },

  body: {
    width: sizes.screenWidth,
    alignItems: 'center',
  },

  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: sizes.screenWidth * 0.88,
    alignSelf: 'center',
    marginTop: sizes.screenHeight * 0.03,
    marginBottom: sizes.screenHeight * 0.02,
  },

  headerRowText: {
    fontSize: fontSize.h6,
    color: colors.black,
    fontWeight: '600',
  },

  headerRowImg: {
    resizeMode: 'contain',
    height: sizes.screenHeight * 0.03,
    width: sizes.screenHeight * 0.03,
    marginRight: sizes.screenWidth * 0.04,
  },

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: sizes.screenHeight * 0.01,
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E1E3ED',
    borderRadius: 6,
    height: sizes.screenHeight * 0.048,
    width: sizes.screenWidth * 0.66,
  },

  searchIconn: {
    resizeMode: 'contain',
    height: sizes.screenHeight * 0.03,
    width: sizes.screenHeight * 0.03,
    marginLeft: sizes.screenWidth * 0.02,
  },

  input: {
    width: sizes.screenWidth * 0.56,
    color: colors.black,
  },

  filter: {
    resizeMode: 'contain',
    height: sizes.screenHeight * 0.05,
    width: sizes.screenWidth * 0.22,
  },

  disabledTextLarge: {
    fontSize: fontSize.large,
    fontWeight: '500',
    color: colors.disabledBg2,
    marginVertical: sizes.screenWidth * 0.01,
  },

  disabledTextLarge2: {
    fontSize: fontSize.large,
    fontWeight: '500',
    color: colors.disabledBg2,
    marginBottom: sizes.screenWidth * 0.01,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  disabledTextSmall: {
    color: '#BAC2C7',
  },

  transactionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: sizes.screenWidth * 0.9,
    height: sizes.screenHeight * 0.076,
    backgroundColor: colors.white,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 0,

    elevation: 3,

    paddingHorizontal: sizes.screenWidth * 0.05,
    borderRadius: 6,
    marginBottom: sizes.screenHeight * 0.02,
  },

  row2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  transactionImg: {
    resizeMode: 'contain',
    height: sizes.screenHeight * 0.05,
    width: sizes.screenHeight * 0.05,
    marginRight: sizes.screenWidth * 0.02,
  },

  textRed: {
    color: colors.red,
    fontSize: fontSize.smallM,
  },

  textGreen: {
    color: 'green',
    fontSize: fontSize.smallM,
  },

  rightArroww: {
    resizeMode: 'contain',
    height: sizes.screenHeight * 0.012,
    width: sizes.screenHeight * 0.012,
    marginLeft: sizes.screenWidth * 0.01,
  },

  blackTextBold: {
    fontSize: fontSize.smallM,
    fontWeight: '600',
    color: colors.black,
  },

  height: {
    height: sizes.screenHeight * 0.02,
  },

  width: {
    width: sizes.screenWidth,
    paddingLeft: sizes.screenWidth * 0.05,
  },

  ////////////////

  modal: {
    height: sizes.screenHeight,
    width: sizes.screenWidth,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  modalContent: {
    width: sizes.screenWidth * 1,
    height: sizes.screenHeight * 0.48,
    backgroundColor: colors.white,
    borderTopLeftRadius: sizes.screenWidth * 0.06,
    borderTopRightRadius: sizes.screenWidth * 0.06,
    padding: sizes.screenWidth * 0.05,
    justifyContent: 'space-between',
  },

  modalBody: {
    alignItems: 'center',
  },

  modalRow: {
    flexDirection: 'row',
    width: sizes.screenWidth * 0.9,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: sizes.screenHeight * 0.03,
  },

  ModalTransactionImg: {
    resizeMode: 'contain',
    height: sizes.screenHeight * 0.07,
    width: sizes.screenHeight * 0.07,
    marginRight: sizes.screenWidth * 0.02,
  },

  modalBlackTextBold: {
    fontSize: fontSize.regular,
    fontWeight: '600',
    color: colors.black,
  },

  modalDisabledText: {
    fontSize: fontSize.smallM,
    fontWeight: '500',
    color: colors.disabledBg2,
  },

  modalDoneText: {
    color: '#1D62CA',
    fontSize: fontSize.large,
    fontWeight: '600',
  },

  modalPrice: {
    backgroundColor: '#FFF6F6',
    height: sizes.screenHeight * 0.078,
    width: sizes.screenWidth * 0.76,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: sizes.screenHeight * 0.01,
  },

  modalPriceText: {
    color: '#B83232',
    fontSize: fontSize.h6,
    fontWeight: '600',
  },

  modalbtn: {
    height: sizes.screenHeight * 0.076,
    width: sizes.screenWidth * 0.76,
    borderWidth: 1,
    borderColor: colors.disabledBg,
    borderRadius: 8,
    justifyContent: 'center',
    paddingLeft: sizes.screenWidth * 0.03,
    marginBottom: sizes.screenHeight * 0.01,
  },

  modalbtnTextLight: {
    color: colors.disabledBg2,
    fontSize: fontSize.small,
    fontWeight: '500',
  },

  modalbtnTextDark: {
    color: 'grey',
    fontSize: fontSize.smallM,
    fontWeight: '600',
  },

  copyIconn: {
    resizeMode: 'contain',
    height: sizes.screenWidth * 0.05,
    width: sizes.screenWidth * 0.05,
  },

  copyIconnContainer: {
    position: 'absolute',
    right: sizes.screenWidth * 0.04,
    bottom: sizes.screenHeight * 0.026,
  },

  redFlagRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: sizes.screenHeight * 0.02,
  },

  redFlag: {
    resizeMode: 'contain',
    height: sizes.screenWidth * 0.05,
    width: sizes.screenWidth * 0.05,
    marginRight: sizes.screenWidth * 0.01,
  },

  redFlagText: {
    color: '#B83232',
    fontSize: fontSize.medium,
    fontWeight: '600',
  },
});
