import {StyleSheet} from 'react-native';
import {colors, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  MainContainer: {
    backgroundColor: colors.white,
    height: sizes.screenHeight,
    width: sizes.screenWidth,
  },
  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: sizes.screenWidth * 0.05,
    marginTop: sizes.screenWidth * 0.05,
  },
  headerImg: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.015,
    height: sizes.screenHeight * 0.015,
  },
  headerTitle: {
    marginLeft: sizes.screenWidth * 0.25,
    fontSize: fontSize.h5,
    color: colors.black,
    fontWeight: 'bold',
  },
  textFieldView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: sizes.screenWidth * 0.05,
    marginTop: sizes.screenWidth * 0.05,
    marginLeft: sizes.screenWidth * 0.04,
    borderRadius: sizes.screenWidth * 0.3,
    width: sizes.screenWidth * 0.9,
    borderColor:colors.disabledBg3,
    borderWidth: 1,
  },
  searchImg: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.05,
    height: sizes.screenHeight * 0.04,
  },
  textField: {
    color: colors.black,
    marginLeft: sizes.screenWidth * 0.04,
    width: sizes.screenWidth * 0.7,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: sizes.screenWidth * 0.05,
  },
  textStyling: {
    fontSize: fontSize.medium,
    color: colors.black,
    fontWeight: '500',
  },
  horiLine:{
    height: 4,
    borderTopRightRadius:sizes.screenWidth * 1,
    borderTopLeftRadius:sizes.screenWidth * 1,
    width: sizes.screenWidth * 0.3,
    marginTop: sizes.screenWidth * 0.04,
    backgroundColor: colors.black,
    position:'absolute',
    top:sizes.screenHeight * 0.2,
    left:sizes.screenWidth * 0.1
  },
  left:{
    left:sizes.screenWidth * 0.5

  },
  horizontalLine: {
    height: 1.2,
    width: sizes.screenWidth * 1,
    marginTop: sizes.screenWidth * 0.04,
    backgroundColor: '#C4C4C4',
  },
  horizontalRow: {
    flexDirection: 'row',
    marginTop: sizes.screenWidth * 0.05,
  },
  textStylingRow: {
    fontSize: fontSize.medium,
    color: colors.white,
    fontWeight: '500',
  },
  textStylingRow2: {
    fontSize: fontSize.medium,
    color: colors.black,
    fontWeight: '500',
  },
  viewBorderStyling: {
    // borderWidth: 1,
    width: sizes.screenWidth * 0.25,
    height: sizes.screenHeight * 0.04,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: sizes.screenWidth * 0.3,
    backgroundColor: colors.black,
    color: colors.white,
    marginLeft: sizes.screenWidth * 0.025,
  },
  viewBorderStyling2: {
    width: sizes.screenWidth * 0.25,
    height: sizes.screenHeight * 0.04,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: sizes.screenWidth * 0.3,
    backgroundColor: '#D9D9D9',
    color: colors.white,
    marginLeft: sizes.screenWidth * 0.025,
  },
  bottomMainView: {
    paddingLeft: sizes.screenWidth * 0.04,
    marginTop: sizes.screenHeight * 0.03,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 0,
    elevation: 10,
    backgroundColor: colors.white,
    width: sizes.screenWidth * 0.9,
    height: sizes.screenHeight * 0.13,
    borderRadius: sizes.screenWidth * 0.02,
    alignSelf: 'center',
  },
  bottomMainView2: {
    paddingLeft: sizes.screenWidth * 0.04,
    marginTop: sizes.screenHeight * 0.03,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 0,
    elevation: 10,
    backgroundColor: colors.white,
    width: sizes.screenWidth * 0.9,
    height: sizes.screenHeight * 0.06,
    borderRadius: sizes.screenWidth * 0.02,
    alignSelf: 'center',
  },
  bottomViewAllingment: {
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    marginTop: sizes.screenHeight * 0.01,
    width:sizes.screenWidth * 0.81,
    // paddingTop:sizes.screenHeight * 0.006
  },
  downArrowSty: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.035,
    height: sizes.screenHeight * 0.015,
  },
  viewTextSty: {
    color: colors.black,
    fontWeight: '500',
    // paddingLeft:sizes.screenWidth * 0.02,
    fontSize:fontSize.medium
  },
  passTextSty:{
    color: colors.black,
    fontWeight: '500',
    fontSize:fontSize.medium,
    position:'absolute',
    left:sizes.screenWidth * 0.12,
    // paddingLeft:sizes.screenWidth * 0.03,
  },
  line: {
    height: 1.2,
    width: sizes.screenWidth * 0.82,
    backgroundColor: '#C4C4C4',
    marginTop: sizes.screenHeight * 0.01,
  },
  bottomParaSty: {
    color: colors.disabledBg3,
    marginTop: sizes.screenHeight * 0.01,
    fontSize:fontSize.medium,
  },
  bottomParaSty2:{
    color: colors.disabledBg3,
    marginTop: sizes.screenHeight * 0.01,
    fontSize:fontSize.medium,
    paddingLeft:sizes.screenWidth * 0.06
  },
  height:{
    height:sizes.screenHeight * 0.05
  },
  Img:{
    flexDirection:'row',
    alignItems:'center',
  },
  passViewSty:{
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.08,
    height: sizes.screenHeight * 0.04,
    // backgroundColor:'red'
  },
  passViewMain:{
    paddingLeft: sizes.screenWidth * 0.04,
    marginTop: sizes.screenHeight * 0.03,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 0,
    elevation: 10,
    backgroundColor: colors.white,
    width: sizes.screenWidth * 0.9,
    height: sizes.screenHeight * 0.08,
    borderRadius: sizes.screenWidth * 0.02,
    alignSelf: 'center',
  },
});
