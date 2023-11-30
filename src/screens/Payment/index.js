import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './style';
import Header from '../../components/Header';
import images from '../../services/utilities/images';

export default function Payment() {
  return (
    <SafeAreaView>
      <View style={styles.mainView}>
        <View style={styles.headerView}><Header title={'Payment'} /></View>
        <View style={styles.padding}>
          <TouchableOpacity style={styles.mainCardView}>
            <Image source={images.cardone} style={styles.cardImg} />
            <Text style={styles.cardText}>Bank Account - XXXXXXXXXX01</Text>
            <Image source={images.rightArrow} style={styles.cardImg2} />
          </TouchableOpacity>
        </View>
        <View style={styles.horizontalLine}></View>
        <View style={styles.padding}>
          <Text style={styles.graphText2}>Linked payment methods</Text>
          <TouchableOpacity style={styles.mainCardView}>
            <Image source={images.cardone} style={styles.cardImg} />
            <Text style={styles.cardText}>Bank Account - XXXXXXXXXX01</Text>
            <Image source={images.rightArrow} style={styles.cardImg2} />
          </TouchableOpacity>
        </View>
        <View style={styles.horizontalLine}></View>
        <View style={styles.padding}>
          <TouchableOpacity style={styles.mainCardView}>
            <Image source={images.cardtwo} style={styles.cardImg} />
            <View>
              <Text style={styles.cardText}>Add debit card</Text>
              <Text style={styles.subHeading}>
                Transfer money instantly - $0.50 fee
              </Text>
            </View>
            <Image source={images.rightArrow} style={styles.cardImg2} />
          </TouchableOpacity>
        </View>
        <View style={styles.horizontalLine}></View>
        <View style={styles.padding}>
          <TouchableOpacity style={styles.mainCardView}>
            <Image source={images.cardone} style={styles.cardImg} />
            <View>
              <Text style={styles.cardText}>Add RideFitz debit card</Text>
              <Text style={styles.subHeading}>
                Transfer money instantly - $0.50 fee
              </Text>
            </View>
            <Image source={images.rightArrow} style={styles.cardImg2} />
          </TouchableOpacity>
        </View>
        <View style={styles.horizontalLine}></View>
      </View>
    </SafeAreaView>
  );
}
