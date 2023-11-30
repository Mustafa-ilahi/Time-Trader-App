import {StyleSheet} from 'react-native';
import {colors, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  MainContainer:{
    backgroundColor:colors.white,
    height: sizes.screenHeight,
    width: sizes.screenWidth,
  },
  headerPadding: {
    marginLeft: sizes.screenWidth * 0.03,
    marginTop: sizes.screenWidth * 0.03,
  },
  topView: {
    padding: sizes.screenWidth * 0.07,
  },
  listViewSty: {
    height: sizes.screenHeight * 0.07,
    width: sizes.screenWidth * 0.82,
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
    paddingTop: sizes.screenHeight * 0.02,
    flexDirection: 'row',
    justifyContent:'space-between',
    marginTop:sizes.screenHeight * 0.01
  },
  listTextSty: {
    color: colors.black,
    paddingLeft: sizes.screenWidth * 0.05,
  },
  radioImgView:{
    marginRight:sizes.screenWidth * 0.03
  },
    radioBtnSty: {
    resizeMode: 'center',
    width: sizes.screenWidth * 0.11,
    height: sizes.screenWidth * 0.05,
    marginRight:sizes.screenWidth * 0.02
  },
  bottomBtn:{
    borderWidth:1,
    height: sizes.screenHeight * 0.07,
    width: sizes.screenWidth * 0.82,
    borderRadius: sizes.screenWidth * 0.3,
    textAlign:'center',
    textAlignVertical:'center',
    marginTop:sizes.screenHeight * 0.06,
    backgroundColor:colors.black,
    color:colors.white,
    fontSize:fontSize.large
  },
});
