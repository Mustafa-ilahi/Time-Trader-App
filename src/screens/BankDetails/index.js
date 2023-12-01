import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './style';
import Header from '../../components/Header';
import {colors} from '../../services';

export default function BankDetails({navigation}) {
  return (
    <SafeAreaView>
      <View style={styles.MainContainer}>
        <Header title={'Bank Details'} />
        <View style={styles.topView}>
        <TextInput
              placeholder='Bank Name'
                style={styles.listViewSty}
                placeholderTextColor={colors.disabledBg3}
              />
                 <TextInput
              placeholder='Account Holder Name'
                style={styles.listViewSty}
                placeholderTextColor={colors.disabledBg3}
              />
                 <TextInput
              placeholder='Account Number'
                style={styles.listViewSty}
                placeholderTextColor={colors.disabledBg3}
              />
                 <TextInput
              placeholder='Swift/ FSC Code'
                style={styles.listViewSty}
                placeholderTextColor={colors.disabledBg3}
              />
        </View>
        <View style={styles.textView}>
          <Text style={styles.textView1}>
            By continuing, I confirm that I have read & agree to the
          </Text>
          <Text style={styles.textView2}>
            Terms & conditions <Text style={styles.textView1}>and</Text> Privacy
            policy
          </Text>
          <TouchableOpacity style={styles.btnView} onPress={()=>{navigation.navigate('FacialVerification')}} >
            <Text style={styles.btnText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
