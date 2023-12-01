import {
  View,
  Text,
  Image,
  Touchable,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import {styles} from './style';
import Header from '../../components/Header';
import images from '../../services/utilities/images';

export default function CreateYourProfile({navigation}) {
  return (
    <SafeAreaView>
      <View style={styles.MainContainer}>
        <View style={styles.headerPadding}>
          <Header title={'Create Your Profile'} />
        <Image source={images.profile} style={styles.forgotPass} />
        <TouchableOpacity style={styles.editBtn}>
          <Image source={images.editIcon} style={styles.editIcon} />
        </TouchableOpacity>
        </View>
        <View style={styles.topView}>
          <TouchableOpacity style={styles.listViewSty}>
            <Text style={styles.listTextSty}>Gregory Smith</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.listViewSty}>
            <Text style={styles.listTextSty}>Gregory</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.listViewSty}>
            <Text style={styles.listTextSty}>10 / 23 / 1993</Text>
            <Image source={images.calender} style={styles.imgSty} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.listViewSty}>
            <Text style={styles.listTextSty}>gregorysmith@gmail.com</Text>
            <Image source={images.email} style={styles.imgSty} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.listViewSty}>
            <Text style={styles.listTextSty}>Norway</Text>
            <Image source={images.downArrow} style={styles.imgSty} />
          </TouchableOpacity>
          <View style={styles.listViewSty}>
            <Image source={images.flag} style={styles.imgSty2} />
            <TouchableOpacity>
              <Image source={images.downArrow} style={styles.imgSty2} />
            </TouchableOpacity>
            <Text style={styles.listTextSty2}>+47 11 159 4863</Text>
          </View>
          <TouchableOpacity style={styles.listViewSty}>
            <Text style={styles.listTextSty}>
              364 Stillwater Ave. Attleboro
            </Text>
            <Image source={images.location} style={styles.imgSty} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnView} onPress={()=>{navigation.navigate('BankDetails')}}>
            <Text style={styles.btnText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
