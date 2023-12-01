import { StyleSheet } from "react-native";
import { colors, sizes } from "../../services";
export const styles = StyleSheet.create({
    MainContainer:{
        backgroundColor:colors.white,
        height: sizes.screenHeight,
        width: sizes.screenWidth,
      },
      row:{
        flexDirection:'row',
        position:'absolute',
        right:sizes.screenWidth * 0.05,
        top:sizes.screenHeight * 0.03,
        justifyContent:'space-between',
        width:sizes.screenWidth * 0.15,
      },
      imgSty:{
        resizeMode:'contain',
        width:sizes.screenWidth * 0.06,
        height:sizes.screenHeight * 0.04,
        // position:'absolute'
        // backgroundColor:'red'
      },
      columnView:{
        color:colors.disabledBg3,
        alignSelf:'center'
      },
      center:{
        alignSelf:'center'
      },
})