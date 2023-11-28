import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './style'

export default function Button() {
  return (
    <SafeAreaView>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonTxt}>Verify</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}
