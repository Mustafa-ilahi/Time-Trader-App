import { StyleSheet } from "react-native";
import { colors, sizes } from "../../services";
export const styles = StyleSheet.create({
    MainContainer:{
        backgroundColor:colors.white,
        height: sizes.screenHeight,
        width: sizes.screenWidth,
      },
      row:{
        flexDirection:'row'
      },
      imgSty:{
        resizeMode:'contain',
        width:sizes.screenWidth * 0.07,
        height:sizes.screenHeight * 0.04,
        backgroundColor:'red'
      },
})