import {Dimensions, StyleSheet} from 'react-native';
import {colors, fontFamily, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  container: {
    // paddingLeft: sizes.screenWidth * 0.05,
    paddingTop: sizes.screenHeight * 0.03,
    width: sizes.screenWidth * 0.85,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    color: colors.black,
    fontSize: fontSize.h4,
    fontWeight: '700',
  },
  img: {
    height: sizes.screenWidth * 0.06,
    width: sizes.screenWidth * 0.06,
  },
});
