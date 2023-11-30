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
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import Header from '../../components/Header';
import Button from '../../components/Button';
import images from '../../services/utilities/images';

export default function CreateNewPin({navigation}) {
  const [value, setValue] = useState('');

  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const CELL_COUNT = 4;

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View>
          <Header title={'Create New PIN'} />
        </View>
        <Image source={images.user} style={styles.forgotPass} />
        <TouchableOpacity style={styles.editBtn}>
          <Image source={images.editIcon} style={styles.editIcon} />
        </TouchableOpacity>
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
      </View>
      <View style={styles.btnBottom}>
        <Button title={'Continue'} dark={true} />
      </View>
    </SafeAreaView>
  );
}
