import {Dimensions, StyleSheet} from 'react-native';
import {colors, fontFamily, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  container: {
    bottom: sizes.screenHeight * 0.1,
    width: sizes.screenWidth * 0.75,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    color: colors.black,
    fontSize: fontSize.medium,
    fontWeight: '600',
  },
  img: {
    height: sizes.screenWidth * 0.12,
    width: sizes.screenWidth * 0.12,
  },
});
