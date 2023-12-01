import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './style';
import images from '../../services/utilities/images';

export default function OnboardingBottom() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.text}>Skip</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={images.onbordingBottom} style={styles.img} />
      </TouchableOpacity>
    </View>
  );
}
