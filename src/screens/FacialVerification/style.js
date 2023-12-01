import { StyleSheet } from "react-native";
import { colors, fontSize, sizes } from "../../services";

export const styles  = StyleSheet.create({
    MainContainer:{
        backgroundColor:colors.white,
        height: sizes.screenHeight,
        width: sizes.screenWidth,
      },
      qrImg:{
        resizeMode:'contain',
        width:sizes.screenWidth * 0.7,
        height:sizes.screenWidth * 0.7,
        alignSelf:'center',
        marginTop:sizes.screenHeight * 0.02
      },
      TextSty:{
        color:colors.black,
        fontSize:fontSize.extraLarge,
        fontWeight:'bold',
        alignSelf:'center',
        marginTop:sizes.screenHeight * 0.04
      },
      btnView: {
        alignSelf:'center',
        position:"absolute",
        bottom:sizes.screenHeight * 0.05
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