import React from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './style';
import images from '../../services/utilities/images';
import {useNavigation} from '@react-navigation/native';

export default function Header({title}) {
    const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View style={styles.row}>
        <TouchableOpacity style={styles.backBtn}  onPress={() => navigation.goBack()}>
          <Image source={images.backIcon} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{title}</Text>
      </View>
    </SafeAreaView>
  );
}
