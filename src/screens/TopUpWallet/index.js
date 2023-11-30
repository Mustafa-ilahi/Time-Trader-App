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

export default function TopUpWallet() {
  const [amount, setAmount] = useState(0);
  const [modalShow, setModalShow] = useState(false);

  return (
    <SafeAreaView>
      <View style={styles.body}>
        <View>
          <View style={styles.header}>
            <TouchableOpacity>
              <Image style={styles.headerIcon} source={images.leftArrowIcon} />
            </TouchableOpacity>
            <Text style={styles.headerText}>Top Up Wallet</Text>
            <TouchableOpacity>
              <Image style={styles.headerIcon2} source={images.crossIconn} />
            </TouchableOpacity>
          </View>

          <View style={styles.cardDetailContainer}>
            <Image
              style={styles.masterCardIcon}
              source={images.masterCardIcon}
            />
            <View>
              <Text style={styles.cardDetailTextBold}>CITI BANK CARD</Text>
              <View style={styles.cardDetailNumberContainer}>
                <View style={styles.dot}></View>
                <View style={styles.dot}></View>
                <View style={styles.dot}></View>
                <View style={styles.dot}></View>
                <View style={styles.dot}></View>
                <View style={styles.dot}></View>
                <View style={styles.dot}></View>
                <Text style={styles.cardDetailDisabledText}>4862</Text>
              </View>
            </View>
          </View>

          <View style={styles.amountContainer}>
            <Text
              style={
                amount < 1000 ? styles.amountText : styles.amountTextBlack
              }>
              R
            </Text>
            <TextInput
              placeholder="0"
              placeholderTextColor={'#93939366'}
              onChangeText={text => setAmount(text)}
              value={amount}
              style={amount < 1000 ? styles.amountText : styles.amountTextBlack}
              keyboardType="numeric"
            />
            <View
              style={
                amount < 1000 ? styles.redTextContainer : {display: 'none'}
              }>
              <Text style={styles.redText}>min. </Text>
              <Text style={styles.redText}>R1000</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity
          style={styles.topUpBtn}
          onPress={() => {
            if (amount > 999) {
              setModalShow(!modalShow);
            }
          }}>
          <Text style={styles.topUpBtnText}>Top Up</Text>
        </TouchableOpacity>
      </View>
      <Modal
        isVisible={modalShow}
        onBackdropPress={() => {
          setModalShow(!modalShow);
        }}>
        <View style={styles.modalBody}>
          <Image style={styles.modalIcon} source={images.doneIcon} />
          <Text style={styles.modalText}>
            R {amount} was added to your bank account, it will reflect as soon
            as possible
          </Text>
          <TouchableOpacity
            style={styles.modalBtn}
            onPress={() => {
              setModalShow(!modalShow);
            }}>
            <Text style={styles.modalBtnText}>Ok</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
