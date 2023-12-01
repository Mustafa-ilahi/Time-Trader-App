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

export default function Login({navigation}) {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image source={images.loginBg} style={styles.loginBg} />
        <View style={styles.contentView}>
          <Text style={styles.heading}>Let’s get you in</Text>
          <Text style={styles.loginViaText}>Login via</Text>

          <View style={styles.marginTop}></View>
        </View>
        <View style={styles.bottom}>
          <View>
            <TouchableOpacity
              style={[styles.button, styles.row]}
              onPress={() => navigation.navigate('LoginViaMobile')}>
              <Image source={images.mobile} style={styles.img} />
              <Text style={styles.buttonTxt}>Mobile</Text>
            </TouchableOpacity>
          </View>
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
          onPress={()=>{navigation.navigate('CreateAccount')}}
          >
            <Text style={styles.textTouchable}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
