import React from 'react';
import {Text, View} from 'react-native';
import OTP from './src/screens/OTP';
import CreateAccount from './src/screens/CreateAccount';
import Notification from './src/screens/Notification';
import Settings from './src/screens/Settings';
import EditMyProfile from './src/screens/EditMyProfile';
import SettingNotification from './src/screens/SettingNotification';
import Security from './src/screens/Security';
import Earning from './src/screens/Earning';
import EarningSecondScreen from './src/screens/EarningSecondScreen';
import Privacy from './src/screens/Privacy';
import Payment from './src/screens/Payment';
import Language from './src/screens/Language';
import Profile from './src/screens/Profile';
import MainBalance from './src/screens/MainBalance';
import TransactionHistory from './src/screens/TransactionHistory';
import TopUpWallet from './src/screens/TopUpWallet';
import WithdrawToBankAccount from './src/screens/WithdrawToBankAccount';
import Cards from './src/screens/Cards';
import AddNewCard from './src/screens/AddNewCard';
import CardDetails from './src/screens/CardDetails';
import MainNavigator from './src/services/config/navigation';

export default function App() {
  return <MainNavigator />;
}
