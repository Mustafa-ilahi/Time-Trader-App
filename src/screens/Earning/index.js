import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './style';
import Header from '../../components/Header';
import images from '../../services/utilities/images';

export default function Earning({navigation}) {
  return (
    <SafeAreaView>
      <View style={styles.mainView}>
        <Header title={'Earning'} />
        <View>
          <View style={styles.topView}>
            <View>
              <Text style={styles.graphText1}>Nov 9 - Nov 16</Text>
              <Text style={styles.graphText2}>$575.95</Text>
            </View>
            <View>
              <Image source={images.graphOne} style={styles.graphImg} />
            </View>
          </View>
          <View>
            <View style={styles.rowView}>
              <Text style={styles.graphText3}>Online</Text>
              <Text style={styles.graphText3}>18h 0m</Text>
            </View>
            <View style={styles.rowView}>
              <Text style={styles.graphText3}>Trips</Text>
              <Text style={styles.graphText3}>50</Text>
            </View>
            <View style={styles.rowView}>
              <Text style={styles.graphText3}>Points</Text>
              <Text style={styles.graphText3}>50</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('EarningSecondScreen')}>
              <Text style={styles.btn}>See Details</Text>
            </TouchableOpacity>
            <View style={styles.horizontalLine}></View>
          </View>
         <View style={styles.cashOutView}>
         <Text style={styles.graphText3}>Balance</Text>
          <Text style={styles.graphText1}>
            Payments scheduled for november 16
          </Text>
          <TouchableOpacity>
            <Text style={styles.btn2}>Cash Out</Text>
          </TouchableOpacity>
         </View>
         <View style={styles.row}>
            <Image source={images.graphTwo} style={styles.bottomImg}/>
            <Text style={styles.graphText5}>See historical earnings trends in your area</Text>
         </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
