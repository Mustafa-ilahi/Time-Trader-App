import {View, Text, TouchableOpacity, Image, SafeAreaView} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import images from '../../services/utilities/images';
import {styles} from './style';

export default function Settings({navigation}) {
  return (
    <SafeAreaView>
      <View style={styles.MainContainer}>
        <View style={styles.mainView}>
          <Header />
          <TouchableOpacity>
            <Image source={images.threeDot} style={styles.headerImg} />
          </TouchableOpacity>
          <View style={styles.profileView}>
            <Image source={images.profile} style={styles.profileImg} />
            <Text style={styles.profileText1}>Andrew Ainsley</Text>
            <Text style={styles.profileText2}>+47 202 555 0361</Text>
          </View>
          <View style={styles.horizontalRow}></View>
          <View>
            <TouchableOpacity
              style={styles.listView}
              onPress={() => navigation.navigate('EditMyProfile')}>
              <Text style={styles.listViewText}>Profile</Text>
              <Image source={images.rightArrow} style={styles.tichImg} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.listView}
              onPress={() => navigation.navigate('SettingNotification')}>
              <Text style={styles.listViewText}>Notification settings</Text>
              <Image source={images.rightArrow} style={styles.tichImg} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.listView}
              onPress={() => navigation.navigate('Language')}>
              <Text style={styles.listViewText}>Language</Text>
              <Image source={images.rightArrow} style={styles.tichImg} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.listView}
              onPress={() => navigation.navigate('Security')}>
              <Text style={styles.listViewText}>Security</Text>
              <Image source={images.rightArrow} style={styles.tichImg} />
            </TouchableOpacity>
              {/* <TouchableOpacity style={styles.listView} onPress={() => navigation.navigate('Payment')} >
              <Text style={styles.listViewText}>Payment </Text>
              <Image source={images.rightArrow} style={styles.tichImg} />
            </TouchableOpacity> */}
            <TouchableOpacity
              style={styles.listView}
              onPress={() => navigation.navigate('Privacy')}>
              <Text style={styles.listViewText}>Privacy & Policy</Text>
              <Image source={images.rightArrow} style={styles.tichImg} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.listView}
              onPress={() => navigation.navigate('Earning')}>
              <Text style={styles.listViewText}>Earnings</Text>
              <Image source={images.rightArrow} style={styles.tichImg} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.listView}
              onPress={() => navigation.navigate('HelpCenter')}>
              <Text style={styles.listViewText}>Help Center</Text>
              <Image source={images.rightArrow} style={styles.tichImg} />
            </TouchableOpacity>
           
            <TouchableOpacity style={styles.listView} >
              <Text style={styles.listViewText2}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
