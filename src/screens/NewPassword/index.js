import React, { useState } from 'react';
import {SafeAreaView, View, Text, Image,TextInput, TouchableOpacity} from 'react-native';
import {styles} from './style';
import Header from '../../components/Header';
import images from '../../services/utilities/images';
import Button from '../../components/Button';
import { colors, sizes } from '../../services';
import {Checkbox} from 'react-native-paper';

export default function NewPassword({navigation}) {
  const [checked, setChecked] = useState(false);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View>
          <Header title={'Create New Password '} />
        </View>
        
        <Image source={images.check} style={styles.forgotPass}/>

        <View style={styles.content}>
          <View style={styles.textView}>
            <Text style={styles.text}>Create Your New Password</Text>
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
        <View style={styles.btnTop}>
            <Button title={'Continue'} dark={true} onPress={()=>navigation.navigate('CreateNewPin')}/>
        </View>
      </View>
    </SafeAreaView>
  );
}
