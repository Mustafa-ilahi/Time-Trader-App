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
  headerText: {
    alignSelf: 'center',
    position: 'absolute',
    top: 22,
    left: 90,
    fontSize: fontSize.h5,
    color: colors.black,
    fontWeight: '900',
  },
  headerPadding: {
    marginLeft: sizes.screenWidth * 0.03,
    marginTop: sizes.screenWidth * 0.03,
    marginBottom: sizes.screenWidth * 0.03,
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
    fontSize: fontSize.medium,
    alignSelf: 'center',
    marginBottom: sizes.screenHeight * 0.08,
  },
  textSty: {
    color: colors.black,
    fontWeight: 'bold',
    fontSize: fontSize.medium,
  },
  listTextSty2: {
    color: colors.black,
    position: 'absolute',
    right: sizes.screenWidth * 0.04,
    fontWeight: 'bold',
  },
  listTextSty1: {
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
    marginTop: sizes.screenWidth * 0.3 ,
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
  top: {
    marginTop: sizes.screenHeight * 0.05,
  },
  left:{
    left:sizes.screenWidth*0.03,
    width:sizes.screenWidth*0.69
  },
  ViewImg:{
    resizeMode:'contain',
    width:sizes.screenWidth * 0.05,
    height:sizes.screenWidth * 0.05,
},
});
