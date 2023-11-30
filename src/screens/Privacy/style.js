import { StyleSheet } from "react-native";
import { colors, fontSize, sizes } from "../../services";

export const styles = StyleSheet.create({
    mainView:{
        backgroundColor:colors.white,
        height:sizes.screenHeight,
        width:sizes.screenWidth,
    },
    graphText2:{
        color:colors.black,
        fontSize:fontSize.large,
        fontWeight:'bold',
        marginTop:sizes.screenHeight * 0.02
    },
    graphText3:{
        color:colors.disabledBg3,
        fontSize:fontSize.smallM,
        marginTop:sizes.screenHeight * 0.03
    },
    padding:{
        paddingHorizontal:sizes.screenWidth * 0.06
    }
})