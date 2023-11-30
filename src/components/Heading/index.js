import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './style';
import images from '../../services/utilities/images';

export default function Heading({title, showImg, ImgSource}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      {showImg && (
        <TouchableOpacity>
          <Image source={ImgSource} style={styles.img} />
        </TouchableOpacity>
      )}
    </View>
  );
}
