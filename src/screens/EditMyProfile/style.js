import { StyleSheet } from "react-native";
import { colors, fontSize, sizes } from "../../services";

export const styles = StyleSheet.create({
    headerPadding:{
        marginLeft:sizes.screenWidth * 0.03,
        marginTop:sizes.screenWidth * 0.03,
        marginBottom:sizes.screenWidth * 0.03
    },
    topView:{
    padding:sizes.screenWidth * 0.07,
    },
    listViewSty:{
        height:sizes.screenHeight * 0.07,
        width:sizes.screenWidth * 0.82,
        // justifyContent:'space-between',
        alignItems:'center',
        borderRadius:sizes.screenWidth * 0.01,
        shadowColor: '#000',
        shadowOffset: {
          width: 1,
          height: 1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 0,
        elevation: 10,
        backgroundColor:colors.white,
        marginTop:sizes.screenWidth * 0.02,
        flexDirection:'row',
        paddingHorizontal:sizes.screenWidth * 0.02
        // paddingLeft:sizes.screenWidth * 0.06
    },
    listTextSty:{
        color:colors.black,
        paddingLeft:sizes.screenWidth * 0.1,
    },
    listTextSty2:{
        color:colors.black,
    },
    imgSty:{
        resizeMode:'center',
        width:sizes.screenWidth * 0.08,
        height:sizes.screenWidth * 0.08,
        position:'absolute',
        right:10
    },
     imgSty2:{
        resizeMode:'center',
        width:sizes.screenWidth * 0.08,
        height:sizes.screenWidth * 0.08,
        // position:'absolute',
        // right:10
    },
    btnView:{
        alignItems:'center',
        marginTop:sizes.screenWidth * 0.1,
    },
    btnText:{
        color:colors.white,
        backgroundColor:colors.black,
        height:sizes.screenHeight * 0.07,
        width:sizes.screenWidth * 0.82,
        borderRadius:sizes.screenWidth * 0.2,
        textAlign:'center',
        textAlignVertical:'center',
        fontWeight:'500',
        fontSize:fontSize.medium
    },
})