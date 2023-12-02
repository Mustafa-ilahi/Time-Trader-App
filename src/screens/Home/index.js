import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/Header';
import {styles} from './style';
import {colors, fontSize, sizes} from '../../services';
import images from '../../services/utilities/images';
import Button from '../../components/Button';
import MapView, {Marker} from 'react-native-maps';

export default function Home() {
  const [offline, showOffline] = useState(false);
  const [header, showHeader] = useState(false);
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View>
          <MapView
            style={styles.map}
            region={{
              latitude: 40.7590615,
              longitude: -73.969231,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}>
            {/* <Marker
              draggable
              pinColor={'orange'}
              coordinate={{
                latitude: 40.7590615,
                longitude: -73.969231,
              }}
              onDragEnd={e => {
                setLatitude(e.nativeEvent.coordinate.latitude);
                setLongitude(e.nativeEvent.coordinate.latitude);
              }}
            /> */}
          </MapView>

          {!header ? (
            <View style={[styles.row, {bottom: sizes.screenHeight * 0.99}]}>
              <TouchableOpacity style={{left: sizes.screenWidth * 0.03}}>
                <Image source={images.drawer} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.headerView}
                onPress={() => showHeader(!header)}>
                <Text
                  style={{
                    color: colors.white,
                    fontSize: fontSize.h6,
                    fontWeight: '600',
                  }}>
                  R 152.20
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{left: sizes.screenWidth * 0.4}}>
                <Image
                  source={images.notif}
                  style={{
                    height: sizes.screenHeight * 0.08,
                    width: sizes.screenWidth * 0.15,
                  }}
                />
              </TouchableOpacity>
            </View>
          ) : (
            <View
              style={[
                styles.row,
                {
                  bottom: sizes.screenHeight * 0.99,
                  backgroundColor: colors.white,
                  height: sizes.screenHeight * 0.31,
                  width: sizes.screenWidth * 0.9,
                  alignSelf: 'center',
                  borderRadius: sizes.screenWidth * 0.05,
                },
              ]}>
              <TouchableOpacity
                style={styles.headerView2}
                onPress={() => showHeader(!header)}>
                <Text
                  style={{
                    color: colors.white,
                    fontSize: fontSize.h6,
                    fontWeight: '600',
                  }}>
                  R 152.20
                </Text>
              </TouchableOpacity>

              <View style={{flexDirection: 'column'}}>
                <Text
                  style={{
                    color: '#8189B0',
                    fontSize: fontSize.small,
                    fontWeight: '600',
                    marginTop: sizes.screenHeight * 0.12,
                    bottom: sizes.screenHeight * 0.035,
                    left: sizes.screenWidth * 0.05,
                  }}>
                  TODAY, 28 NOV ’23
                </Text>
                <Text
                  style={{
                    color: colors.black,
                    fontSize: fontSize.medium,
                    bottom: sizes.screenHeight * 0.03,
                    left: sizes.screenWidth * 0.03,
                  }}>
                  08 dealCompleted
                </Text>
                <Text
                  style={{
                    color: colors.black,
                    fontSize: fontSize.medium,
                    bottom: sizes.screenHeight * 0.03,
                    left: sizes.screenWidth * 0.1,
                  }}>
                  ♦ 0 points
                </Text>
                <TouchableOpacity
                  style={{
                    borderColor: colors.black,
                    borderWidth: 1,
                    padding: sizes.screenHeight * 0.022,
                    width: sizes.screenWidth * 0.7,
                    alignSelf: 'center',
                    borderRadius: sizes.screenWidth * 0.1,
                    right: sizes.screenWidth * 0.1,
                  }}>
                  <Text
                    style={{
                      color: colors.black,
                      textAlign: 'center',
                      fontSize: fontSize.medium,
                      fontWeight: '600',
                    }}>
                    VIEW SUMMARY
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}

          <View>
            <Image source={images.marker} style={styles.marker} />
            <TouchableOpacity style={styles.goBtnView}>
              <Image source={images.goBtn} style={styles.goBtn} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.sheildBtn}>
              <Image source={images.sheild} style={styles.sheild} />
            </TouchableOpacity>
            {!offline ? (
              <TouchableOpacity
                style={[styles.offlineView]}
                onPress={() => showOffline(!offline)}>
                <View style={styles.blackView}></View>
                <View style={styles.row}>
                  <Image
                    source={images.filterIcon2}
                    style={styles.filterIcon2}
                  />
                  <Text style={styles.offlineText}>You’re Offline</Text>
                </View>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={[styles.offlineView2]}
                onPress={() => showOffline(!offline)}>
                <View style={styles.blackView}></View>
                <View style={styles.row}>
                  <Image
                    source={images.filterIcon2}
                    style={styles.filterIcon2}
                  />
                  <Text style={styles.offlineText}>You’re Offline</Text>
                </View>
                <View style={[styles.row, {left: sizes.screenWidth * 0.02}]}>
                  <View style={{marginRight: sizes.screenWidth * 0.1}}>
                    <Text style={[styles.left]}>95.0%</Text>
                    <Text
                      style={[
                        styles.grayText,
                        {left: sizes.screenWidth * 0.05},
                      ]}>
                      Completed task
                    </Text>
                  </View>
                  <View style={{marginRight: sizes.screenWidth * 0.2}}>
                    <Text style={[styles.left]}>4.75</Text>
                    <Text
                      style={[
                        styles.grayText,
                        {left: sizes.screenWidth * 0.09},
                      ]}>
                      Rating
                    </Text>
                  </View>
                  <View>
                    <Text style={[styles.left]}>4.75</Text>
                    <Text style={styles.grayText}>Cancellation</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
