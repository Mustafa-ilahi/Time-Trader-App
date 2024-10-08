import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
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
              keyboardType="numeric"
            />
          </View>
        </View>
        <View style={styles.bottom}>
          <Button title={'Sign Up'} dark={true} />
          <Text style={styles.orText}>Or</Text>
          <Button
            title={'Login with Apple'}
            dark={true}
            image={images.appleIcon}
          />
          <View style={styles.top}>
            <Button
              title={'Login with Google'}
              dark={false}
              image={images.googleIcon}
              google={true}
            />
          </View>
        </View>
        <View style={styles.bottomTextContainer}>
            <Text style={styles.textNormal}>Don't have an account? </Text>
            <TouchableOpacity 
            // onPress={()=>{navigation.navigate('SignUp')}}
            >
              <Text style={styles.textTouchable}>Sign In</Text>
            </TouchableOpacity>
          </View>
      </View>
    </SafeAreaView>
  );
}
