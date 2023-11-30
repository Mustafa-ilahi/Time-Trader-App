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

  innerBody: {
    alignItems: 'center',
    width: sizes.screenWidth * 0.66,
    alignSelf: 'center',
    top: sizes.screenHeight * 0.16,
  },

  cardsImg: {
    resizeMode: 'contain',
    height: sizes.screenHeight * 0.2,
    width: sizes.screenWidth * 0.5,
  },

  innerBodyTextBold: {
    color: colors.black,
    fontSize: fontSize.h6,
    fontWeight: '600',
    marginVertical: sizes.screenHeight * 0.02,
  },

  innerBodyTextLight: {
    textAlign: 'center',
    fontSize: fontSize.medium,
    color: colors.disabledBg2,
  },

  continueBtn: {
    width: sizes.screenWidth * 0.34,
    backgroundColor: colors.black,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    height: sizes.screenHeight * 0.046,
    borderRadius: sizes.screenHeight * 0.1,
    marginTop: sizes.screenHeight * 0.1,
  },

  continueBtnText: {
    color: colors.white,
    fontSize: fontSize.medium,
    fontWeight: '600',
  },
});
