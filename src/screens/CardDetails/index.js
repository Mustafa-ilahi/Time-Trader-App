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

export default function CardDetails({navigation}) {
  const [accountNumber, setAccountNumber] = useState('');
  const [modalShow, setModalShow] = useState(false);

  return (
    <SafeAreaView>
      <View style={styles.body}>
        <View style={styles.header}>
          <TouchableOpacity
            style={{width: sizes.screenHeight * 0.07}}
            onPress={() => navigation.goBack()}>
            <Image style={styles.headerIcon} source={images.leftArrowIcon} />
          </TouchableOpacity>
          <Text style={styles.headerText}>Card Details</Text>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image style={styles.headerIcon2} source={images.trashIcon} />
            <Text style={styles.textRed}>Delete</Text>
          </TouchableOpacity>
        </View>

        <Image style={styles.creditCard} source={images.creditCard} />

        <View style={{marginLeft: sizes.screenWidth * 0.05}}>
          <Text style={styles.textLightSmall}>Added on</Text>
          <Text style={styles.headerText}>1 Oct,2022</Text>
          <Text style={styles.textLightMedium}>Card details</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.accountDetailsInput}>3455-4562-7710-3456</Text>
          <Image style={styles.masterCardIcon} source={images.masterCardIcon} />
        </View>

        <View style={styles.horizontalLine}></View>

        <View style={styles.row2}>
          <View>
            <Text style={styles.accountDetailsInput2}>02/22</Text>
            <View style={styles.horizontalLine2}></View>
          </View>

          <View>
            <View style={styles.row}>
              <Text style={styles.accountDetailsInput2}>456</Text>

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
          <Text style={styles.continueBtnText}>Save Changes</Text>
        </TouchableOpacity>

        <Modal
          isVisible={modalShow}
          onBackdropPress={() => {
            setModalShow(!modalShow);
          }}>
          <View style={styles.modalBody}>
            <Image style={styles.modalIcon} source={images.doneIcon} />
            <Text style={styles.modalText}>
              Your card details have been updated successfully
            </Text>
            <TouchableOpacity
              style={styles.modalBtn}
              onPress={() => {
                setModalShow(!modalShow);
                navigation.navigate('MyTabs');
              }}>
              <Text style={styles.modalBtnText}>Ok</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
}
