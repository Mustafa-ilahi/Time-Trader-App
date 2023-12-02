import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {sizes} from '../utilities/sizes';
import {colors} from '../utilities/colors';
import images from '../utilities/images';
import {Image, Text, View} from 'react-native';
import CardDetails from '../../screens/CardDetails';
import {fontSize} from '../utilities/fonts';
import Booking from '../../screens/Booking';
import Inbox from '../../screens/Inbox';
import Home from '../../screens/Home';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.white,
          width: sizes.screenWidth,
          height: sizes.screenHeight * 0.075,
          paddingTop: sizes.screenHeight * 0.01,
          paddingHorizontal: sizes.screenWidth * 0.04,
          borderTopWidth: 0,
        },
      }}>
      <Tab.Screen
        name="bottom1"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={images.btmTaB1}
              style={{
                resizeMode: 'contain',
                width: sizes.screenWidth * 0.065,
                height: sizes.screenWidth * 0.065,
                tintColor: focused ? colors.black : colors.disabledBg,
              }}
            />
          ),
          tabBarLabel: ({focused}) => (
            <CustomTabLabel focused={focused} label="Home" />
          ),
        }}
      />
      <Tab.Screen
        name="Booking"
        component={Booking}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={images.btmTaB5}
              style={{
                resizeMode: 'contain',
                width: sizes.screenWidth * 0.065,
                height: sizes.screenWidth * 0.065,
                tintColor: focused ? colors.black : colors.disabledBg,
              }}
            />
          ),
          tabBarLabel: ({focused}) => (
            <CustomTabLabel focused={focused} label="Bookings" />
          ),
        }}
      />
      <Tab.Screen
        name="Inbox"
        component={Inbox}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={images.btmTaB4}
              style={{
                resizeMode: 'contain',
                width: sizes.screenWidth * 0.065,
                height: sizes.screenWidth * 0.065,
                tintColor: focused ? colors.black : colors.disabledBg,
              }}
            />
          ),
          tabBarLabel: ({focused}) => (
            <CustomTabLabel focused={focused} label="Inbox" />
          ),
        }}
      />
      <Tab.Screen
        name="bottom4"
        component={CardDetails}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={images.btmTaB3}
              style={{
                resizeMode: 'contain',
                width: sizes.screenWidth * 0.065,
                height: sizes.screenWidth * 0.065,
                tintColor: focused ? colors.black : colors.disabledBg,
              }}
            />
          ),
          tabBarLabel: ({focused}) => (
            <CustomTabLabel focused={focused} label="Wallet" />
          ),
        }}
      />
      <Tab.Screen
        name="bottom5"
        component={CardDetails}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={images.btmTaB2}
              style={{
                resizeMode: 'contain',
                width: sizes.screenWidth * 0.065,
                height: sizes.screenWidth * 0.065,
                tintColor: focused ? colors.black : colors.disabledBg,
              }}
            />
          ),
          tabBarLabel: ({focused}) => (
            <CustomTabLabel focused={focused} label="Profile" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const CustomTabLabel = ({focused, label}) => {
  const inactiveColor = colors.disabledBg2;
  const activeColor = colors.black;

  return (
    <Text
      style={{
        color: focused ? activeColor : inactiveColor,
        fontSize: fontSize.smallM,
        fontWeight: focused ? '800' : '400',
      }}>
      {label}
    </Text>
  );
};
