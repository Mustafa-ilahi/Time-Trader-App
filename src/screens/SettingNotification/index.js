import {View, Text, TouchableOpacity, Image, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import {styles} from './style';
import Header from '../../components/Header';
import images from '../../services/utilities/images';

export default function SettingNotification() {
  const [generalNotification, setGeneralNotification] = useState(true);
  const [generalNotificationTwo, setGeneralNotificationTwo] = useState(true);
  const [generalNotificationThree, setGeneralNotificationThree] = useState(true);
  const [generalNotificationFour, setGeneralNotificationFour] = useState(true);
  const [generalNotificationFive, setGeneralNotificationFive] = useState(true);
  const [generalNotificationSix, setGeneralNotificationSix] = useState(true);
  const [generalNotificationSeven, setGeneralNotificationSeven] = useState(true);
  return (
    <SafeAreaView>
    <View style={styles.MainContainer}>
      <View style={styles.headerPadding}>
        <Header title={'Notification'} />
      </View>
      <View style={styles.topView}>
        <View style={styles.listViewSty}>
          <Text style={styles.listTextSty}>General Notifification</Text>
          <TouchableOpacity
            onPress={() => {
              setGeneralNotification(!generalNotification);
            }}
            style={styles.radioImgView}>
            <Image
              source={
                generalNotification ? images.radiobtnOpen : images.radiobtnOff
              }
              style={styles.radioBtnSty}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.listViewSty}>
          <Text style={styles.listTextSty}>Sound</Text>
          <TouchableOpacity
            onPress={() => {
              setGeneralNotificationTwo(!generalNotificationTwo);
            }}
            style={styles.radioImgView}>
            <Image
              source={
                generalNotificationTwo
                  ? images.radiobtnOpen
                  : images.radiobtnOff
              }
              style={styles.radioBtnSty}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.listViewSty}>
          <Text style={styles.listTextSty}>Vibrate</Text>
          <TouchableOpacity
            style={styles.radioImgView}
            onPress={() => {
              setGeneralNotificationThree(!generalNotificationThree);
            }}>
            <Image
              source={
                generalNotificationThree
                  ? images.radiobtnOpen
                  : images.radiobtnOff
              }
              style={styles.radioBtnSty}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.listViewSty}>
          <Text style={styles.listTextSty}>App updates</Text>
          <TouchableOpacity
            style={styles.radioImgView}
            onPress={() => {
              setGeneralNotificationFour(!generalNotificationFour);
            }}>
            <Image
              source={
                generalNotificationFour
                  ? images.radiobtnOpen
                  : images.radiobtnOff
              }
              style={styles.radioBtnSty}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.listViewSty}>
          <Text style={styles.listTextSty}>New services available</Text>
          <TouchableOpacity
            style={styles.radioImgView}
            onPress={() => {
              setGeneralNotificationFive(!generalNotificationFive);
            }}>
            <Image
              source={
                generalNotificationFive
                  ? images.radiobtnOpen
                  : images.radiobtnOff
              }
              style={styles.radioBtnSty}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.listViewSty}>
          <Text style={styles.listTextSty}>New Tips available</Text>
          <TouchableOpacity
            style={styles.radioImgView}
            onPress={() => {
              setGeneralNotificationSix(!generalNotificationSix);
            }}>
            <Image
              source={
                generalNotificationSix
                  ? images.radiobtnOpen
                  : images.radiobtnOff
              }
              style={styles.radioBtnSty}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.listViewSty}>
          <Text style={styles.listTextSty}>364 Stillwater Ave. Attleboro</Text>
          <TouchableOpacity
            style={styles.radioImgView}
            onPress={() => {
              setGeneralNotificationSeven(!generalNotificationSeven);
            }}>
            <Image
              source={
                generalNotificationSeven
                  ? images.radiobtnOpen
                  : images.radiobtnOff
              }
              style={styles.radioBtnSty}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
    </SafeAreaView>
  );
}
