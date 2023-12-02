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

export default function AddNewCard({navigation}) {
  const [accountNumber, setAccountNumber] = useState('');
  const [modalShow, setModalShow] = useState(false);

  return (
    <SafeAreaView>
      <View style={styles.body}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Image style={styles.headerIcon} source={images.leftArrowIcon} />
          </TouchableOpacity>
          <Text style={styles.headerText}>Add New Card</Text>
          <TouchableOpacity>
            <Image style={styles.headerIcon2} source={images.crossIconn} />
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TextInput
            style={styles.accountDetailsInput}
            keyboardType="numeric"
            placeholder="Card Number"
            placeholderTextColor={colors.grayBorder}
            onChangeText={text => setAccountNumber(text)}
            value={accountNumber}
          />
          <Image
            style={
              accountNumber.length > 18
                ? styles.masterCardIcon
                : {display: 'none'}
            }
            source={images.masterCardIcon}
          />
        </View>

        <View style={styles.horizontalLine}></View>

        <View style={styles.row2}>
          <View>
            <TextInput
              style={styles.accountDetailsInput2}
              keyboardType="numeric"
              placeholder="MM/YY"
              placeholderTextColor={colors.grayBorder}
            />
            <View style={styles.horizontalLine2}></View>
          </View>

          <View>
            <View style={styles.row}>
              <TextInput
                style={styles.accountDetailsInput2}
                keyboardType="numeric"
                placeholder="CVV"
                placeholderTextColor={colors.grayBorder}
              />
              <Image style={styles.warningIcon} source={images.warningIcon} />
            </View>
            <View style={styles.horizontalLine2}></View>
          </View>
        </View>
        <TouchableOpacity
          style={styles.continueBtn}
          onPress={() => {
            setModalShow(!modalShow);
          }}>
          <Text style={styles.continueBtnText}>Add Card</Text>
        </TouchableOpacity>

        <Modal
          isVisible={modalShow}
          onBackdropPress={() => {
            setModalShow(!modalShow);
          }}>
          <View style={styles.modalBody}>
            <Image style={styles.modalIcon} source={images.doneIcon} />
            <Text style={styles.modalText}>
              Your card was added successfully
            </Text>
            <TouchableOpacity
              style={styles.modalBtn}
              onPress={() => {
                setModalShow(!modalShow);
                navigation.navigate('CardDetails')
              }}>
              <Text style={styles.modalBtnText}>Ok</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
}
