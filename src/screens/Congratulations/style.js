import { StyleSheet } from "react-native";
import { colors, fontSize, sizes } from "../../services";

export const styles  = StyleSheet.create({
    MainContainer:{
        backgroundColor:colors.white,
        height: sizes.screenHeight,
        width: sizes.screenWidth,
      },
    //   congMainView:{
    //     alignContent:'center',
    //     justifyContent:'center',
    //     alignItems:'center',
    //     alignSelf:'center'
    //   },
      qrImg:{
        resizeMode:'contain',
        width:sizes.screenWidth * 0.4,
        height:sizes.screenWidth * 0.4,
        alignSelf:'center',
        marginTop:sizes.screenHeight * 0.223
      },
      loadingImg:{
        resizeMode:'contain',
        width:sizes.screenWidth * 0.1,
        height:sizes.screenWidth * 0.1,
        alignSelf:'center',
        marginTop:sizes.screenHeight * 0.05
      },
      TextSty:{
        color:colors.black,
        fontSize:fontSize.h5,
        fontWeight:'bold',
        alignSelf:'center',
        marginTop:sizes.screenHeight * 0.04
      },
      TextSty2:{
        color:colors.black,
        fontSize:fontSize.medium,
        // fontWeight:'bold',
        alignSelf:'center',
        marginTop:sizes.screenHeight * 0.03
      },
      btnView: {
        alignSelf:'center',
        // marginTop:sizes.screenHeight * 0.4,
        position:"absolute",
        top:sizes.screenHeight * 0.86
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
})