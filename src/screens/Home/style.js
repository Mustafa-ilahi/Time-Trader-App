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
    // left: sizes.screenHeight * 0.12,
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
  headerView2: {
    backgroundColor: '#2B2B2B',
    padding: sizes.screenWidth * 0.02,
    borderRadius: sizes.screenWidth * 0.5,
    left: sizes.screenWidth * 0.34,
    bottom: sizes.screenHeight * 0.1,
  },
  recommendedView: {
    bottom: sizes.screenHeight / 0.78,
    backgroundColor: colors.white,
    height: sizes.screenHeight,
    borderTopRightRadius: sizes.screenWidth * 0.1,
    borderTopLeftRadius: sizes.screenWidth * 0.1,
  },
  heading: {
    alignSelf: 'center',
    alignItems: 'center',
    fontSize: fontSize.medium,
    color: colors.black,
    fontWeight: '500',
    marginBottom: sizes.screenHeight * 0.07,
    // backgroundColor: 'yellow',
  },
  heading2: {
    alignSelf: 'center',
    alignItems: 'center',
    fontSize: fontSize.smallM,
    color: colors.black,
    fontWeight: '500',
  },
  modalRow: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    // justifyContent:'center',
    // backgroundColor: 'red',
    height: sizes.screenHeight * 0.04,
    width: sizes.screenWidth * 0.7,
    marginTop: sizes.screenHeight * 0.024,
    // marginLeft:sizes.screenWidth * 0.2
  },
  imgSty: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.04,
    height: sizes.screenHeight * 0.025,
    marginRight: sizes.screenWidth * 0.03,
    // backgroundColor:'red'
  },
  bottomBtn: {
    backgroundColor: colors.white,
    padding: sizes.screenHeight * 0.02,
    top: sizes.screenHeight * 0.26,
    borderTopRightRadius: sizes.screenWidth * 0.05,
    borderTopLeftRadius: sizes.screenWidth * 0.05,
    height:sizes.screenHeight*0.1,
    flexDirection:'row',
    justifyContent:'space-between',
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 0,
    elevation: 10,
    backgroundColor: colors.white,
    color:colors.black
  },
  modalMainView:{
    width:sizes.screenWidth * 0.8,
    height:sizes.screenHeight * 0.6,
    alignSelf:'center',
    backgroundColor:colors.white,
    borderRadius:sizes.screenWidth * 0.04
  },
  modalImg:{
    resizeMode:'contain',
    width:sizes.screenWidth * 0.45,
    height:sizes.screenWidth * 0.45,
    marginTop:sizes.screenHeight * 0.04,
  },
  modalHeading:{
    color:colors.black,
    fontSize:fontSize.h5,
    fontWeight:'700',
    marginTop:sizes.screenHeight * 0.01,
    marginBottom:sizes.screenHeight * 0.01,
  },
  modalPara:{ 
    color:colors.disabledBg3,
    fontSize:fontSize.smallM,
  },
  btnSty:{
    alignSelf:'center',
    marginTop:sizes.screenHeight * 0.05,
    // borderWidth:1,
    backgroundColor:colors.black,
    alignItems:'center',
    width:sizes.screenWidth * 0.6,
    height:sizes.screenHeight * 0.06,
    justifyContent:'center',
    borderRadius:sizes.screenWidth * 0.3
  },
  btnTextSty:{
    color:colors.white,
    fontSize:fontSize.medium,
  },
  btnStySecond:{
    alignSelf:'center',
    marginTop:sizes.screenHeight * 0.01,
    borderWidth:1,
    backgroundColor:colors.white,
    alignItems:'center',
    width:sizes.screenWidth * 0.6,
    height:sizes.screenHeight * 0.05,
    justifyContent:'center',
    borderRadius:sizes.screenWidth * 0.3
  },
  btnTextSty2:{
    color:colors.black,
    fontSize:fontSize.medium,
  },
});
