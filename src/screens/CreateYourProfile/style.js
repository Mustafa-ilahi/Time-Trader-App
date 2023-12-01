import {StyleSheet} from 'react-native';
import {colors, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  MainContainer: {
    backgroundColor: colors.white,
    height: sizes.screenHeight,
    width: sizes.screenWidth,
  },
  forgotPass: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.3,
    height: sizes.screenWidth * 0.3,
    alignSelf: 'center',
  },
  editIcon: {
    resizeMode: 'contain',

    height: sizes.screenHeight * 0.03,
    width: sizes.screenWidth * 0.08,

  },
  editBtn:{
    position:'absolute',
    left:sizes.screenWidth*0.55,
    top: sizes.screenHeight * 0.205,
  },
  mainView: {
    backgroundColor: colors.white,
    height: sizes.screenHeight,
    width: sizes.screenWidth,
  },
  headerPadding: {
    marginBottom:sizes.screenHeight * 0.01
  },
  topView: {
    alignSelf: 'center',
  },
  listViewSty: {
    height: sizes.screenHeight * 0.07,
    width: sizes.screenWidth * 0.82,
    alignItems: 'center',
    borderRadius: sizes.screenWidth * 0.01,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 0,
    elevation: 10,
    backgroundColor: colors.white,
    marginTop: sizes.screenWidth * 0.02,
    flexDirection: 'row',
    paddingHorizontal: sizes.screenWidth * 0.02,
  },
  listTextSty: {
    color: colors.black,
    paddingLeft: sizes.screenWidth * 0.1,
  },
  listTextSty2: {
    color: colors.black,
  },
  imgSty: {
    resizeMode: 'center',
    width: sizes.screenWidth * 0.08,
    height: sizes.screenWidth * 0.08,
    position: 'absolute',
    right: 10,
  },
  imgSty2: {
    resizeMode: 'center',
    width: sizes.screenWidth * 0.08,
    height: sizes.screenWidth * 0.08,
  },
  btnView: {
    alignItems: 'center',
    marginTop: sizes.screenWidth * 0.1,
  },
  btnText: {
    color: colors.white,
    backgroundColor: colors.black,
    height: sizes.screenHeight * 0.07,
    width: sizes.screenWidth * 0.82,
    borderRadius: sizes.screenWidth * 0.2,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: '500',
    fontSize: fontSize.medium,
  },
});
