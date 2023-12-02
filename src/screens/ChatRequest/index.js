import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ImageBackground,
  TextInput,
} from 'react-native';
import React from 'react';
import {styles} from './style';
import Header from '../../components/Header';
import images from '../../services/utilities/images';

export default function ChatRequest() {
  return (
    <SafeAreaView>
      <View style={styles.MainContainer}>
        <Header title={'Taneesha'} />
        <View style={styles.row}>
          <TouchableOpacity>
            <Image source={images.phoneImg} style={styles.imgSty} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={images.threeDot} style={styles.imgSty} />
          </TouchableOpacity>
        </View>
        <Text style={styles.columnView}>Today at 5:03 PM</Text>
        <View style={styles.chatView}>
          <ImageBackground
            source={images.contblue}
            style={styles.messageWhiteImg}>
            <Text style={styles.messageTextBlack}>
              Hello, can you source this product for me from the store?
            </Text>
          </ImageBackground>
          <ImageBackground
            source={images.contblack1}
            style={styles.messageBlackImg}>
            <Text style={styles.textWhite}>Yes sure</Text>
          </ImageBackground>
          <ImageBackground
            source={images.contblue2}
            style={styles.messageWhiteImg2}>
            <Text style={styles.messageTextBlack2}>
              OK, I am waiting at Vinmark Store.
            </Text>
          </ImageBackground>
          <Text style={styles.columnView2}>5:33 PM</Text>
          <ImageBackground
            source={images.contblack2}
            style={styles.messageBlackImg2}>
            <Text style={styles.textWhite2}>
              Sorry, I'm stuck in traffic. {'\n'} Please give me a moment.
            </Text>
          </ImageBackground>
          <View style={styles.reqView}>
            <TouchableOpacity>
              <Text style={styles.declineBtn}>Decline Request</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.confirmReqBtn}>Confirm Request</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.lastView}>
            <TouchableOpacity>
              <Image source={images.clip} style={styles.clipImg} />
            </TouchableOpacity>
            <View></View>
            <TouchableOpacity>
              <Image source={images.mic} style={styles.clipImg} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
