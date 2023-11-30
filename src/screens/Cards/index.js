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

export default function Cards() {
  const [amount, setAmount] = useState(0);
  const [modalShow, setModalShow] = useState(false);

  return (
    <SafeAreaView>
      <View style={styles.body}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Image style={styles.headerIcon} source={images.leftArrowIcon} />
          </TouchableOpacity>
          <Text style={styles.headerText}>Cards</Text>
          <TouchableOpacity>
            {/* <Image style={styles.headerIcon2} source={images.crossIconn} /> */}
          </TouchableOpacity>
        </View>
        <View style={styles.innerBody}>
          <Image style={styles.cardsImg} source={images.cardsImg} />

          <Text style={styles.innerBodyTextBold}>You don't have a card</Text>
          <Text style={styles.innerBodyTextLight}>
            Connect a credit/debit card and top up your wallet
          </Text>

          <TouchableOpacity style={styles.continueBtn}>
            <Text style={styles.continueBtnText}>Connect Card</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
