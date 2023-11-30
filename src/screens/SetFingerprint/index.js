import React, {useEffect, useState} from 'react';
import {styles} from './style';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';
import Header from '../../components/Header';
import Button from '../../components/Button';
import images from '../../services/utilities/images';
export default function SetFingerprint() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View>
          <Header title={'Set Your Fingerprint'} />
        </View>
        <View style={styles.content}>
          <View style={styles.textView}>
            <Text style={styles.text}>
              Add a fingerprint to make your account more secure.
            </Text>
          </View>
          <Image source={images.fingerprint} style={styles.fingerprintImg} />
          <View style={styles.textView}>
            <Text style={styles.text}>
              Please put your finger on the fingerprint scanner to get started.
            </Text>
          </View>
        </View>
        <View style={styles.row}>
            <TouchableOpacity>
                <Text style={styles.skipText}>Skip</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonTxt}>Continue</Text>

            </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
