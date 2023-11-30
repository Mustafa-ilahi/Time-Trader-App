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
import React from 'react';
import Header from '../../components/Header';
import {styles} from './style';
import {colors, sizes} from '../../services';
import images from '../../services/utilities/images';
import Button from '../../components/Button';

export default function MainBalance() {
  return (
    <SafeAreaView>
      <ImageBackground source={images.mainBgg} style={styles.container}>
        <View style={styles.body}>
          <View style={styles.headerRow}>
            <Text style={styles.headerRowText}>Wallets</Text>
            <TouchableOpacity>
              <Image style={styles.headerRowImg} source={images.addCard} />
            </TouchableOpacity>
          </View>

          <Text style={styles.mainBalanceText}>Main Balance</Text>
          <Text style={styles.mainBalance}>R 1000</Text>

          <View style={styles.topUpRow}>
            <TouchableOpacity style={styles.topUpContainer}>
              <Image style={styles.topUpIcon} source={images.uploadLine} />
              <Text style={styles.topUpText}>Top up</Text>
            </TouchableOpacity>
            <Image
              style={styles.topUpSeparator}
              source={images.SeparatorVerticall}
            />
            <TouchableOpacity style={styles.topUpContainer}>
              <Image style={styles.topUpIcon} source={images.downloadLine} />
              <Text style={styles.topUpText}>Withdraw</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.blackTextBold}>Recent Withdrawal</Text>

          <View style={styles.scrollViewContainer}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <TouchableOpacity style={styles.userContainer}>
                <Image style={styles.userIcon} source={images.addUser} />
                <Text style={styles.userNameText}>Add</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.userContainer}>
                <Image style={styles.userIcon} source={images.user1} />
                <Text style={styles.userNameText}>Ali</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.userContainer}>
                <Image style={styles.userIcon} source={images.user2} />
                <Text style={styles.userNameText}>Steve</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.userContainer}>
                <Image style={styles.userIcon} source={images.user3} />
                <Text style={styles.userNameText}>Ahmed</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.userContainer}>
                <Image style={styles.userIcon} source={images.user4} />
                <Text style={styles.userNameText}>Mark</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>

          <View style={styles.row}>
            <Text style={styles.blackTextBold}>Latest Transactions</Text>
            <TouchableOpacity>
              <Text style={styles.disabledText}>View all</Text>
            </TouchableOpacity>
          </View>
          <View style={{height: sizes.screenHeight * 0.04}}></View>
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

          <TouchableOpacity style={styles.transactionContainer}>
            <View style={styles.row2}>
              <Image style={styles.transactionImg} source={images.stripe} />
              <View>
                <Text style={styles.blackTextBold}>Bank</Text>
                <Text style={styles.disabledText}>Dec 24 13:53</Text>
              </View>
            </View>
            <View style={styles.row2}>
              <Text style={styles.textRed}>-R35.32</Text>
              <Image style={styles.rightArroww} source={images.rightArroww} />
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
