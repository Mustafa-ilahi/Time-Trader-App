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

export default function TransactionHistory({navigation}) {
  const [modalShow, setModalShow] = useState(false);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={()=>navigation.goBack()}>
            <Image style={styles.headerRowImg} source={images.backIcon} />
          </TouchableOpacity>
          <Text style={styles.headerRowText}>Transaction History</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.searchContainer}>
            <View style={styles.inputContainer}>
              <Image style={styles.searchIconn} source={images.searchIconn} />
              <TextInput
                style={styles.input}
                placeholder="Value goes here"
                placeholderTextColor={'#BAC2C7'}
              />
            </View>
            <TouchableOpacity>
              <Image style={styles.filter} source={images.filter} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.width}>
          <Text style={styles.disabledTextLarge}>Today</Text>

          <TouchableOpacity
            style={styles.transactionContainer}
            onPress={() => setModalShow(!modalShow)}>
            <View style={styles.row2}>
              <Image style={styles.transactionImg} source={images.payPal} />
              <View>
                <Text style={styles.blackTextBold}>PayPal</Text>
                <Text style={styles.disabledText}>Today 12:32</Text>
              </View>
            </View>
            <View style={styles.row2}>
              <Text style={styles.textRed}>-R35.32</Text>
              <Image style={styles.rightArroww} source={images.rightArroww} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.transactionContainer}>
            <View style={styles.row2}>
              <Image style={styles.transactionImg} source={images.topUp} />
              <View>
                <Text style={styles.blackTextBold}>Top Up</Text>
                <Text style={styles.disabledText}>Yesterday 02:12</Text>
              </View>
            </View>
            <View style={styles.row2}>
              <Text style={styles.textGreen}>+R430.00</Text>
              <Image style={styles.rightArroww} source={images.rightArroww} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.transactionContainer}>
            <View style={styles.row2}>
              <Image style={styles.transactionImg} source={images.stripe} />
              <View>
                <Text style={styles.blackTextBold}>Stripe</Text>
                <Text style={styles.disabledText}>Dec 24 13:53</Text>
              </View>
            </View>
            <View style={styles.row2}>
              <Text style={styles.textRed}>-R35.32</Text>
              <Image style={styles.rightArroww} source={images.rightArroww} />
            </View>
          </TouchableOpacity>

          <Text style={styles.disabledTextLarge}>Yesterday</Text>

          <TouchableOpacity style={styles.transactionContainer}>
            <View style={styles.row2}>
              <Image style={styles.transactionImg} source={images.payPal} />
              <View>
                <Text style={styles.blackTextBold}>PayPal</Text>
                <Text style={styles.disabledText}>Today 12:32</Text>
              </View>
            </View>
            <View style={styles.row2}>
              <Text style={styles.textRed}>-R35.32</Text>
              <Image style={styles.rightArroww} source={images.rightArroww} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.transactionContainer}>
            <View style={styles.row2}>
              <Image style={styles.transactionImg} source={images.topUp} />
              <View>
                <Text style={styles.blackTextBold}>Top Up</Text>
                <Text style={styles.disabledText}>Yesterday 02:12</Text>
              </View>
            </View>
            <View style={styles.row2}>
              <Text style={styles.textGreen}>+R430.00</Text>
              <Image style={styles.rightArroww} source={images.rightArroww} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.transactionContainer}>
            <View style={styles.row2}>
              <Image style={styles.transactionImg} source={images.stripe} />
              <View>
                <Text style={styles.blackTextBold}>Stripe</Text>
                <Text style={styles.disabledText}>Dec 24 13:53</Text>
              </View>
            </View>
            <View style={styles.row2}>
              <Text style={styles.textRed}>-R35.32</Text>
              <Image style={styles.rightArroww} source={images.rightArroww} />
            </View>
          </TouchableOpacity>

          <Text style={styles.disabledTextSmall}>Tuesday</Text>
          <Text style={styles.disabledTextLarge2}>November 1, 2023</Text>

          <TouchableOpacity style={styles.transactionContainer}>
            <View style={styles.row2}>
              <Image style={styles.transactionImg} source={images.payPal} />
              <View>
                <Text style={styles.blackTextBold}>PayPal</Text>
                <Text style={styles.disabledText}>Today 12:32</Text>
              </View>
            </View>
            <View style={styles.row2}>
              <Text style={styles.textRed}>-R35.32</Text>
              <Image style={styles.rightArroww} source={images.rightArroww} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.transactionContainer}>
            <View style={styles.row2}>
              <Image style={styles.transactionImg} source={images.topUp} />
              <View>
                <Text style={styles.blackTextBold}>Top Up</Text>
                <Text style={styles.disabledText}>Yesterday 02:12</Text>
              </View>
            </View>
            <View style={styles.row2}>
              <Text style={styles.textGreen}>+R430.00</Text>
              <Image style={styles.rightArroww} source={images.rightArroww} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.transactionContainer}>
            <View style={styles.row2}>
              <Image style={styles.transactionImg} source={images.stripe} />
              <View>
                <Text style={styles.blackTextBold}>Stripe</Text>
                <Text style={styles.disabledText}>Dec 24 13:53</Text>
              </View>
            </View>
            <View style={styles.row2}>
              <Text style={styles.textRed}>-R35.32</Text>
              <Image style={styles.rightArroww} source={images.rightArroww} />
            </View>
          </TouchableOpacity>
          <View style={styles.height}></View>
        </View>
      </ScrollView>
      <Modal
        isVisible={modalShow}
        backdropOpacity={0.5}
        onBackdropPress={() => {
          setModalShow(!modalShow);
        }}>
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            <View style={styles.modalBody}>
              <View style={styles.modalRow}>
                <View style={styles.row2}>
                  <Image
                    style={styles.ModalTransactionImg}
                    source={images.payPal}
                  />
                  <View>
                    <Text style={styles.modalBlackTextBold}>Walmart</Text>
                    <Text style={styles.modalDisabledText}>
                      Retail corporation
                    </Text>
                  </View>
                </View>
                <TouchableOpacity
                  onPress={() => {
                    setModalShow(!modalShow);
                  }}>
                  <Text style={styles.modalDoneText}>Done</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.modalPrice}>
                <Text style={styles.modalPriceText}>-R35.23</Text>
              </View>

              <View style={styles.modalbtn}>
                <Text style={styles.modalbtnTextLight}>Today</Text>
                <Text style={styles.modalbtnTextDark}>
                  December 29,2023 - 12:32
                </Text>
              </View>

              <View style={styles.modalbtn}>
                <Text style={styles.modalbtnTextLight}>Transaction no.</Text>
                <Text style={styles.modalbtnTextDark}>2344363345345</Text>
                <TouchableOpacity style={styles.copyIconnContainer}>
                  <Image style={styles.copyIconn} source={images.copyIconn} />
                </TouchableOpacity>
              </View>

              <View style={styles.redFlagRow}>
                <Image style={styles.redFlag} source={images.redFlag} />
                <Text style={styles.redFlagText}>Report a problem</Text>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
