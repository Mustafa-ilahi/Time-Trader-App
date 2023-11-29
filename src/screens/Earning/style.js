import { StyleSheet } from "react-native";
import { colors, fontSize, sizes } from "../../services";

export const styles = StyleSheet.create({
    mainView:{
        backgroundColor:colors.white,
        height:sizes.screenHeight,
        width:sizes.screenWidth,
    },
    topView:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center'
    },
    graphImg:{
        resizeMode:'contain',
        width:sizes.screenWidth * 0.4,
        height:sizes.screenHeight * 0.2
    },
    graphText1:{
        color:colors.disabledBg3,
        fontSize:fontSize.small
    },
    graphText2:{
        color:colors.black,
        fontSize:fontSize.smallM
    },

    rowView:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:sizes.screenWidth * 0.12,
        marginBottom:sizes.screenHeight * 0.02
    },
    graphText3:{
        color:colors.black,
        fontSize:fontSize.medium
    },
    graphText4:{
        color:colors.black,
        fontSize:fontSize.medium
    },
    btn:{
        backgroundColor:colors.btngrey,
        color:colors.black,
        width:sizes.screenWidth * 0.25,
        height:sizes.screenHeight * 0.04,
        alignSelf:'center',
        textAlign:'center',
        textAlignVertical:'center',
        borderRadius:sizes.screenWidth * 0.2,
        marginTop:sizes.screenHeight * 0.03
    },
    btn2:{
        backgroundColor:colors.black,
        color:colors.white,
        width:sizes.screenWidth * 0.25,
        height:sizes.screenHeight * 0.04,
        textAlign:'center',
        textAlignVertical:'center',
        borderRadius:sizes.screenWidth * 0.2,
        marginTop:sizes.screenHeight * 0.03
    },
    horizontalLine:{
        height:1,
        width:sizes.screenWidth * 1,
        backgroundColor:colors.btngrey,
        marginTop:sizes.screenHeight * 0.02
    },
    cashOutView:{
        paddingHorizontal:sizes.screenWidth * 0.1,
        marginTop:sizes.screenHeight * 0.02
    },
    row:{
        flexDirection:'row',
        alignItems:'center',
        alignContent:'center',
        height:sizes.screenHeight * 0.07,
        width:sizes.screenWidth * 0.86,
        marginLeft:sizes.screenWidth * 0.07,
        marginTop:sizes.screenWidth * 0.09,
        borderRadius:sizes.screenWidth * 0.03,
        shadowColor: '#000',
        shadowOffset: {
          width: 1,
          height: 1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 0,
        elevation: 10,
        backgroundColor:colors.white,
    },
    graphText5:{
        fontSize:fontSize.smallM,
        paddingLeft:sizes.screenWidth * 0.02,
        color:colors.disabledBg3
    },
    bottomImg:{
        resizeMode:'contain',
        width:sizes.screenWidth * 0.07,
        height:sizes.screenHeight * 0.04,
        marginLeft:sizes.screenWidth * 0.03,
    }
})