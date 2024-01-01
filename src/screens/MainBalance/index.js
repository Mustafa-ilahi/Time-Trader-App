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
import Slider from 'react-native-slider';

export default function MainBalance({navigation}) {
  const [sliderValue, setSliderValue] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState('');

  const choices = [
    {value: 0, label: 'Choice 1', price: 'R1000'},
    {value: 1, label: 'Choice 2', price: 'R2000'},
    {value: 2, label: 'Choice 3', price: 'R3000'},
    {value: 3, label: 'Choice 4', price: 'R4000'},
    {value: 4, label: 'Choice 5', price: 'R5000'},
    {value: 5, label: 'Choice 6', price: 'R6000'},
  ];

  const [inputValue, setInputValue] = useState();

  const onSliderValueChange = value => {
    setSliderValue(value);
  };

  const onInputChange = text => {
    const numericValue = parseFloat(text);
    setSliderValue(isNaN(numericValue) ? 0 : numericValue);
    setInputValue(text);
  };

  return (
    <SafeAreaView>
      <ImageBackground source={images.mainBgg} style={styles.container}>
        <View style={styles.body}>
          <View style={styles.headerRow}>
            <Text style={styles.headerRowText}>Wallets</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('CardDetails')}>
              <Image style={styles.headerRowImg} source={images.addCard} />
            </TouchableOpacity>
          </View>

          <Text style={styles.mainBalanceText}>Main Balance</Text>
          <Text style={styles.mainBalance}>R 1000</Text>

          <View style={styles.topUpRow}>
            <TouchableOpacity
              style={styles.topUpContainer}
              onPress={() => navigation.navigate('TopUpWallet')}>
              <Image style={styles.topUpIcon} source={images.uploadLine} />
              <Text style={styles.topUpText}>Top up</Text>
            </TouchableOpacity>
            <Image
              style={styles.topUpSeparator}
              source={images.SeparatorVerticall}
            />
            <TouchableOpacity
              style={styles.topUpContainer}
              onPress={() => navigation.navigate('WithdrawToBankAccount')}>
              <Image style={styles.topUpIcon} source={images.downloadLine} />
              <Text style={styles.topUpText}>Withdraw</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.heading}>SET TODAY TRADING LIMIT</Text>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={6}
            step={1}
            value={sliderValue}
            onValueChange={onSliderValueChange}
            // minimumTrackTintColor="red"
            maximumTrackTintColor="black"
            thumbTintColor="black"
          />
          <View style={styles.sliderView}>
            <Image source={images.rLogo} style={styles.logoStyle} />
            <TextInput
              style={styles.sliderInputField}
              value={inputValue}
              onChangeText={onInputChange}
              keyboardType="numeric"
              placeholder="Mins R1000"
              // editable='false'
            />
            <TouchableOpacity style={styles.textSliderView}>
              <Text style={styles.textSlider}>Set</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.horizontal}></View>
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
            <TouchableOpacity
              onPress={() => navigation.navigate('TransactionHistory')}>
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
