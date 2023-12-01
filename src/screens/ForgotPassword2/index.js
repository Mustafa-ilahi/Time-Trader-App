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

export default function ForgotPassword2({navigation}) {
  const [value, setValue] = useState('');

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View>
          <Header title={'Forgot Password'} />
        </View>
        <Image source={images.forgotPass} style={styles.forgotPass} />
        <View style={styles.content}>
          <View style={styles.textView}>
            <Text style={styles.text}>
              Select which contact details we should use to reset your password.
            </Text>
          </View>
        </View>

        <View style={styles.padding}>
          <Image source={images.message} style={styles.messageIcon}/>
          <View style={styles.right}>

          <Text style={styles.smsText}>via SMS:</Text>
          <Text style={styles.phoneText}>+47 11 159 4863</Text>
          </View>
        </View>
      </View>
      <View style={styles.btnBottom}>
        <Button title={'Continue'} dark={true}  onPress={()=>navigation.navigate('OTP2')}/>
      </View>
    </SafeAreaView>
  );
}
