import React, {useEffect, useState} from 'react';
import {styles} from './style';
import {SafeAreaView, View, Text, TouchableOpacity, Alert, Image} from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import Header from '../../components/Header';
import Button from '../../components/Button';
import images from '../../services/utilities/images';

export default function OTP2({navigation}) {
  const [value, setValue] = useState('');
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(60);

  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const CELL_COUNT = 4;

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View>
          <Header title={'Forgot Password'} />
        </View>
          <Image source={images.forgotPass} style={styles.forgotPass}/>
        <View style={styles.content}>
          <View style={styles.textView}>
            <Text style={styles.text}>
              Code has been send to +47 111 *****63
            </Text>
          </View>
        </View>

        <View style={styles.padding}>
          <CodeField
            ref={ref}
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({index, symbol, isFocused}) => (
              <Text
                key={index}
                style={[styles.cell, isFocused && styles.focusCell]}
                onLayout={getCellOnLayoutHandler(index)}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            )}
          />
        </View>
        <View style={[styles.center, styles.row]}>
          {seconds > 9 ? (
            <Text style={styles.otpText}>
              Resend code in <Text style={styles.otpTime}>0:{seconds}</Text> s
            </Text>
          ) : (
            <Text style={styles.otpText}>
              Resend code in <Text style={styles.otpTime}>0:0{seconds}</Text> s
            </Text>
          )}
        </View>
      </View>
      <View style={styles.btnBottom}>
        <Button title={'Verify'} dark={true} onPress={()=>navigation.navigate('NewPassword')}/>
      </View>
    </SafeAreaView>
  );
}
