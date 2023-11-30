import {StyleSheet} from 'react-native';
import {colors, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  MainContainer: {
    backgroundColor: colors.white,
    height: sizes.screenHeight,
  },
  headerImg: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.05,
    height: sizes.screenHeight * 0.02,
  },
  headerImgTouchable: {
    position: 'absolute',
    zIndex: 10,
    right: sizes.screenWidth * 0.07,
    top: sizes.screenHeight * 0.035,
  },
  profileImg: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.27,
    height: sizes.screenWidth * 0.27,
    alignSelf: 'center',
    position: 'absolute',
    top: 70,
  },
  bannerImg: {
    width: sizes.screenWidth * 1,
    height: sizes.screenWidth * 0.35,
  },
  contentView: {
    marginTop: sizes.screenHeight * 0.05,
  },
  profileText1: {
    fontSize: fontSize.extraLarge,
    fontWeight: 'bold',
    color: colors.black,
    alignSelf: 'center',
  },
  row: {
    flexDirection: 'row',
    marginTop: sizes.screenWidth * 0.03,
    justifyContent: 'space-around',
    width: sizes.screenWidth * 0.85,
    alignSelf: 'center',
  },
  graphText3: {
    color: colors.disabledBg3,
    fontSize: fontSize.smallM,
  },
  graphText: {
    color: colors.black,
    fontSize: fontSize.medium,
    alignSelf: 'center',
  },
  graphText4: {
    color: colors.black,
    fontSize: fontSize.large,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  horizontalLine: {
    height: 1,
    width: sizes.screenWidth * 1,
    backgroundColor: colors.btngrey,
    marginTop: sizes.screenHeight * 0.02,
  },
  cashOutView: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: sizes.screenHeight * 0.02,
  },
  graphText1: {
    color: colors.disabledBg3,
    marginTop: sizes.screenHeight * 0.002,
    fontSize: fontSize.medium,
  },
  btn2: {
    backgroundColor: colors.btngrey,
    color: colors.black,
    width: sizes.screenWidth * 0.37,
    height: sizes.screenHeight * 0.05,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: sizes.screenWidth * 0.2,
    alignSelf: 'center',
    marginTop: sizes.screenHeight * 0.02,
    fontSize: fontSize.large,
  },
  row2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: sizes.screenWidth * 0.08,
    marginTop: sizes.screenHeight * 0.02,
    alignItems: 'center',
  },
  roundImg: {
    height: sizes.screenWidth * 0.17,
    width: sizes.screenWidth * 0.17,
  },
  roundImgNmbr: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.075,
    height: sizes.screenHeight * 0.025,
    position: 'absolute',
    left: sizes.screenWidth * 0.13,
    top: sizes.screenHeight * 0.012,
  },
  roundView: {
    flexDirection: 'row',
    marginTop: sizes.screenHeight * 0.03,
    paddingRight: sizes.screenWidth * 0.05,
  },
  roundView2: {
    flexDirection: 'row',
    marginTop: sizes.screenHeight * 0.03,
    paddingRight: sizes.screenWidth * 0.05,
    paddingBottom: sizes.screenHeight * 0.05,
  },
  roundCenterView: {
    alignItems: 'center',
    marginLeft: sizes.screenWidth * 0.05,
  },

  roundText: {
    width: sizes.screenWidth * 0.2,
    textAlign: 'center',
    color: colors.disabledBg3,
    marginTop: sizes.screenHeight * 0.015,
  },
  bottomDiv: {
    width: sizes.screenWidth * 0.8,
    height: sizes.screenHeight * 0.15,
    marginLeft: 10,
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    paddingLeft: sizes.screenWidth * 0.05,
    borderRadius: sizes.screenWidth * 0.02,
    backgroundColor: 'white',

    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 0,

    elevation: 8,
  },
  bottomDivText1: {
    color: colors.black,
    fontSize: fontSize.medium,
    fontWeight: '500',
    width: sizes.screenWidth * 0.5,
  },
  bottomDivText2: {
    color: colors.disabledBg2,
    fontSize: fontSize.medium,
    fontWeight: '400',
  },
});
