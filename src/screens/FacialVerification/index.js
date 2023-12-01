import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import { styles } from './style';
import Header from '../../components/Header';
import images from '../../services/utilities/images';

export default function FacialVerification() {
  return (
    <View style={styles.MainContainer}>
      <Header title={'Facial Verification'} />
      <Image source={images.qrScanCam} style={styles.qrImg} />
      <Text style={styles.TextSty}>Verify your identity</Text>
      <TouchableOpacity style={styles.btnView}>
        <Text style={styles.btnText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}
