import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {styles} from './style';
import Header from '../../components/Header';
import images from '../../services/utilities/images';

export default function Profile() {
  const [horizontalMenu, setHorizontalMenu] = useState([
    {name: 'Excellent Service', image: images.imgOne, number: images.numberOne},
    {
      name: 'Great Conversation',
      image: images.imgTwo,
      number: images.numberTwo,
    },
    {
      name: 'Great Navigation',
      image: images.imgThree,
      number: images.numberThree,
    },
    {name: 'Neat and Clean', image: images.imgFour, number: images.numberFour},
    {name: 'Excellent Service', image: images.imgOne, number: images.numberOne},
    {
      name: 'Great Conversation',
      image: images.imgTwo,
      number: images.numberTwo,
    },
    {
      name: 'Great Navigation',
      image: images.imgThree,
      number: images.numberThree,
    },
    {name: 'Neat and Clean', image: images.imgFour, number: images.numberFour},
  ]);
  const [review, setReview] = useState([
    {comment: 'Thanks Andrew', time: '6 months ago'},
    {comment: 'You are the best driver I"ve ever met', time: '6 months ago'},
    {comment: 'Thanks Andrew', time: '6 months ago'},
    {comment: 'You are the best driver I"ve ever met', time: '6 months ago'},
  ]);
  return (
    <View style={styles.MainContainer}>
      <Header title={'Profile'} />
        <TouchableOpacity style={styles.headerImgTouchable}>
          <Image source={images.pencil} style={styles.headerImg} />
        </TouchableOpacity>
      <ScrollView>
        <Image source={images.banner} style={styles.bannerImg} />
        <Image source={images.profile} style={styles.profileImg} />
        <View style={styles.contentView}>
          <Text style={styles.profileText1}>Andrew Ainsley</Text>
          <View style={styles.row}>
            <View>
              <Text style={styles.graphText4}>95.0%</Text>
              <Text style={styles.graphText3}>Acceptance</Text>
            </View>
            <View>
              <Text style={styles.graphText4}>4.74</Text>
              <Text style={styles.graphText3}>Rating</Text>
            </View>
            <View>
              <Text style={styles.graphText4}>4.75</Text>
              <Text style={styles.graphText3}>Cancellation</Text>
            </View>
          </View>
          <View style={styles.horizontalLine}></View>
          <View style={styles.cashOutView}>
            <Text style={styles.graphText}>2,541 trips over 2 years</Text>
            <Text style={styles.graphText1}>
              Tell buyers a little bit about yourself
            </Text>
            <TouchableOpacity>
              <Text style={styles.btn2}>Add Details</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.horizontalLine}></View>
          <View style={styles.row2}>
            <Text style={styles.graphText4}>Compliment</Text>
            <TouchableOpacity>
              <Text style={styles.graphText2}>view all</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.roundView}>
              {horizontalMenu.map((item, index) => {
                return (
                  <TouchableOpacity key={index} style={styles.roundCenterView}>
                    <View style={styles.roundImgView}>
                      <Image source={item.image} style={styles.roundImg} />
                    </View>
                    <Image source={item.number} style={styles.roundImgNmbr} />
                    <Text style={styles.roundText}>{item.name}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </ScrollView>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.roundView2}>
              {review.map((item, index) => {
                return (
                  <View key={index} style={styles.bottomDiv}>
                    <Text
                      style={styles.bottomDivText1}>{`"${item.comment}"`}</Text>
                    <Text style={styles.bottomDivText2}>{item.time}</Text>
                  </View>
                );
              })}
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
}
