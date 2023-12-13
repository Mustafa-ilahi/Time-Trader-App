import {StyleSheet} from 'react-native';
import {colors, sizes} from '../../services';
export const styles = StyleSheet.create({
  MainContainer: {
    backgroundColor: colors.white,
    height: sizes.screenHeight,
    width: sizes.screenWidth,
  },
  row: {
    flexDirection: 'row',
    position: 'absolute',
    right: sizes.screenWidth * 0.05,
    top: sizes.screenHeight * 0.03,
    justifyContent: 'space-between',
    width: sizes.screenWidth * 0.15,
  },
  imgSty: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.06,
    height: sizes.screenHeight * 0.04,
    // position:'absolute'
    // backgroundColor:'red'
  },
  columnView: {
    color: colors.disabledBg3,
    alignSelf: 'center',
  },
  columnView2: {
    color: colors.disabledBg3,
    alignSelf: 'center',
    marginTop: sizes.screenHeight * 0.03,
  },
  center: {
    alignSelf: 'center',
  },
  messageBlackImg: {
    width: sizes.screenWidth * 0.57,
    height: sizes.screenHeight * 0.078,
    alignSelf: 'flex-end',
    marginTop: sizes.screenHeight * 0.02,
    // alignItems: 'flex-end',
    // justifyContent: 'center',
  },
  messageBlackImg2: {
    width: sizes.screenWidth * 0.6,
    height: sizes.screenHeight * 0.1,
    alignSelf: 'flex-end',
    marginTop: sizes.screenHeight * 0.02,
    // alignItems: 'flex-end',
    // justifyContent: 'center',
  },
  textWhite: {
    color: 'white',
    textAlign: 'right',
    marginRight: sizes.screenWidth * 0.06,
    marginTop: sizes.screenHeight * 0.02,
  },
  textWhite2: {
    color: 'white',
    textAlign: 'right',
    marginRight: sizes.screenWidth * 0.08,
    marginTop: sizes.screenHeight * 0.02,
    // marginLeft: sizes.screenWidth * 0.021,
  },
  messageWhiteImg: {
    width: sizes.screenWidth * 0.78,
    height: sizes.screenHeight * 0.077,
    // alignSelf: ',
  },
  messageWhiteImg2: {
    width: sizes.screenWidth * 0.65,
    height: sizes.screenHeight * 0.077,
    marginTop: sizes.screenHeight * 0.02,
    // alignSelf: ',
  },
  messageTextBlack: {
    color: colors.black,
    padding: sizes.screenWidth * 0.02,
    marginLeft: sizes.screenWidth * 0.035,
  },
  messageTextBlack2: {
    color: colors.black,
    marginTop: sizes.screenHeight * 0.02,
    marginLeft: sizes.screenWidth * 0.05,
  },
  chatView: {
    // backgroundColor: 'red',
    flexDirection: 'column',
    paddingHorizontal: 25,
    height: sizes.screenHeight * 0.85,
    flexDirection: 'column',
    // alignItems:''
    justifyContent: 'flex-end',
  },
  reqView: {
    width: sizes.screenWidth * 0.85,
    // height: 10,
    alignSelf: 'center',
    // backgroundColor: 'pink',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  confirmReqBtn: {
    color: colors.white,
    // backgroundColor: '#BC101A',
    backgroundColor: '#3A955E',
    paddingHorizontal: sizes.screenWidth * 0.05,
    paddingVertical: sizes.screenHeight * 0.01,
    borderRadius: sizes.screenWidth * 0.05,
    fontWeight: '500',
  },
  declineBtn: {
    color: colors.white,
    backgroundColor: '#BC101A',
    // backgroundColor: '#3A955E',
    paddingHorizontal: sizes.screenWidth * 0.05,
    paddingVertical: sizes.screenHeight * 0.01,
    borderRadius: sizes.screenWidth * 0.05,
    fontWeight: '500',
  },
  lastView: {
    width: sizes.screenWidth * 0.9,
    // height: 50,
    // backgroundColor: 'red',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: sizes.screenHeight * 0.01,
    paddingBottom: sizes.screenHeight * 0.005,
  },
  clipImg: {
    height: sizes.screenHeight * 0.059,
    width: sizes.screenWidth * 0.11,
  },
  input: {
    backgroundColor: 'white',
    width: sizes.screenWidth * 0.62,
    borderRadius: sizes.screenWidth * 0.06,
    paddingLeft: sizes.screenWidth * 0.05,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
});
