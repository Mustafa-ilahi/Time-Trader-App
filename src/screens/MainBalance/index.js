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
import MultiSlider from '@ptomasroos/react-native-multi-slider';

import LinearGradient from 'react-native-linear-gradient';

export default function MainBalance({navigation}) {
  const [sliderValues, setSliderValues] = useState([1, 6]);
  const [inputValue, setInputValue] = useState('');

  const onSliderValuesChange = values => {
    setSliderValues(values);
    setInputValue(
      `R${(values[0] * 1000).toFixed(2)} - R${(values[1] * 1000).toFixed(2)}`,
    );
    console.log(values, '=======>');
  };

  const onInputChange = text => {
    const values = text
      .split('-')
      .map(value => parseFloat(value.replace('R', '').trim()) / 1000);

    const low = values[0] || 0;
    const high = values[1] || 6;
    setSliderValues([low, high]);
    setInputValue(text);
  };

  const handleButtonClick = () => {
    console.log('Button clicked!');
    // Your logic here
  };
  return (
    <SafeAreaView>
      <ImageBackground source={images.mainBgg} style={styles.container}>
        <ScrollView>
          <View style={styles.body}>
            <View style={styles.headerRow}>
              <Text style={styles.headerRowText}>Wallets</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('CardDetails')}>
                <Image style={styles.headerRowImg} source={images.addCard} />
              </TouchableOpacity>
            </View>

            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 0, y: 1}}
              colors={['#ffffff', '#000000']}
              style={styles.linearGradient}>
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
                  <Image
                    style={styles.topUpIcon}
                    source={images.downloadLine}
                  />
                  <Text style={styles.topUpText}>Withdraw</Text>
                </TouchableOpacity>
              </View>
            </LinearGradient>

            <Text style={styles.heading}>SET TODAY TRADING LIMIT</Text>
            <MultiSlider
              values={sliderValues}
              sliderLength={320}
              min={1}
              max={6}
              step={1}
              onValuesChange={onSliderValuesChange}
              containerStyle={styles.slider}
              selectedStyle={{backgroundColor: 'black'}}
              unselectedStyle={{backgroundColor: 'white'}}
              markerStyle={{backgroundColor: 'black', height: 22, width: 22}}
              pressedMarkerStyle={{
                backgroundColor: 'black',
                height: 30,
                width: 30,
              }}
              trackStyle={{height: 6, borderRadius: sizes.screenWidth * 0.3}}
              markerContainerStyle={{marginTop: sizes.screenHeight * 0.003}}
            />
            <View style={styles.PricesRow}>
              <Text style={styles.priceStyling}>R1000</Text>
              <Text style={styles.priceStyling}>R2000</Text>
              <Text style={styles.priceStyling}>R3000</Text>
              <Text style={styles.priceStyling}>R4000</Text>
              <Text style={styles.priceStyling}>R5000</Text>
              <Text style={styles.priceStyling}>R6000</Text>
            </View>
            <View style={styles.sliderView}>
              <Image source={images.rLogo} style={styles.logoStyle} />
              <TextInput
                style={styles.sliderInputField}
                value={inputValue}
                onChangeText={onInputChange}
                placeholder="Mins R1000"
              />
              <TouchableOpacity
                style={styles.textSliderView}
                onPress={handleButtonClick}>
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
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}
