import { StyleSheet } from "react-native";
import { colors, fontSize, sizes } from "../../services";

export const styles = StyleSheet.create({
    MainContainer: {
        backgroundColor: colors.white,
        height: sizes.screenHeight,
        width: sizes.screenWidth,
      },
      listViewSty: {
        height: sizes.screenHeight * 0.07,
        width: sizes.screenWidth * 0.82,
        alignItems: 'center',
        borderRadius: sizes.screenWidth * 0.01,
        shadowColor: '#000',
        shadowOffset: {
          width: 1,
          height: 1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 0,
        elevation: 10,
        backgroundColor: colors.white,
        marginTop: sizes.screenWidth * 0.02,
        flexDirection: 'row',
        paddingHorizontal: sizes.screenWidth * 0.02,
        paddingLeft: sizes.screenWidth * 0.1,
        color:colors.black
      },
      topView: {
        alignSelf: 'center',
        marginTop:sizes.screenHeight * 0.08
      },
      textView:{
        marginTop:sizes.screenWidth * 0.15,
        alignSelf:'center',
      },
      textView1:{
        fontSize:fontSize.smallM,
        color:colors.black
      },
      textView2:{
        alignSelf:'center',
        fontSize:fontSize.smallM,
        color:colors.disabledBg3
      },
      btnView: {
        alignItems: 'center',
        marginTop: sizes.screenWidth * 0.55,
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