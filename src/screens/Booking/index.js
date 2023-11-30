import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './style';
import Heading from '../../components/Heading';
import images from '../../services/utilities/images';

export default function Booking() {
  const [tabname, setTabname] = useState('Pending');
  const [pendingData, setPendingData] = useState([
    {
      day: 'Mon 12 Dec 2022',
      profile: images.profile2,
      price: '12.5',
      name: 'Aakash Kukadiya',
      location1: 'Ghogha Circle, Bhavnagar',
      time1: '3:15 pm',
      location2: 'Kaliyabid , Bhavnagar',
      time2: '3:45 pm',
    },
    {
      day: 'Mon 12 Dec 2022',
      profile: images.profile2,
      price: '12.5',
      name: 'Aakash Kukadiya',
      location1: 'Ghogha Circle, Bhavnagar',
      time1: '3:15 pm',
      location2: 'Kaliyabid , Bhavnagar',
      time2: '3:45 pm',
    },
    {
      day: 'Mon 12 Dec 2022',
      profile: images.profile2,
      price: '12.5',
      name: 'Aakash Kukadiya',
      location1: 'Ghogha Circle, Bhavnagar',
      time1: '3:15 pm',
      location2: 'Kaliyabid , Bhavnagar',
      time2: '3:45 pm',
    },
    {
      day: 'Mon 12 Dec 2022',
      profile: images.profile2,
      price: '12.5',
      name: 'Aakash Kukadiya',
      location1: 'Ghogha Circle, Bhavnagar',
      time1: '3:15 pm',
      location2: 'Kaliyabid , Bhavnagar',
      time2: '3:45 pm',
    },
  ]);
  const [completedData, setCompletedData] = useState([
    {
      day: 'Mon 12 Dec 2022',
      profile: images.profile2,
      price: '12.5',
      name: 'Aakash Kukadiya',
      location1: 'Ghogha Circle, Bhavnagar',
      time1: '3:15 pm',
      location2: 'Kaliyabid , Bhavnagar',
      time2: '3:45 pm',
    },
    {
      day: 'Mon 12 Dec 2022',
      profile: images.profile2,
      price: '12.5',
      name: 'Aakash Kukadiya',
      location1: 'Ghogha Circle, Bhavnagar',
      time1: '3:15 pm',
      location2: 'Kaliyabid , Bhavnagar',
      time2: '3:45 pm',
    },
    {
      day: 'Mon 12 Dec 2022',
      profile: images.profile2,
      price: '12.5',
      name: 'Aakash Kukadiya',
      location1: 'Ghogha Circle, Bhavnagar',
      time1: '3:15 pm',
      location2: 'Kaliyabid , Bhavnagar',
      time2: '3:45 pm',
    },
    {
      day: 'Mon 12 Dec 2022',
      profile: images.profile2,
      price: '12.5',
      name: 'Aakash Kukadiya',
      location1: 'Ghogha Circle, Bhavnagar',
      time1: '3:15 pm',
      location2: 'Kaliyabid , Bhavnagar',
      time2: '3:45 pm',
    },
  ]);
  const [cancelledData, setCancelledData] = useState([
    {
      day: 'Mon 12 Dec 2022',
      profile: images.profile2,
      price: '12.5',
      name: 'Aakash Kukadiya',
      location1: 'Ghogha Circle, Bhavnagar',
      time1: '3:15 pm',
      location2: 'Kaliyabid , Bhavnagar',
      time2: '3:45 pm',
    },
    {
      day: 'Mon 12 Dec 2022',
      profile: images.profile2,
      price: '12.5',
      name: 'Aakash Kukadiya',
      location1: 'Ghogha Circle, Bhavnagar',
      time1: '3:15 pm',
      location2: 'Kaliyabid , Bhavnagar',
      time2: '3:45 pm',
    },
    {
      day: 'Mon 12 Dec 2022',
      profile: images.profile2,
      price: '12.5',
      name: 'Aakash Kukadiya',
      location1: 'Ghogha Circle, Bhavnagar',
      time1: '3:15 pm',
      location2: 'Kaliyabid , Bhavnagar',
      time2: '3:45 pm',
    },
    {
      day: 'Mon 12 Dec 2022',
      profile: images.profile2,
      price: '12.5',
      name: 'Aakash Kukadiya',
      location1: 'Ghogha Circle, Bhavnagar',
      time1: '3:15 pm',
      location2: 'Kaliyabid , Bhavnagar',
      time2: '3:45 pm',
    },
  ]);

  const handleTabname = name => {
    setTabname(name);
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Heading
          title={'Booking'}
          showImg={true}
          ImgSource={images.searchIconn}
        />
        <View style={styles.tabView}>
          <TouchableOpacity
            style={styles.tabBtn}
            onPress={() => {
              handleTabname('Pending');
            }}>
            <Text
              style={
                tabname === 'Pending' ? styles.btnTextActive : styles.btnText
              }>
              Pending
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.tabBtn}
            onPress={() => {
              handleTabname('completed');
            }}>
            <Text
              style={
                tabname === 'completed' ? styles.btnTextActive : styles.btnText
              }>
              Completed
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.tabBtn}
            onPress={() => {
              handleTabname('cancelled');
            }}>
            <Text
              style={
                tabname === 'cancelled' ? styles.btnTextActive : styles.btnText
              }>
              Cancelled
            </Text>
          </TouchableOpacity>
        </View>
        {tabname === 'Pending' && (
          <ScrollView>
            <View>
              {pendingData.map((item, index) => {
                return (
                  <View key={index} style={styles.mapView}>
                    <Text style={styles.dayText}>{item.day}</Text>
                    <View style={styles.profilePriceView}>
                      <View style={styles.profileView}>
                        <Image
                          source={item.profile}
                          style={styles.profileImg}
                        />
                        <Text style={styles.nameText}>{item.name}</Text>
                      </View>
                      <Text style={styles.priceText}>{`$${item.price}`}</Text>
                    </View>
                    <View style={styles.locationMainView}>
                      <View style={{flexDirection: 'row'}}>
                        <Image
                          source={images.trackImg}
                          style={styles.trackImg}
                        />
                        <View style={styles.locationTextView}>
                          <View>
                            <Text style={styles.locationText}>
                              {item.location1}
                            </Text>
                            <Text style={styles.timeText}>{item.time1}</Text>
                          </View>
                          <Text style={styles.locationText}>
                            {item.location2}
                          </Text>
                        </View>
                      </View>

                      <Text style={styles.pendingText}>Pending</Text>
                    </View>
                  </View>
                );
              })}
            </View>
            <View style={styles.marginBottom}></View>
          </ScrollView>
        )}
        {tabname === 'completed' && (
          <ScrollView>
            <View>
              {completedData.map((item, index) => {
                return (
                  <View key={index} style={styles.mapView}>
                    <Text style={styles.dayText}>{item.day}</Text>
                    <View style={styles.profilePriceView}>
                      <View style={styles.profileView}>
                        <Image
                          source={item.profile}
                          style={styles.profileImg}
                        />
                        <Text style={styles.nameText}>{item.name}</Text>
                      </View>
                      <Text style={styles.priceText}>{`$${item.price}`}</Text>
                    </View>
                    <View style={styles.locationMainView}>
                      <View style={{flexDirection: 'row'}}>
                        <Image
                          source={images.trackImg}
                          style={styles.trackImg}
                        />
                        <View style={styles.locationTextView}>
                          <View>
                            <Text style={styles.locationText}>
                              {item.location1}
                            </Text>
                            <Text style={styles.timeText}>{item.time1}</Text>
                          </View>
                          <Text style={styles.locationText}>
                            {item.location2}
                          </Text>
                        </View>
                      </View>

                      <Text style={styles.completedText}>Completed</Text>
                    </View>
                  </View>
                );
              })}
            </View>
            <View style={styles.marginBottom}></View>
          </ScrollView>
        )}
        {tabname === 'cancelled' && (
          <ScrollView>
            <View>
              {cancelledData.map((item, index) => {
                return (
                  <View key={index} style={styles.mapView}>
                    <Text style={styles.dayText}>{item.day}</Text>
                    <View style={styles.profilePriceView}>
                      <View style={styles.profileView}>
                        <Image
                          source={item.profile}
                          style={styles.profileImg}
                        />
                        <Text style={styles.nameText}>{item.name}</Text>
                      </View>
                      <Text style={styles.priceText}>{`$${item.price}`}</Text>
                    </View>
                    <View style={styles.locationMainView}>
                      <View style={{flexDirection: 'row'}}>
                        <Image
                          source={images.trackImg}
                          style={styles.trackImg}
                        />
                        <View style={styles.locationTextView}>
                          <View>
                            <Text style={styles.locationText}>
                              {item.location1}
                            </Text>
                            <Text style={styles.timeText}>{item.time1}</Text>
                          </View>
                          <Text style={styles.locationText}>
                            {item.location2}
                          </Text>
                        </View>
                      </View>

                      <Text style={styles.pendingText}>Pending</Text>
                    </View>
                  </View>
                );
              })}
            </View>
            <View style={styles.marginBottom}></View>
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  );
}
