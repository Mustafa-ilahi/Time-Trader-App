import {Dimensions, StyleSheet} from 'react-native';
import {colors, fontFamily, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  backBtn: {
    padding: sizes.screenHeight * 0.03,
  },
  backIcon: {
    height: sizes.screenHeight * 0.03,
    width: sizes.screenHeight * 0.03,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    color: colors.black,
    fontWeight: '700',
    fontSize: fontSize.h6,
  },
});
