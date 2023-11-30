import {Dimensions, StyleSheet} from 'react-native';
import {colors, fontFamily, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  container: {height: sizes.screenHeight, backgroundColor: colors.white},
  tabView: {
    width: sizes.screenWidth * 0.75,
    alignSelf: 'center',
    flexDirection: 'row',
    paddingBottom: sizes.screenHeight * 0.01,
  },
  tabBtn: {
    width: sizes.screenWidth * 0.25,
  },
  btnText: {
    textAlign: 'center',
    fontSize: fontSize.medium,
    color: colors.black,
    paddingBottom: sizes.screenHeight * 0.012,
    paddingTop: sizes.screenHeight * 0.02,
  },
  btnTextActive: {
    textAlign: 'center',
    borderBottomColor: colors.black,
    borderBottomWidth: sizes.screenWidth * 0.01,
    fontSize: fontSize.medium,
    color: colors.black,
    paddingBottom: sizes.screenHeight * 0.012,
    paddingTop: sizes.screenHeight * 0.02,
    fontWeight: '700',
  },
  mapView: {
    width: sizes.screenWidth * 0.85,
    alignSelf: 'center',
    marginTop: sizes.screenHeight * 0.02,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    backgroundColor: colors.white,
    paddingBottom: sizes.screenHeight * 0.02,
    borderRadius: sizes.screenWidth * 0.02,

    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.17,
    shadowRadius: 2.54,
    elevation: 3,
  },
  dayText: {
    color: colors.disabledBg2,
    paddingTop: sizes.screenHeight * 0.01,
    width: sizes.screenWidth * 0.78,
    alignSelf: 'center',
  },
  profilePriceView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: sizes.screenWidth * 0.78,
    alignSelf: 'center',
    marginTop: sizes.screenHeight * 0.015,
  },
  profileView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImg: {
    height: sizes.screenWidth * 0.13,
    width: sizes.screenWidth * 0.13,
  },
  nameText: {
    color: colors.black,
    fontSize: fontSize.large,
    fontWeight: '600',
    marginLeft: sizes.screenWidth * 0.04,
  },
  priceText: {
    color: colors.black,
    fontSize: fontSize.smallM,
    fontWeight: '600',
  },
  trackImg: {
    height: sizes.screenHeight * 0.11,
    width: sizes.screenWidth * 0.05,
    resizeMode: 'stretch',
    marginLeft: sizes.screenWidth * 0.03,
  },
  locationTextView: {
    height: sizes.screenHeight * 0.11,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginLeft: sizes.screenWidth * 0.02,
  },
  locationMainView: {
    width: sizes.screenWidth * 0.78,
    alignSelf: 'center',
    marginTop: sizes.screenHeight * 0.015,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  locationText: {
    color: colors.black,
    fontSize: fontSize.smallM,
    fontWeight: '500',
  },
  timeText: {
    color: colors.disabledBg2,
    fontSize: fontSize.small,
  },
  pendingText: {
    color: colors.error,
  },
  marginBottom: {
    marginBottom: sizes.screenHeight * 0.1,
  },
  completedText: {
    color: '#3A955E',
  },
});
