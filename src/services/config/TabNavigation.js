import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {sizes} from '../utilities/sizes';
import {colors} from '../utilities/colors';
import images from '../utilities/images';
import {Image, View} from 'react-native';
import CardDetails from '../../screens/CardDetails';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        // tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: 'red',
          width: sizes.screenWidth,
          height: sizes.screenHeight * 0.08,
          paddingBottom: 10,
        },
      }}>
      <Tab.Screen
        name="CardDetails"
        component={CardDetails}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image
                source={images.btmTaB1}
                style={{
                  resizeMode: 'contain',

                  width: sizes.screenWidth * 0.07,
                  height: sizes.screenWidth * 0.07,
                  tintColor: '#FFFFFF',
                }}
              />
            ) : (
              <Image
                source={images.btmTaB1}
                style={{
                  resizeMode: 'contain',

                  width: sizes.screenWidth * 0.07,
                  height: sizes.screenWidth * 0.07,
                  tintColor: '#505050',
                }}
              />
            ),
        }}
      />
      {/* <Tab.Screen name='Home2' component={Home} options={{
                tabBarIcon: ({ focused }) =>
                    focused ? (
                        <Image
                            source={images.btmTaB2}
                            style={{
                                resizeMode: 'contain',
                                width: sizes.screenWidth * 0.06,
                                height: sizes.screenWidth * 0.07,


                            }}
                        />
                    ) : (
                        <Image
                            source={images.btmTaB2}
                            style={{
                                resizeMode: 'contain',
                                width: sizes.screenWidth * 0.06,
                                height: sizes.screenWidth * 0.07,
                                tintColor: '#505050'
                            }}
                        />
                    )
            }} />
      <Tab.Screen name='Home3' component={Home} options={{
                tabBarIcon: ({ focused }) =>
                    focused ? (
                        <Image
                            source={images.btmTaB3}
                            style={{
                                resizeMode: 'contain',
                                width: sizes.screenWidth * 0.06,
                                height: sizes.screenWidth * 0.07,

                            }}
                        />
                    ) : (
                        <Image
                            source={images.btmTaB3}
                            style={{
                                resizeMode: 'contain',
                                width: sizes.screenWidth * 0.06,
                                height: sizes.screenWidth * 0.07,
                                tintColor: '#505050'
                            }}
                        />
                    )
            }} />
      <Tab.Screen name='Home4' component={Home} options={{
                tabBarIcon: ({ focused }) =>
                    focused ? (
                        <View style={{
                            borderColor: '#DDE9FE',
                            borderWidth: 2,
                            borderRadius: sizes.screenWidth * 0.07,
                            padding: sizes.screenWidth * 0.01,
                        }}>
                            <Image
                                source={images.btmTaB4}
                                style={{
                                    resizeMode: 'contain',

                                    width: sizes.screenWidth * 0.075,
                                    height: sizes.screenWidth * 0.075,
                                }}
                            />
                        </View>
                    ) : (
                        <View style={{
                            borderColor: '#505050',
                            borderWidth: 2,
                            resizeMode: 'contain',

                            borderRadius: sizes.screenWidth * 0.07,
                            padding: sizes.screenWidth * 0.01,
                        }}>
                            <Image
                                source={images.btmTaB4}
                                style={{
                                    width: sizes.screenWidth * 0.075,
                                    height: sizes.screenWidth * 0.075,
                                }}
                            />
                        </View>
                    )
            }} /> */}
    </Tab.Navigator>
  );
}
