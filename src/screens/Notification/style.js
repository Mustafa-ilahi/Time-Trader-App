import {StyleSheet} from 'react-native';
import {colors, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  MainContainer: {
    backgroundColor: colors.white,
    height: sizes.screenHeight,
    width: sizes.screenWidth,
  },
  mainView: {
    backgroundColor: colors.white,
    height: sizes.screenHeight,
    width: sizes.screenWidth,
  },
  headerImg: {
    position: 'absolute',
    right: 23,
    bottom: 13,
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.08,
    height: sizes.screenWidth * 0.08,
  },
  topMainView: {
    marginTop: sizes.screenHeight * 0.03,
  },
  MainviewSty: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: sizes.screenWidth * 0.04,
    // borderWidth:1,
    borderRadius: sizes.screenWidth * 0.01,
    width: sizes.screenWidth * 0.9,
    height: sizes.screenHeight * 0.1,
    marginLeft: sizes.screenWidth * 0.05,
    marginBottom: sizes.screenWidth * 0.01,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 0,

    elevation: 8,
    backgroundColor: colors.white,
  },
  TextviewSty: {
    marginLeft: sizes.screenWidth * 0.03,
  },
  ViewImg: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.12,
    height: sizes.screenWidth * 0.12,
  },
  viewTextSty: {
    fontSize: fontSize.medium,
    color: colors.black,
    fontWeight: 'bold',
  },
  viewTextSty2: {
    fontSize: fontSize.smallM,
    color: colors.black,
  },
  bold: {
    fontWeight: '600',
  },
});
