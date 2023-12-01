import React, {useState} from 'react';
import {
  Image,
  ImageBackground,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './style';
import images from '../../services/utilities/images';
import {colors, sizes} from '../../services';
import Octicons from 'react-native-vector-icons/Octicons';
import OnboardingBottom from '../../components/OnboardingBottom';

export default function Onboarding({navigation}) {
  const [imgActive, setImgActive] = useState(0);
  const [item, setItem] = useState(['Text1', 'Text2']);
  const onchange = nativeEvent => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
      );
      if (slide != imgActive) {
        setImgActive(slide);
      }
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ScrollView
          style={{flex: 1}}
          horizontal={true}
          scrollEventThrottle={16}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          onScroll={({nativeEvent}) => onchange(nativeEvent)}>
          <ImageBackground source={images.onBoarding} style={styles.bgImag}>
            <Text style={styles.text1}>Make money as a third party</Text>
            <Text style={styles.text2}>
              Making money when you help a client complete their transaction
            </Text>
          </ImageBackground>
          <ImageBackground source={images.onBoarding2} style={styles.bgImag}>
            <Text style={styles.text3}>
              Withdraw funds easily from your wallet
            </Text>
            <Text style={styles.text2}>
              You can easily withdraw your funds and earning from your wallet
            </Text>
          </ImageBackground>
        </ScrollView>
        <View style={Platform.OS == 'ios' ? styles.wrapDotIOS : styles.wrapDot}>
          {item?.map((item, index) => {
            return (
              <View key={index}>
                {Platform.OS == 'android' ? (
                  <Text
                    key={index}
                    style={imgActive == index ? styles.dotActive : styles.dot}>
                    ⬤
                  </Text>
                ) : (
                  <Octicons
                    name={'dot-fill'}
                    color={colors.white}
                    size={sizes.screenHeight * 0.03}
                    style={imgActive == index ? styles.dotActive : styles.dot}
                  />
                )}
              </View>
            );
          })}
        </View>
        <OnboardingBottom />
      </View>
    </SafeAreaView>
  );
}
