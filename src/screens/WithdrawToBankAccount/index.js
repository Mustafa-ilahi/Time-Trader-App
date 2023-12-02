import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
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
import Modal from 'react-native-modal';

export default function WithdrawToBankAccount({navigation}) {
  const [amount, setAmount] = useState(0);
  const [modalShow, setModalShow] = useState(false);

  return (
    <SafeAreaView>
      <View style={styles.body}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Image style={styles.headerIcon} source={images.leftArrowIcon} />
          </TouchableOpacity>
          <Text style={styles.headerText}>Withdraw to bank account</Text>
          <TouchableOpacity>
            {/* <Image style={styles.headerIcon2} source={images.crossIconn} /> */}
          </TouchableOpacity>
        </View>

        <TextInput
          style={styles.accountDetailsInput}
          placeholder="Account Number"
          placeholderTextColor={colors.grayBorder}
        />
        <View style={styles.horizontalLine}></View>

        <TextInput
          style={styles.accountDetailsInput}
          placeholder="IBAN Number"
          placeholderTextColor={colors.grayBorder}
        />
        <View style={styles.horizontalLine}></View>

        <View style={styles.row}>
          <TextInput
            style={styles.accountDetailsInput}
            placeholder="Swift Code"
            placeholderTextColor={colors.grayBorder}
          />
          <Image style={styles.warningIcon} source={images.warningIcon} />
        </View>
        <View style={styles.horizontalLine}></View>

        <TouchableOpacity style={styles.continueBtn} onPress={() => navigation.navigate('Cards')}>
          <Text style={styles.continueBtnText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
