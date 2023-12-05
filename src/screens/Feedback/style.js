import { StyleSheet } from "react-native";
import { colors, fontSize, sizes } from "../../services";

export const styles = StyleSheet.create({
    MainContainer: {
        backgroundColor: colors.white,
        height: sizes.screenHeight,
        width: sizes.screenWidth,
      },
      row: {
        flexDirection: 'row',
        position: 'absolute',
        right: sizes.screenWidth * 0.05,
        top: sizes.screenHeight * 0.03,
        justifyContent: 'space-between',
        width: sizes.screenWidth * 0.15,
      },
      imgSty: {
        resizeMode: 'contain',
        width: sizes.screenWidth * 0.06,
        height: sizes.screenHeight * 0.04,
      },
      // horizontalLine: {
      //   height: 1,
      //   width: sizes.screenWidth * 1,
      //   backgroundColor: colors.btngrey,
      //   marginTop: sizes.screenHeight * 0.02,
      // },
      textRow:{
        flexDirection:'row',
        alignItems:'center',
        marginLeft:sizes.screenWidth * 0.12,
        marginBottom:sizes.screenWidth * 0.07,
      },
      textRow2:{
        flexDirection:'row',
        alignItems:'center',
        marginLeft:sizes.screenWidth * 0.12,
        marginBottom:sizes.screenWidth * 0.07,
        marginTop:sizes.screenWidth * 0.07
      },
      headingTextSty:{
        color:'#8189B0',
        fontSize:fontSize.medium,
        marginLeft:sizes.screenWidth * 0.1,
        marginTop:sizes.screenWidth * 0.1,
        marginBottom:sizes.screenWidth * 0.1
      },
      crossImgSty:{
        width:sizes.screenWidth * 0.026,
        height:sizes.screenWidth * 0.026,
      },
      crossTextSty:{
        marginLeft:sizes.screenWidth * 0.025,
        fontSize:fontSize.smallM,
        color:colors.black
      },
      dotImgSty:{
        resizeMode: 'contain',
        width: sizes.screenWidth * 0.017,
        height: sizes.screenHeight * 0.014,
      },
      bgImg:{
        height:sizes.screenHeight,
        width:sizes.screenWidth,
        bottom:sizes.screenWidth * 1.41
    },
    recommendedView2: {
      top: sizes.screenHeight * 0.55,
      backgroundColor: colors.white,
      height: sizes.screenHeight,
      borderTopRightRadius: sizes.screenWidth * 0.07,
      borderTopLeftRadius: sizes.screenWidth * 0.07,
    },
    blackView: {
      borderWidth: 3,
      borderRadius: sizes.screenWidth * 0.02,
      width: sizes.screenWidth * 0.1,
      alignSelf: 'center',
      marginTop: sizes.screenHeight * 0.016,
      marginBottom: sizes.screenHeight * 0.01,
    },
  modalRow:{
      flexDirection:'row',
      justifyContent:'center'
  },
  horizontalLine: {
    height: 1,
    width: sizes.screenWidth * 1,
    backgroundColor: colors.btngrey,
    marginTop: sizes.screenHeight * 0.02,
  },
  textalign:{
    marginLeft:sizes.screenWidth * 0.1,
    color:'#8189B0',
    fontSize:fontSize.medium
  },
  InlineRow:{
    flexDirection:'row',
    alignItems:'center',
    paddingHorizontal:sizes.screenWidth * 0.08,
    marginTop:sizes.screenHeight * 0.03
  },
  InlineRow2:{
    flexDirection:'row',
    // alignItems:'center',
    paddingHorizontal:sizes.screenWidth * 0.08,
    marginTop:sizes.screenHeight * 0.03
  },
  bottomImgSty:{
    resizeMode:'contain',
    width:sizes.screenWidth * 0.045,
    height:sizes.screenWidth * 0.045,
  },
  // bottomImgSty2:{
  //   resizeMode:'contain',
  //   width:sizes.screenWidth * 0.045,
  //   height:sizes.screenWidth * 0.045,
  //   // position:'absolute',
  //   // top:sizes.screenWidth * 0,
  //   // left:sizes.screenWidth * 0.05
    
  // },
  bottomTextSty:{
    color:'#8189B0',
    fontSize:fontSize.smallM,
    marginLeft:sizes.screenWidth * 0.02,
  },
  bottomTextSty2:{
    color:'#8189B0',
    fontSize:fontSize.small,
    marginLeft:sizes.screenWidth * 0.02,
  },
})