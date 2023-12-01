import React from 'react';
import {SafeAreaView, View, Text, Image,TextInput, TouchableOpacity} from 'react-native';
import {styles} from './style';
import Header from '../../components/Header';
import images from '../../services/utilities/images';
import Button from '../../components/Button';

export default function ForgotPassword({navigation}) {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View>
          <Header title={'                Forget password '} />
        </View>
        <View style={styles.content}>
          <View style={styles.textView}>
            <Text style={styles.text}>Create your account password.</Text>
          </View>
          <View style={[styles.row,styles.margin]}>
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
        </View>
        <View style={styles.btnTop}>
            <Button title={'Submit'} dark={true} onPress={()=>navigation.navigate('ForgotPassword2')}/>
        </View>
      </View>
    </SafeAreaView>
  );
}
