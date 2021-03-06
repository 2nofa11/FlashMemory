import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

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
    flex: 1,
    justifyContent: 'space-between',
    padding: 1,
  },
  detailContainer: {
    height: 32,
    flexDirection: 'row',
  },
  qaIcon: {
    width: 30,
    padding: 5,
    color: 'black',
  },
  checkontainer: {
    width: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    width: '90%',
    fontSize: 12,
  },
})

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <View style={styles.qaContainer}>
          <View style={styles.detailContainer}>
            <FontAwesome
              style={styles.qaIcon}
              size={20}
              name="question-circle-o"
            ></FontAwesome>
            <Text numberOfLines={2} style={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam,
            </Text>
          </View>
          <View style={styles.detailContainer}>
            <FontAwesome
              style={styles.qaIcon}
              size={20}
              name="comment-o"
            ></FontAwesome>
            <Text numberOfLines={2} style={styles.text}>
              これが答え
            </Text>
          </View>
        </View>
        <View style={styles.checkontainer}>
          <FontAwesome
            size={50}
            color="green"
            name="check-square"
          ></FontAwesome>
        </View>
      </View>
    </View>
  )
}
