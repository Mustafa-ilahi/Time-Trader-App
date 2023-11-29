import { StyleSheet } from "react-native";
import { colors, fontSize, sizes } from "../../services";

export const styles = StyleSheet.create({
    mainView:{
        backgroundColor:colors.white,
        height:sizes.screenHeight,
        width:sizes.screenWidth,
    },    
    headerImg:{
        position:'absolute',
        right:23,
        bottom:16,
        resizeMode:'contain',
        width:sizes.screenWidth * 0.05,
        height:sizes.screenWidth * 0.08,
    },
    profileView:{
        alignItems:'center'
    },
    profileImg:{
        resizeMode:'contain',
        width:sizes.screenWidth * 0.27,
        height:sizes.screenWidth * 0.27 
    },
    profileText1:{
        fontSize:fontSize.extraLarge,
        fontWeight:'bold',
        color:colors.black
    },
    profileText2:{
        color:colors.black
    },
    horizontalRow:{
        height:1,
        width:sizes.screenWidth * 0.82,
        backgroundColor:colors.disabledBg,
        marginLeft:sizes.screenWidth * 0.09,
        marginTop:sizes.screenHeight * 0.02,
        marginBottom:sizes.screenHeight * 0.02
    },
    listView:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:sizes.screenWidth * 0.1,
        marginTop:sizes.screenHeight * 0.02
    },
    tichImg:{
        resizeMode:'contain',
        width:sizes.screenWidth * 0.03,
        height:sizes.screenWidth * 0.03 
    },
    listViewText:{
        color:colors.black,
        fontSize:fontSize.medium,
        fontWeight:'600'
    },
    listViewText2:{
        color:colors.red,
        fontSize:fontSize.medium,
        fontWeight:'600'
    },
})