import {View, Text, Image, TouchableOpacity, SafeAreaView} from 'react-native';
import React from 'react';
import {styles} from './style';
import Header from '../../components/Header';
import images from '../../services/utilities/images';

export default function EarningSecondScreen() {
  return (
    <SafeAreaView>
    <View style={styles.mainView}>
      <Header />
      <Text style={styles.graphText1}>$575.95</Text>
      <Image source={images.graphThree} style={styles.graphImg} />
      <View style={styles.secondView}>
        <Text style={styles.graphText2}>State</Text>
        <View style={styles.row}>
          <View>
            <Text style={styles.graphText3}>Online</Text>
            <Text style={styles.graphText4}>18h 0m</Text>
          </View>
          <View>
            <Text style={styles.graphText3}>Task</Text>
            <Text style={styles.graphText4}>50</Text>
          </View>
          <View>
            <Text style={styles.graphText3}>Points</Text>
            <Text style={styles.graphText4}>50</Text>
          </View>
        </View>
      </View>
      <View style={styles.horizontalLine}></View>
      <View style={styles.secondView}>
        <Text style={styles.graphText2}>Breakdown</Text>
        <View style={styles.row}>
            <Text style={styles.graphText3}>Not Fare</Text>
            <Text style={styles.graphText4}>$423.75</Text>
        </View>
        <View style={styles.row}>
            <Text style={styles.graphText3}>Promotions</Text>
            <Text style={styles.graphText4}>$115.41</Text>
        </View>
        <View style={styles.row}>
            <Text style={styles.graphText3}>Tip</Text>
            <Text style={styles.graphText4}>$34.12</Text>
        </View>
        <View style={styles.row}>
            <Text style={styles.graphText3}>Total Earnings</Text>
            <Text style={styles.graphText4}>$423.75</Text>
        </View>
      </View>
      <TouchableOpacity>
              <Text style={styles.btn}>SEE EARNING ACTIVITY</Text>
            </TouchableOpacity>
    </View>
    </SafeAreaView>
  );
}
