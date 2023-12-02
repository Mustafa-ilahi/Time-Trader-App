import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './style';
import images from '../../services/utilities/images';
import {useNavigation} from '@react-navigation/native';
export default function OnboardingBottom() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.text}>Skip</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Image source={images.onbordingBottom} style={styles.img} />
      </TouchableOpacity>
    </View>
  );
}
