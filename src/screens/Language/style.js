import { StyleSheet } from "react-native";
import { colors, fontSize, sizes } from "../../services";

export const styles = StyleSheet.create({
    MainContainer:{
        backgroundColor:colors.white,
        height: sizes.screenHeight,
        width: sizes.screenWidth,
      },
      padding:{
        paddingLeft:sizes.screenWidth * 0.06 
      },
      headingSty:{
        color:colors.black,
        fontSize:fontSize.extraLarge,
        fontWeight:'bold',
      },
      headingSty2:{
        color:colors.black,
        fontSize:fontSize.extraLarge,
        fontWeight:'bold',
        marginBottom:sizes.screenWidth * 0.04,
        marginTop:sizes.screenHeight * 0.02,
      },
      topMainView:{
        marginTop:sizes.screenHeight * 0.02,
        marginBottom:sizes.screenHeight * 0.03
    },
    MainviewSty:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:sizes.screenWidth * 0.04,
        borderRadius:sizes.screenWidth * 0.02,
        width:sizes.screenWidth * 0.9,
        height:sizes.screenHeight * 0.07,
        marginBottom:sizes.screenWidth * 0.01,
        marginTop:sizes.screenWidth * 0.01,
        shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 0,

    elevation: 8,
    backgroundColor:colors.white
    },
    TextviewSty:{
   
    },
    ViewImg:{
        resizeMode:'contain',
        width:sizes.screenWidth * 0.05,
        height:sizes.screenWidth * 0.05 
    },
    viewTextSty:{
        fontSize:fontSize.medium,
        color:colors.black,
        // fontWeight:'bold',
        marginLeft:sizes.screenWidth * 0.03
    },
    viewTextSty2:{
        fontSize:fontSize.smallM,
        color:colors.black
    },
})