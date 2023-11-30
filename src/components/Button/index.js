import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {styles} from './style';

export default function Button({title, dark, image,google}) {
  return (
    <SafeAreaView>
      {image ? (
        <TouchableOpacity style={[dark ? styles.button : styles.buttonLight,styles.row]}>
          <Image source={image} style={google ?styles.googleImg : styles.img}/>
          <Text style={dark ? styles.buttonTxt : styles.buttonTxtLight}>
            {title}
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={dark ? styles.button : styles.buttonLight}>
          <Text style={dark ? styles.buttonTxt : styles.buttonTxtLight}>
            {title}
          </Text>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
}