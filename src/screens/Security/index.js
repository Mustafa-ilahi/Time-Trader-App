import {View, Text, TouchableOpacity, Image, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import {styles} from './style';
import Header from '../../components/Header';
import images from '../../services/utilities/images';

export default function Security() {
  const [radiaBtnNotification, setRadiaBtnNotification] = useState('Hello');
  const [radiaBtnNotificationTwo, setRadiaBtnNotificationTwo] = useState(true);
  const [radiaBtnNotificationThree, setRadiaBtnNotificationThree] =
    useState(true);
  return (
    <SafeAreaView>
    <View style={styles.MainContainer}>
      <View style={styles.headerPadding}>
        <Header title={'Security'} />
      </View>
      <View style={styles.topView}>
        <View style={styles.listViewSty}>
          <Text style={styles.listTextSty}>Remember me</Text>
          <TouchableOpacity
            onPress={() => {
              setRadiaBtnNotification(!radiaBtnNotification);
            }}>
            <Image
              source={
                radiaBtnNotification ? images.radiobtnOpen : images.radiobtnOff
              }
              style={styles.radioBtnSty}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.listViewSty}>
          <Text style={styles.listTextSty}>Face ID</Text>
          <TouchableOpacity
            onPress={() => {
              setRadiaBtnNotificationTwo(!radiaBtnNotificationTwo);
            }}>
            <Image
              source={
                radiaBtnNotificationTwo
                  ? images.radiobtnOpen
                  : images.radiobtnOff
              }
              style={styles.radioBtnSty}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.listViewSty}>
          <Text style={styles.listTextSty}>2-Step Verification</Text>
          <TouchableOpacity
            onPress={() => {
              setRadiaBtnNotificationThree(!radiaBtnNotificationThree);
            }}>
            <Image
              source={
                radiaBtnNotificationThree
                  ? images.radiobtnOpen
                  : images.radiobtnOff
              }
              style={styles.radioBtnSty}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Text style={styles.bottomBtn}>Change Password</Text>
        </TouchableOpacity>
      </View>
    </View>
    </SafeAreaView>
  );
}
