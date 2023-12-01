import {View, Text, SafeAreaView, Image} from 'react-native';
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
          <Image source={images.phoneImg} style={styles.imgSty} />
          <Image source={images.threeDot} style={styles.imgSty} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
