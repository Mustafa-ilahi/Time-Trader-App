import { StyleSheet } from "react-native";
import { colors, fontSize, sizes } from "../../services";

export const styles = StyleSheet.create({
    mainView:{
        backgroundColor:colors.white,
        height:sizes.screenHeight,
        width:sizes.screenWidth,
    },
    headerView:{
        marginBottom:sizes.screenHeight * 0.02
    },
    padding:{
        paddingHorizontal:sizes.screenWidth * 0.03,
        paddingTop:sizes.screenHeight * 0.01
    },
    mainCardView:{
        flexDirection:'row',
        width:sizes.screenWidth * 0.9,
        height:sizes.screenHeight * 0.07,
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:sizes.screenWidth * 0.04,
        borderRadius:sizes.screenWidth * 0.01,
        marginBottom:sizes.screenWidth * 0.01,
    },
    cardImg:{
        resizeMode:'center',
        width:sizes.screenWidth * 0.06,
        height:sizes.screenWidth * 0.05,
    },
    cardImg2:{
        resizeMode:'center',
        width:sizes.screenWidth * 0.06,
        height:sizes.screenWidth * 0.05,
        position:'absolute',
        right:0
    },
    cardText:{
        fontSize:fontSize.smallM,
        color:colors.black,
        paddingLeft:sizes.screenWidth * 0.03
    },
    subHeading:{
        color:colors.disabledBg3,
        fontSize:fontSize.tiny,
        marginLeft:sizes.screenHeight * 0.015
    },
    horizontalLine:{
        height:1,
        width:sizes.screenWidth * 1,
        backgroundColor:colors.btngrey,
        // marginTop:sizes.screenHeight * 0.02
    },
    graphText2:{
        color:colors.black,
        fontSize:fontSize.large,
        fontWeight:'bold',
        marginTop:sizes.screenHeight * 0.02,
        marginBottom:sizes.screenHeight * 0.01,
        marginLeft:sizes.screenHeight * 0.02

    },
})