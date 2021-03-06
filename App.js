import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Ionicons, FontAwesome } from '@expo/vector-icons'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemContainer: {
    height: 70,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    flexDirection: 'row',
  },
  qaContainer: {
    backgroundColor: 'blue',
    flex: 1,
    padding: 16,
    justifyContent: 'space-between',
  },
  checkontainer: {
    width: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <View style={styles.qaContainer}>
          <View></View>
          <View></View>
        </View>
        <View style={styles.checkontainer}>
          <FontAwesome size={50} color="gray" name="check-square"></FontAwesome>
        </View>
      </View>
    </View>
  )
}
