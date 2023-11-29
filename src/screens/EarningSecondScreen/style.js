import { StyleSheet } from "react-native";
import { colors, fontSize, sizes } from "../../services";

export const styles = StyleSheet.create({
    mainView:{
        backgroundColor:colors.white,
        height:sizes.screenHeight,
        width:sizes.screenWidth,
    },
    graphText1:{
        color:colors.black,
        fontSize:fontSize.extraLarge,
        alignSelf:'center',
        marginBottom:sizes.screenHeight * 0.02
    },
    graphText2:{
        color:colors.black,
        fontSize:fontSize.large,
        fontWeight:'bold'
    },
    graphImg:{
        resizeMode:'contain',
        width:sizes.screenWidth * 0.9,
        height:sizes.screenHeight * 0.2,
        alignSelf:'center'
    },
    secondView:{
        marginLeft:sizes.screenWidth * 0.07,
        marginTop:sizes.screenWidth * 0.05
    },
    row:{
        flexDirection:'row',
        marginTop:sizes.screenWidth * 0.03,
        justifyContent:'space-between',
        width: sizes.screenWidth * 0.85
    },
    graphText3:{
        color:colors.disabledBg3,
        fontSize:fontSize.smallM,
    },
    graphText4:{
        color:colors.black,
        fontSize:fontSize.medium,
    },
    horizontalLine:{
        height:1,
        width:sizes.screenWidth * 1,
        backgroundColor:colors.btngrey,
        marginTop:sizes.screenHeight * 0.02
    },
    btn:{
        backgroundColor:colors.btngrey,
        color:colors.black,
        width:sizes.screenWidth * 0.6,
        height:sizes.screenHeight * 0.04,
        alignSelf:'center',
        textAlign:'center',
        textAlignVertical:'center',
        borderRadius:sizes.screenWidth * 0.2,
        marginTop:sizes.screenHeight * 0.08
    },
})