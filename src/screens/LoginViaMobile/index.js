import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/Header';
import {styles} from './style';
import {colors, sizes} from '../../services';
import images from '../../services/utilities/images';
import Button from '../../components/Button';
import {Checkbox} from 'react-native-paper';

export default function LoginViaMobile({navigation}) {
  const [checked, setChecked] = useState(false);
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Header />
        <View style={styles.contentView}>
          <Text style={styles.heading}>Login to your Account</Text>
          <View style={[styles.row, styles.marginTop]}>
            <Image source={images.mobile} style={styles.mobileImg} />
            <TextInput
              placeholder="Mobile Number"
              placeholderTextColor={'#8189B0'}
              style={styles.input}
              keyboardType="numeric"
            />
          </View>
          <View style={styles.row}>
            <Image source={images.password} style={styles.passwordImg} />
            <TextInput
              placeholder="Password"
              placeholderTextColor={'#8189B0'}
              style={styles.input}
            />
            <TouchableOpacity style={styles.eyeBtn}>
              <Image source={images.eye} style={styles.eyeImg} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.forgotPass} onPress={()=>navigation.navigate('ForgotPassword')}>
            <Text style={styles.forgotText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.checkboxView}>
          <View
            style={{
              borderRadius: sizes.screenWidth * 0.01,
            }}>
            <Checkbox
              color={colors.black}
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked(!checked);
              }}
            />
          </View>
          <Text style={styles.checkboxTitle}>Remember me</Text>
        </View>
        <View style={styles.bottom}>
          <Button title={'Sign In'} dark={true} />
        </View>
        <View style={styles.bottomTextContainer}>
          <Text style={styles.textNormal}>Don't have an account? </Text>
          <TouchableOpacity
          // onPress={()=>{navigation.navigate('SignUp')}}
          >
            <Text style={styles.textTouchable}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
