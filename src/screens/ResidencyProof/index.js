import {
  View,
  Text,
  Image,
  Touchable,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './style';
import Header from '../../components/Header';
import images from '../../services/utilities/images';
export default function ResidencyProof() {

  const [idMethod, setIdMethod] = useState('');
  return (
    <SafeAreaView>
      <View style={styles.MainContainer}>
        <View style={styles.headerPadding}>
          <Header />
          <Text style={styles.headerText}>Proof of Residency</Text>
        </View>
        <View style={styles.topView}>
          <Text style={styles.listTextSty}>Prove that you live in norway</Text>
          <Text style={styles.textSty}>Nationatily</Text>
          <TouchableOpacity style={styles.listViewSty}>
            <Image source={images.flag} style={styles.imgSty2} />
            <Text style={styles.listTextSty1}>Norway</Text>
            <Text style={styles.listTextSty2}>Change</Text>
          </TouchableOpacity>
          <Text style={[styles.textSty, styles.top]}>
            Choose Identification method
          </Text>
          <TouchableOpacity
            style={styles.listViewSty}
            onPress={() => setIdMethod('National')}>
            <Text style={[styles.listTextSty1, styles.left]}>
              National identity Card
            </Text>
            <Image
              source={
                idMethod === 'National' ? images.clickOpen : images.clickOff
              }
              style={styles.ViewImg}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.listViewSty}
            onPress={() => setIdMethod('Passport')}>
            <Text style={[styles.listTextSty1, , styles.left]}>Passport</Text>
            {/* <Text style={styles.listTextSty2}>Change</Text> */}

            <Image
              source={
                idMethod === 'Passport' ? images.clickOpen : images.clickOff
              }
              style={styles.ViewImg}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnView}>
            <Text style={styles.btnText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
