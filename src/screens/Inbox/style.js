import {Dimensions, StyleSheet} from 'react-native';
import {colors, fontFamily, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  container: {
    width: sizes.screenWidth,
    height: sizes.screenHeight,
    backgroundColor: colors.white,
  },
  mapView: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: sizes.screenWidth * 0.8,
    alignSelf: 'center',
    marginTop: sizes.screenHeight * 0.02,
  },
  imageNameView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profile: {
    height: sizes.screenWidth * 0.13,
    width: sizes.screenWidth * 0.13,
  },
  nameMainVidew: {
    // backgroundColor:'pink'
    marginLeft: sizes.screenWidth * 0.03,
  },
  name: {
    color: colors.black,
    fontSize: fontSize.smallM,
    fontWeight: '500',
  },
  message: {
    color: colors.disabledBg2,
    fontSize: fontSize.smallM,
  },
  messageUnread: {
    color: colors.black,
    fontSize: fontSize.smallM,
    fontWeight: '500',
  },
  onlineImg: {
    height: sizes.screenWidth * 0.03,
    width: sizes.screenWidth * 0.03,
    position: 'absolute',
    left: sizes.screenWidth * 0.1,
    bottom: sizes.screenWidth * 0.095,
  },
  unreadView: {
    backgroundColor: '#82CA97',
    width: sizes.screenWidth * 0.05,
    height: sizes.screenWidth * 0.05,
    borderRadius: sizes.screenWidth * 0.03,
    alignItems: 'center',
    justifyContent: 'center',
  },
  unreadText: {
    color: colors.white,
    fontSize: fontSize.smallM,
    fontWeight: '500',
  },
  marginBottom: {
    marginBottom: sizes.screenHeight * 0.12,
  },
  marginTop: {
    marginTop: sizes.screenHeight * 0.01,
  },
});
