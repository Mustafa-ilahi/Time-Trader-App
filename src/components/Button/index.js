import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './style'

export default function Button({title,dark}) {
  return (
    <SafeAreaView>
      <TouchableOpacity style={dark  ? styles.button : styles.buttonLight}>
        <Text style={dark  ? styles.buttonTxt : styles.buttonTxtLight }>{title}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}
