import {View, Text, Image, TouchableOpacity, SafeAreaView} from 'react-native';
import React from 'react';
import {styles} from './style';
import images from '../../services/utilities/images';

export default function Congratulations() {
  return (
    <SafeAreaView>
      <View style={styles.MainContainer}>
          <Image source={images.congProfile} style={styles.qrImg} />
          <Text style={styles.TextSty}>Congratulation!</Text>
          <Text style={styles.TextSty2}>Your identity has been verified</Text>
          <Image source={images.loading} style={styles.loadingImg} />
          <TouchableOpacity style={styles.btnView}>
            <Text style={styles.btnText}>Capture</Text>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
}
