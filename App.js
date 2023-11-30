import React from 'react';
import {Text, View} from 'react-native';
import OTP from './src/screens/OTP';
import CreateAccount from './src/screens/CreateAccount';
import MainBalance from './src/screens/MainBalance';
import TransactionHistory from './src/screens/TransactionHistory';
import TopUpWallet from './src/screens/TopUpWallet';
import WithdrawToBankAccount from './src/screens/WithdrawToBankAccount';
import Cards from './src/screens/Cards';
import AddNewCard from './src/screens/AddNewCard';
import CardDetails from './src/screens/CardDetails';

export default function App() {
  return (
    <View>
      {/* <OTP /> */}
      {/* <CreateAccount /> */}
      {/* <MainBalance /> */}
      {/* <TransactionHistory /> */}
      {/* <TopUpWallet /> */}
      {/* <WithdrawToBankAccount /> */}
      {/* <Cards /> */}
      {/* <AddNewCard /> */}
      <CardDetails />
    </View>
  );
}
