import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './style';
import Header from '../../components/Header';
import images from '../../services/utilities/images';
import {colors, sizes} from '../../services';
import Modal from 'react-native-modal';

export default function ProductRequest({navigation}) {
  const [tabName, setTabName] = useState(false);
  const [hideContact, setHideContact] = useState(false);
  const [acceptModal, setAcceptModal] = useState(false);
  const [cancelRide, setCancelRide] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false)

  return (
    <SafeAreaView>
      <View style={styles.MainContainer}>
        <Header title={'Product Request Radar (1)'} />
        <TouchableOpacity style={styles.headerImg}>
          <Image source={images.icon} style={styles.iconImg} />
        </TouchableOpacity>
        <View style={styles.MainrowColumnContainer}>
          <TouchableOpacity
            style={styles.rowColumnContainer}
            onPress={() => setTabName(!tabName)}>
            <View style={styles.rowView}>
              <Image source={images.girl} style={styles.girlImg} />
              <View style={styles.columnView}>
                <Text style={styles.textSty1}>Pullover</Text>
                <Text style={styles.textSty2}>Mango</Text>
                <Image source={images.ratingStar} style={styles.starImg} />
                <Text style={styles.textSty3}>$51</Text>
              </View>
            </View>
          </TouchableOpacity>
          <Text style={styles.textHeadingSty1}>
            Estimated cost: <Text style={styles.textHeadingSty2}> $55.75</Text>
          </Text>
          <View style={styles.rowView2}>
            <Image source={images.length} style={styles.lengthImg} />
            <View style={styles.marginLength}>
              <Text style={styles.textLengthSty3}>11 mins (7.8 mi) away</Text>
              <Text style={styles.textLengthSty1}>
                Glen Ridge St. Gainesville
              </Text>
              <Text style={styles.textLengthSty2}>24 mins (7.8 mi) away</Text>
              <Text style={styles.textLengthSty3}>
                Glen Ridge St. Gainesville
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.bottomTextView}>
          <Text style={styles.bottomTextSty1}>All caught up</Text>
          <Text style={styles.bottomTextSty2}>
            We'll let you know when more requests
          </Text>
          <Text style={styles.bottomTextSty3}>become available</Text>
        </View>
        {tabName && (
          <View>
            <ImageBackground
              source={images.mapbgImg}
              style={styles.bgImg}></ImageBackground>
            <View style={styles.recommendedView}>
              <View style={styles.blackView}></View>
              <View style={styles.modalView}>
                <TouchableOpacity style={styles.rowColumnContainer}>
                  <View style={styles.rowView}>
                    <Image source={images.girl} style={styles.girlImg} />
                    <View style={styles.columnView}>
                      <Text style={styles.textSty1}>Pullover</Text>
                      <Text style={styles.textSty2}>Mango</Text>
                      <Image
                        source={images.ratingStar}
                        style={styles.starImg}
                      />
                      <Text style={styles.textSty3}>$51</Text>
                    </View>
                  </View>
                </TouchableOpacity>
                <Text style={styles.textHeadingSty1}>
                  Estimated cost:
                  <Text style={styles.textHeadingSty2}> $55.75</Text>
                </Text>
                <View style={styles.rowView2}>
                  <Image source={images.length} style={styles.lengthImg} />
                  <View style={styles.marginLength}>
                    <Text style={styles.textLengthSty3}>
                      11 mins (7.8 mi) away
                    </Text>
                    <Text style={styles.textLengthSty1}>
                      Glen Ridge St. Gainesville
                    </Text>
                    <Text style={styles.textLengthSty2}>
                      24 mins (7.8 mi) away
                    </Text>
                    <Text style={styles.textLengthSty3}>
                      Glen Ridge St. Gainesville
                    </Text>
                  </View>
                </View>
                <TouchableOpacity
                  style={styles.btnSty}
                  onPress={() => {
                    setAcceptModal(true);
                    setTabName(!tabName);
                  }}>
                  <Text style={styles.btnTextSty}>Accept</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={styles.crossbtnMainView2}
                onPress={() => setTabName(false)}>
                <Image source={images.crossBtn} style={styles.crossbtnView} />
              </TouchableOpacity>
            </View>
          </View>
        )}

        {acceptModal && (
          <View style={{backgroundColor: 'red', height: sizes.screenHeight}}>
            <ImageBackground
              source={images.mapbgImg}
              style={styles.bgImg}></ImageBackground>
            <View style={styles.recommendedView2}>
              <View style={styles.blackView}></View>
              <View style={styles.modalRow}>
                <TouchableOpacity
                  style={styles.crossbtnMainView}
                  onPress={() => {
                    setAcceptModal(false);
                    setCancelRide(!cancelRide);
                  }}>
                  <Image source={images.crossBtn} style={styles.crossbtnView} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.modalRowViewImg}>
                  <Image
                    source={images.filterIcon2}
                    style={styles.modalRowImg}
                  />
                </TouchableOpacity>
                <View style={styles.modalRow2}>
                  <Text style={styles.startModalText}>4 min</Text>
                  <Image source={images.btnTaB3} style={styles.modalRowImg2} />
                  <Text style={styles.startModalText}>1.5 mi</Text>
                </View>
              </View>
              <View style={styles.horizontalLine}></View>
              <View style={styles.modalmiddleSectionView}>
                <Image source={images.message} style={styles.middlemodalView} />
                <Text style={styles.middleModalTextSty}>Taneesha</Text>
                <Image source={images.btnTaB3} style={styles.middlemodalView} />
              </View>
              <TouchableOpacity
                style={styles.btnSty}
                onPress={() => navigation.navigate('ChatRequest')}>
                <Text style={styles.btnTextSty}>Start</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        {cancelRide && (
          <View style={{backgroundColor: 'red', height: sizes.screenHeight}}>
            <ImageBackground
              source={images.mapbgImg}
              style={styles.bgImg}></ImageBackground>
            <View style={styles.recommendedView3}>
              <View style={{alignSelf: 'center', alignItems: 'center'}}>
                <View style={styles.blackView}></View>
                <TouchableOpacity style={styles.crossbtnMainView3}>
                  <Image source={images.crossBtn} style={styles.crossbtnView} />
                </TouchableOpacity>
                <View
                  style={{
                    marginTop: sizes.screenHeight * 0.02,
                    alignItems: 'center',
                  }}>
                  <Text style={styles.textModal}>Going back will cancel</Text>
                  <Text style={styles.textModal}>this Request </Text>
                </View>
                <Text style={styles.textModal2}>
                  Do you want to Decline this Request
                </Text>
                <TouchableOpacity style={styles.btnSty2} onPress={() => setCancelRide(false)}>
                  <Text style={styles.btnTextSty2}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnSty3} onPress={() => setIsModalVisible(!isModalVisible)}>
                  <Text style={styles.btnTextSty}>Continue</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      </View>
      <Modal isVisible={isModalVisible} onBackdropPress={() => setIsModalVisible(!isModalVisible)}>
        <View style={styles.modalCOntinue}>
          <View style={{alignItems:'center'}}>
            <Image source={images.congrats} style={styles.congratsSiz}/>
            <Text style={styles.modalText}>oops</Text>
            <Text style={styles.modalText2}>The product request by Buyer has</Text>
            <Text style={styles.modalText2}>been declined by you</Text>
            <Image source={images.loading} style={styles.congratsSiz2}/>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
