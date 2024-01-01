import {StyleProp, StyleSheet} from 'react-native';
import {colors, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  MainContainer: {
    backgroundColor: colors.white,
    height: sizes.screenHeight,
    width: sizes.screenWidth,
  },
  iconImg: {
    // backgroundColor:"red",
    width: sizes.screenWidth * 0.045,
    height: sizes.screenWidth * 0.045,
  },
  headerImg: {
    position: 'absolute',
    right: sizes.screenWidth * 0.22,
    top: sizes.screenWidth * 0.072,
  },
  rowColumnContainer: {
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
    margin:sizes.screenWidth * 0.025
  },
  MainrowColumnContainer:{
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
    margin:sizes.screenWidth * 0.025,
    marginTop:sizes.screenHeight * 0.04,
    height:sizes.screenHeight * 0.4
  },
  rowView: {
    flexDirection: 'row',
  },
  rowView2: {
    flexDirection: 'row',
    alignSelf:'center',
    marginTop: sizes.screenWidth * 0.04,
  },
  columnView: {
    padding: sizes.screenWidth * 0.02,
  },
  girlImg: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.26,
    height: sizes.screenWidth * 0.26,
    // backgroundColor:'black',
  },
  textSty1: {
    color: colors.black,
    fontSize: fontSize.medium,
    fontWeight: '500',
  },
  textSty2: {
    color: colors.disabledBg3,
  },
  textSty3: {
    color: colors.black,
    fontWeight: 'bold',

    marginTop: sizes.screenWidth * 0.01,
  },
  starImg: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.25,
    height: sizes.screenHeight * 0.02,
    marginTop: sizes.screenWidth * 0.01,
  },
  textHeadingSty1: {
    color: colors.black,
    alignSelf:'center',
    fontSize:fontSize.extraLarge,
    marginTop:sizes.screenHeight * 0.02,
  },
  textHeadingSty2: {
    color: colors.black,
    fontSize:fontSize.h4,
    fontWeight:'bold'
  },
  lengthImg:{
    marginTop:sizes.screenHeight * 0.01,
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.03,
    height: sizes.screenHeight * 0.11,
    // backgroundColor:'red',
  },
  marginLength:{
    paddingLeft:sizes.screenWidth * 0.03,
    // justifyContent:'center'
  },
  textLengthSty2:{
    marginTop:sizes.screenHeight * 0.03,
    color:colors.disabledBg3
  },
  textLengthSty1:{
    marginBottom:sizes.screenHeight * 0.001,
    color:colors.disabledBg3
},
textLengthSty3:{
    color:colors.disabledBg3
},
bottomTextView:{
    alignSelf:'center'
},
bottomTextSty1:{
    alignSelf:'center',
    fontSize:fontSize.large,
    color:colors.black,
    fontWeight:'bold',
    marginTop:sizes.screenHeight * 0.01
},
bottomTextSty2:{
    color:colors.disabledBg3,
    marginTop:sizes.screenHeight * 0.01
    
},
bottomTextSty3:{
    alignSelf:'center',
    color:colors.disabledBg3
},
bgImg:{
    height:sizes.screenHeight,
    width:sizes.screenWidth,
    bottom:sizes.screenWidth * 1.3
},
recommendedView: {
    bottom: sizes.screenHeight / 0.78,
    backgroundColor: colors.white,
    height: sizes.screenHeight,
    borderTopRightRadius: sizes.screenWidth * 0.1,
    borderTopLeftRadius: sizes.screenWidth * 0.1,
  },
  recommendedView2: {
    bottom: sizes.screenHeight / 0.99,
    backgroundColor: colors.white,
    height: sizes.screenHeight,
    borderTopRightRadius: sizes.screenWidth * 0.1,
    borderTopLeftRadius: sizes.screenWidth * 0.1,
  },
  recommendedView3: {
    bottom: sizes.screenHeight / 0.93,
    backgroundColor: colors.white,
    height: sizes.screenHeight,
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
  btnSty:{
    alignSelf:'center',
    marginTop:sizes.screenHeight * 0.05,
    borderWidth:1,
    backgroundColor:colors.black,
    alignItems:'center',
    width:sizes.screenWidth * 0.5,
    height:sizes.screenHeight * 0.045,
    justifyContent:'center',
    borderRadius:sizes.screenWidth * 0.3
  },
  btnSty3:{
    // alignSelf:'center',
    marginTop:sizes.screenHeight * 0.02,
    borderWidth:1,
    backgroundColor:colors.black,
    alignItems:'center',
    width:sizes.screenWidth * 0.5,
    height:sizes.screenHeight * 0.045,
    justifyContent:'center',
    borderRadius:sizes.screenWidth * 0.3
  },
  btnSty2:{
    // alignSelf:'center',
    // marginTop:sizes.screenHeight * 0.05,
    borderWidth:1,
    backgroundColor:colors.white,
    alignItems:'center',
    width:sizes.screenWidth * 0.5,
    height:sizes.screenHeight * 0.045,
    justifyContent:'center',
    borderRadius:sizes.screenWidth * 0.3
  },
  btnTextSty:{
    color:colors.white,
    fontSize:fontSize.medium
  },
  btnTextSty2:{
    color:colors.black,
    fontSize:fontSize.medium
  },
  modalView:{
    padding:sizes.screenWidth * 0.02
},
modalRow:{
    flexDirection:'row',
    justifyContent:'center'
},
modalRow2:{
    flexDirection:'row',
},
modalRowImg:{
    width:sizes.screenWidth * 0.045,
    height:sizes.screenHeight * 0.03,
},
modalRowViewImg:{
  position:'absolute',
  left:sizes.screenWidth * 0.15
},
modalRowImg2:{
    resizeMode:'contain',
    width:sizes.screenWidth * 0.06,
    height:sizes.screenWidth * 0.05,
},
startModalText:{
  color:'#8189B0',
  marginRight:sizes.screenWidth * 0.02,
  marginLeft:sizes.screenWidth * 0.02
},
horizontalLine: {
  height: 1,
  width: sizes.screenWidth * 1,
  backgroundColor: colors.btngrey,
  marginTop: sizes.screenHeight * 0.02,
},
modalmiddleSectionView:{
  flexDirection:'row',
  // alignSelf:'center',
  justifyContent:'space-evenly',
  marginTop:sizes.screenHeight * 0.03
},
middleModalTextSty:{
  color:colors.black,
  fontSize:fontSize.extraLarge,
  fontWeight:'bold'
},
middlemodalView:{
  resizeMode:'contain',
  width:sizes.screenWidth * 0.08,
  height:sizes.screenWidth * 0.08,
  // backgroundColor:'red'
},
crossbtnView:{
  // resizeMode:'contain',
  width:sizes.screenWidth * 0.14,
  height:sizes.screenWidth * 0.12,
},
crossbtnMainView:{
  position:'absolute',
  bottom:sizes.screenHeight * 0.59,
  right:sizes.screenHeight * 0.04,
},
crossbtnMainView3:{
  position:'absolute',
  bottom:sizes.screenHeight * 0.77,
  left:sizes.screenHeight * 0.3,
},
crossbtnMainView2:{
  position:'absolute',
  bottom:sizes.screenHeight * 1.25,
  right:sizes.screenHeight * 0.04,
},
cancelRideMainView:{
  width:sizes.screenWidth * 0.7,
  height:sizes.screenHeight * 0.4,
  backgroundColor:colors.red,
  alignSelf:'center'
},
textModal:{
  color:colors.black,
  fontSize:fontSize.large,
  fontWeight:'600'
},
textModal2:{
  color:colors.disabledBg2,
  marginTop:sizes.screenHeight * 0.02,
  marginBottom:sizes.screenHeight * 0.03,
},
modalCOntinue:{
  width:sizes.screenWidth * 0.8,
  height:sizes.screenHeight * 0.55,
  backgroundColor:colors.white,
  alignSelf:'center',
  borderRadius:sizes.screenWidth * 0.03,
},
congratsSiz:{
  resizeMode:'contain',
  width:sizes.screenWidth * 0.45,
  height:sizes.screenWidth * 0.45,
  marginTop:sizes.screenHeight * 0.06,
},
congratsSiz2:{
  resizeMode:'contain',
  width:sizes.screenWidth * 0.1,
  height:sizes.screenWidth * 0.1,
  marginTop:sizes.screenHeight * 0.05
},
modalText:{
  color:colors.black,
  fontSize:fontSize.h4,
  fontWeight:'700',
  marginBottom:sizes.screenHeight * 0.02
},
modalText2:{
  color:colors.black,
  fontSize:fontSize.smallM
},
});
