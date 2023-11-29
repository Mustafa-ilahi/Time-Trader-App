import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './style'
import Header from '../../components/Header'

export default function SettingNotification() {
  return (
    <View>
        <View style={styles.headerPadding}>
        <Header title={'Notification'} />
      </View>
      <View style={styles.topView}>
      <TouchableOpacity style={styles.listViewSty}>
          <Text style={styles.listTextSty}>Gregory Smith</Text>
        </TouchableOpacity>
        </View>
    </View>
  )
}