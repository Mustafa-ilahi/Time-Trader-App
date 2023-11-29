import { StyleSheet } from "react-native";
import { colors, sizes } from "../../services";

export const styles = StyleSheet.create({
    headerPadding:{
        marginLeft:sizes.screenWidth * 0.03,
        marginTop:sizes.screenWidth * 0.03,
    },
    topView:{
        padding:sizes.screenWidth * 0.07,
        },
        listViewSty:{
            height:sizes.screenHeight * 0.07,
            width:sizes.screenWidth * 0.82,
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
        },
        listTextSty:{
            color:colors.black,
            paddingLeft:sizes.screenWidth * 0.05
        },
})