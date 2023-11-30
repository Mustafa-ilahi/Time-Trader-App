import {Dimensions, StyleSheet} from 'react-native';
import {colors, fontFamily, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  container: {
    width: sizes.screenWidth,
    height: sizes.screenHeight,
    backgroundColor: 'pink',
  },
  mapView: {
    backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: sizes.screenWidth * 0.9,
    alignSelf: 'center',
  },
  imageNameView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profile: {
    height: sizes.screenWidth * 0.15,
    width: sizes.screenWidth * 0.15,
  },
});
