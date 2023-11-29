import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import {styles} from './style';
import {colors} from '../../services';
import images from '../../services/utilities/images';
import Button from '../../components/Button';

export default function CreateAccount() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Header />
        <View style={styles.contentView}>
          <Text style={styles.heading}>Create your Account</Text>
          <View style={styles.row}>
            <Image source={images.mobile} style={styles.mobileImg} />
            <TextInput
              placeholder="Mobile"
              placeholderTextColor={'#8189B0'}
              style={styles.input}
            />
          </View>
        </View>
        <View style={styles.bottom}>
          <Button title={'Sign Up'} dark={true}/>
          <Text style={styles.orText}>Or</Text>
          <Button title={'Login with Apple'} dark={true}/>
          <View style={styles.top}>
            <Button title={'Login with Google'} dark={false}/>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
