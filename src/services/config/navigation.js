// Navigationimport React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LandingPage from '../../screens/LandingPage';
import AddNewCard from '../../screens/AddNewCard';
import CardDetails from '../../screens/CardDetails';
import Cards from '../../screens/Cards';
import CreateAccount from '../../screens/CreateAccount';
import Earning from '../../screens/Earning';
import EarningSecondScreen from '../../screens/EarningSecondScreen';
import EditMyProfile from '../../screens/EditMyProfile';
import Language from '../../screens/Language';
import MainBalance from '../../screens/MainBalance';
import Notification from '../../screens/Notification';
import OTP from '../../screens/OTP';
import Payment from '../../screens/Payment';
import Privacy from '../../screens/Privacy';
import Profile from '../../screens/Profile';
import Security from '../../screens/Security';
import SettingNotification from '../../screens/SettingNotification';
import Settings from '../../screens/Settings';
import TopUpWallet from '../../screens/TopUpWallet';
import TransactionHistory from '../../screens/TransactionHistory';
import WithdrawToBankAccount from '../../screens/WithdrawToBankAccount';
import TabNavigation from './TabNavigation';

const Stack = createStackNavigator();
export default function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="MyStack" component={MyStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const MyStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
         <Stack.Screen
        name="MyTabs"
        component={MyTabs}
      />
      <Stack.Screen
        name="WithdrawToBankAccount"
        component={WithdrawToBankAccount}
      />
      <Stack.Screen name="TransactionHistory" component={TransactionHistory} />
      <Stack.Screen name="TopUpWallet" component={TopUpWallet} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen
        name="SettingNotification"
        component={SettingNotification}
      />
      <Stack.Screen name="Security" component={Security} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Privacy" component={Privacy} />
      <Stack.Screen name="Payment" component={Payment} />
      <Stack.Screen name="OTP" component={OTP} />
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="MainBalance" component={MainBalance} />
      <Stack.Screen name="Language" component={Language} />
      <Stack.Screen name="EditMyProfile" component={EditMyProfile} />
      <Stack.Screen
        name="EarningSecondScreen"
        component={EarningSecondScreen}
      />
      <Stack.Screen name="Earning" component={Earning} />
      <Stack.Screen name="CreateAccount" component={CreateAccount} />
      <Stack.Screen name="Cards" component={Cards} />
      <Stack.Screen name="CardDetails" component={CardDetails} />
      <Stack.Screen name="AddNewCard" component={AddNewCard} />
      <Stack.Screen name="LandingPage" component={LandingPage} />
    </Stack.Navigator>
  );
};

const MyTabs = () => {
  return <TabNavigation />;
};
