import React from 'react';
import {Text, View} from 'react-native';
import OTP from './src/screens/OTP';
import CreateAccount from './src/screens/CreateAccount';
import Notification from './src/screens/Notification';
import Settings from './src/screens/Settings';
import EditMyProfile from './src/screens/EditMyProfile';
import SettingNotification from './src/screens/SettingNotification';

export default function App() {
  return (
    <View>
      {/* <OTP /> */}
      {/* <CreateAccount /> */}
      {/* <Notification /> */}
      {/* <Settings /> */}
      {/* <EditMyProfile /> */}
      <SettingNotification />
    </View>
  );
}
