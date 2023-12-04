import {View, Text, Image, TouchableOpacity, SafeAreaView} from 'react-native';
import React from 'react';
import {styles} from './style';
import Header from '../../components/Header';
import images from '../../services/utilities/images';
import {sizes} from '../../services';

export default function Notification({navigation}) {
  return (
    <SafeAreaView>
      <View style={styles.MainContainer}>
        <View style={styles.mainView}>
          <Header title={'Notifications'} />
          <TouchableOpacity>
            <Image source={images.notiHeader} style={styles.headerImg} />
          </TouchableOpacity>
          <View style={styles.topMainView}>
            <TouchableOpacity style={styles.MainviewSty}>
              <Image source={images.notiTick} style={styles.ViewImg} />
              <View style={styles.TextviewSty}>
                <Text style={styles.viewTextSty}>System</Text>
                <Text style={styles.viewTextSty2}>
                  Your booking <Text style={styles.bold}>#1204</Text> has been
                  suc...
                </Text>
                <Text style={styles.viewTextSty2}>suc...</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.MainviewSty}>
              <Image source={images.notiTicket} style={styles.ViewImg} />
              <View style={styles.TextviewSty}>
                <Text style={styles.viewTextSty}>Promotion</Text>
                <Text style={styles.viewTextSty2}>
                  Invite friends - Get 3 coupons each!
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.MainviewSty}>
              <Image source={images.notiTicket} style={styles.ViewImg} />
              <View style={styles.TextviewSty}>
                <Text style={styles.viewTextSty}>Promotion</Text>
                <Text style={styles.viewTextSty2}>
                  Invite friends - Get 3 coupons each!
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.MainviewSty}>
              <Image source={images.notiCross} style={styles.ViewImg} />
              <View style={styles.TextviewSty}>
                <Text style={styles.viewTextSty}>System</Text>
                <Text style={styles.viewTextSty2}>
                  Your booking <Text style={styles.bold}>#1205</Text> has been
                  suc...
                </Text>
                <Text style={styles.viewTextSty2}>can...</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.MainviewSty}>
              <Image source={images.notiWallet} style={styles.ViewImg} />
              <View style={styles.TextviewSty}>
                <Text style={styles.viewTextSty}>System</Text>
                <Text style={styles.viewTextSty2}>
                  Thank you! Your transaction is
                </Text>
                <Text style={styles.viewTextSty2}>com...</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.MainviewSty}>
              <Image source={images.notiTicket} style={styles.ViewImg} />
              <View style={styles.TextviewSty}>
                <Text style={styles.viewTextSty}>Promotion</Text>
                <Text style={styles.viewTextSty2}>
                  Invite friends - Get 3 coupons each!
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
