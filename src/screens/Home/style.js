import {Dimensions, StyleSheet} from 'react-native';
import {colors, fontFamily, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  container: {
    height: sizes.screenHeight,
    backgroundColor: colors.white,
  },

  mapView: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.86,
    height: sizes.screenHeight * 0.26,
  },
  map: {
    height: sizes.screenHeight,
    bottom: sizes.screenHeight * 0.03,
  },
  marker: {
    height: sizes.screenHeight * 0.06,
    width: sizes.screenHeight * 0.061,
    bottom: sizes.screenHeight * 0.7,
    left: sizes.screenWidth * 0.4,
  },
  goBtn: {
    height: sizes.screenHeight * 0.0811,
    width: sizes.screenHeight * 0.081,
  },
  goBtnView: {
    bottom: sizes.screenHeight * 0.49,
    left: sizes.screenWidth * 0.4,
  },
  sheildBtn: {
    bottom: sizes.screenHeight * 0.49,
    left: sizes.screenWidth * 0.05,
  },
  sheild: {
    height: sizes.screenHeight * 0.08,
    width: sizes.screenHeight * 0.08,
  },
  offlineView: {
    bottom: sizes.screenHeight * 0.49,
    backgroundColor: colors.white,
    height: sizes.screenHeight * 0.1,
    borderTopRightRadius: sizes.screenWidth * 0.1,
    borderTopLeftRadius: sizes.screenWidth * 0.1,
  },
  blackView: {
    borderWidth: 3,
    borderRadius: sizes.screenWidth * 0.02,
    width: sizes.screenWidth * 0.1,
    alignSelf: 'center',
    marginTop: sizes.screenHeight * 0.016,
    marginBottom: sizes.screenHeight * 0.01,
  },
  filterIcon2: {
    height: sizes.screenHeight * 0.05,
    width: sizes.screenWidth * 0.09,
    left: sizes.screenHeight * 0.05,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  offlineText: {
    color: colors.black,
    fontSize: fontSize.h6,
    fontWeight: '600',
    left: sizes.screenHeight * 0.12,
  },
  offlineView2: {
    bottom: sizes.screenHeight * 0.59,
    backgroundColor: colors.white,
    height: sizes.screenHeight * 0.2,
    borderTopRightRadius: sizes.screenWidth * 0.1,
    borderTopLeftRadius: sizes.screenWidth * 0.1,
  },
  grayText: {
    color: '#8189B0',
    top: sizes.screenHeight * 0.02,
    left: sizes.screenWidth * 0.03,
  },
  left: {
    color: colors.black,
    fontSize: fontSize.h6,
    fontWeight: '600',
    left: sizes.screenHeight * 0.05,
    top: sizes.screenHeight * 0.02,
  },
  headerView: {
    backgroundColor: '#2B2B2B',
    padding: sizes.screenWidth * 0.03,
    borderRadius: sizes.screenWidth * 0.5,
    left: sizes.screenWidth * 0.2,
  },
  headerView2:{
    backgroundColor: '#2B2B2B',
    padding: sizes.screenWidth * 0.02,
    borderRadius: sizes.screenWidth * 0.5,
    left: sizes.screenWidth * 0.3,
    bottom:sizes.screenHeight*0.1,
  },
});
