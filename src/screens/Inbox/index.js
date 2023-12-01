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

export default function Inbox() {
  const [chats, setChats] = useState([
    {
      profile: images.message1,
      name: 'Anne Snow',
      message: 'Hello!',
      unread: true,
      unreadCount: '2',
      online: true,
    },
    {
      profile: images.message2,
      name: 'Sara Williams',
      message: 'Thank you for the support.',
      unread: true,
      unreadCount: '4',
      online: false,
    },
    {
      profile: images.message3,
      name: 'John Smith',
      message: 'No worries.',
      unread: false,
      unreadCount: '4',
      online: false,
    },
    {
      profile: images.message4,
      name: 'John Snow',
      message: 'Hello!',
      unread: false,
      unreadCount: '4',
      online: true,
    },
    {
      profile: images.message5,
      name: 'Sara Williams',
      message: 'Thank you for the support.',
      unread: false,
      unreadCount: '4',
      online: false,
    },
    {
      profile: images.message6,
      name: 'John Smith',
      message: 'No worries.',
      unread: false,
      unreadCount: '4',
      online: true,
    },
    {
      profile: images.message7,
      name: 'John Snow',
      message: 'No worries.',
      unread: false,
      unreadCount: '4',
      online: false,
    },
    {
      profile: images.message3,
      name: 'John Smith',
      message: 'No worries.',
      unread: false,
      unreadCount: '4',
      online: false,
    },
    {
      profile: images.message4,
      name: 'John Snow',
      message: 'Hello!',
      unread: false,
      unreadCount: '4',
      online: true,
    },
    {
      profile: images.message5,
      name: 'Sara Williams',
      message: 'Thank you for the support.',
      unread: false,
      unreadCount: '4',
      online: false,
    },
  ]);
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Heading
          title={'Messages'}
          showImg={true}
          ImgSource={images.searchIconn}
        />
        <ScrollView>
          <View style={styles.marginTop}>
            {chats.map((item, index) => {
              return (
                <TouchableOpacity style={styles.mapView} key={index}>
                  <View style={styles.imageNameView}>
                    <Image source={item.profile} style={styles.profile} />
                    {item.online && (
                      <Image
                        source={images.onlineImg}
                        style={styles.onlineImg}
                      />
                    )}
                    <View style={styles.nameMainVidew}>
                      <Text style={styles.name}>{item.name}</Text>
                      <Text
                        style={
                          item.unread ? styles.messageUnread : styles.message
                        }>
                        {item.message}
                      </Text>
                    </View>
                  </View>
                  {item.unread && (
                    <View style={styles.unreadView}>
                      <Text style={styles.unreadText}>{item.unreadCount}</Text>
                    </View>
                  )}
                </TouchableOpacity>
              );
            })}
          </View>

          <View style={styles.marginBottom}></View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
