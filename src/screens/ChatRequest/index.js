import {View, Text, SafeAreaView, Image, TouchableOpacity, ImageBackground} from 'react-native';
import React from 'react';
import {styles} from './style';
import Header from '../../components/Header';
import images from '../../services/utilities/images';

export default function ChatRequest() {
  return (
    <SafeAreaView>
      <View style={styles.MainContainer}>
        <View>
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
            <ImageBackground source={images.contblue}>

            </ImageBackground>
        </View>
      </View>
    </SafeAreaView>
  );
}
