import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './style';
import images from '../../services/utilities/images';
import Header from '../../components/Header';

export default function Feedback() {
  const [tabName, setTabName] = useState(false);
  return (
    <SafeAreaView>
      <View style={styles.MainContainer}>
        <Header title={'Taneesha'} />
        <View style={styles.row}>
          <TouchableOpacity>
            <Image source={images.phoneImg} style={styles.imgSty} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={images.threeDot} style={styles.imgSty} />
          </TouchableOpacity>
        </View>
        <View style={styles.horizontalLine}></View>
        <Text style={styles.headingTextSty}>
          Something wrong? Choose an issue:
        </Text>
        <TouchableOpacity style={styles.textRow}>
          <Image source={images.crossIconn} style={styles.crossImgSty} />
          <Text style={styles.crossTextSty}>Accepted request by accident</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.textRow}>
          <Image source={images.crossIconn} style={styles.crossImgSty} />
          <Text style={styles.crossTextSty}>Problem with pickup route</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.textRow}>
          <Image source={images.crossIconn} style={styles.crossImgSty} />
          <Text style={styles.crossTextSty}>Product isn't available</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.textRow}>
          <Image source={images.crossIconn} style={styles.crossImgSty} />
          <Text style={styles.crossTextSty}>Not safe to pick up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.textRow}>
          <Image source={images.crossIconn} style={styles.crossImgSty} />
          <Text style={styles.crossTextSty}>Product not as described</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.textRow}>
          <Image source={images.crossIconn} style={styles.crossImgSty} />
          <Text style={styles.crossTextSty}>Report Taneesha</Text>
        </TouchableOpacity>
        <View style={styles.horizontalLine}></View>
        <TouchableOpacity
          style={styles.textRow2}
          onPress={() => setTabName(!tabName)}>
          <Image source={images.verticalThreeDot} style={styles.dotImgSty} />
          <Text style={styles.crossTextSty}>More issue</Text>
        </TouchableOpacity>
        {tabName && (
          <View>
            <ImageBackground source={images.bgImgtwo} style={styles.bgImg}>
              <View style={styles.recommendedView2}>
                <View style={styles.blackView}></View>
                <View style={styles.modalRow}></View>
                <Text style={styles.textalign}>Safety Toolkit</Text>
                <View style={styles.horizontalLine}></View>
                <TouchableOpacity style={styles.InlineRow}>
                  <Image source={images.target} style={styles.bottomImgSty} />
                  <Text style={styles.bottomTextSty}>Follow my ride</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.InlineRow2}>
                  <Image source={images.person} style={styles.bottomImgSty} />
                  <View>
                    <Text style={styles.bottomTextSty}>
                      Proof of Trip Status
                    </Text>
                    <Text style={styles.bottomTextSty2}>
                      Show law enforcement your current trip status
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.InlineRow}>
                  <Image source={images.iconTwo} style={styles.bottomImgSty} />
                  <Text style={styles.bottomTextSty}>Report a crash</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.InlineRow}>
                  <Image source={images.redBulb} style={styles.bottomImgSty} />
                  <Text style={styles.bottomTextSty}>911 Assistance</Text>
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}
