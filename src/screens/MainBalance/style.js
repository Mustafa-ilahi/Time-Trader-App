import {Dimensions, StyleSheet} from 'react-native';
import {colors, fontFamily, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  container: {
    height: sizes.screenHeight * 1,
    width: sizes.screenWidth,
  },

  body: {
    width: sizes.screenWidth * 0.9,
    alignSelf: 'center',
  },

  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    width: sizes.screenWidth * 0.9,
    alignSelf: 'center',
    marginTop: sizes.screenHeight * 0.03,
  },

  headerRowText: {
    fontSize: fontSize.extraLarge,
    color: colors.white,
    fontWeight: '600',
    marginLeft: sizes.screenWidth * 0.04,
  },

  headerRowImg: {
    resizeMode: 'contain',
    height: sizes.screenHeight * 0.038,
    width: sizes.screenWidth * 0.2,
  },

  mainBalanceText: {
    fontSize: fontSize.smallM,
    color: colors.black,
    fontWeight: '600',
    alignSelf: 'center',
    marginTop: sizes.screenHeight * 0.03,
  },

  mainBalance: {
    fontSize: fontSize.h3,
    color: colors.white,
    fontWeight: '600',
    alignSelf: 'center',
  },

  topUpRow: {
    alignItems: 'center',
    flexDirection: 'row',
    width: sizes.screenWidth * 0.55,
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginTop: sizes.screenHeight * 0.03,
    marginBottom: sizes.screenHeight * 0.07,
  },

  topUpContainer: {
    alignItems: 'center',
  },

  topUpIcon: {
    resizeMode: 'contain',
    height: sizes.screenHeight * 0.025,
    width: sizes.screenHeight * 0.025,
  },

  topUpText: {
    color: colors.white,
    fontSize: fontSize.smallM,
    marginTop: sizes.screenHeight * 0.01,
  },

  topUpSeparator: {
    resizeMode: 'contain',
    height: sizes.screenHeight * 0.04,
  },

  blackTextBold: {
    fontSize: fontSize.smallM,
    fontWeight: '600',
    color: colors.black,
  },

  scrollViewContainer: {
    marginVertical: sizes.screenHeight * 0.02,
  },

  userContainer: {
    alignItems: 'center',
    marginRight: sizes.screenWidth * 0.04,
  },

  userIcon: {
    resizeMode: 'contain',
    height: sizes.screenHeight * 0.09,
    width: sizes.screenHeight * 0.09,
  },

  userNameText: {
    color: colors.black,
    fontSize: fontSize.regular,
    marginTop: sizes.screenHeight * 0.01,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  disabledText: {
    color: colors.disabledBg2,
    marginRight: sizes.screenWidth * 0.1,
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
});
