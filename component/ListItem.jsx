import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

const styles = StyleSheet.create({
  itemContainer: {
    height: 70,
    width: '100%',
    borderColor: 'gray',
    borderBottomWidth: 1,
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

const ListItem = (props) => {
  const { qText, aText, checkFlg } = props
  const checkColor = checkFlg ? 'green' : 'gray'
  return (
    <View style={styles.itemContainer}>
      <View style={styles.qaContainer}>
        <View style={styles.detailContainer}>
          <FontAwesome
            style={styles.qaIcon}
            size={20}
            name="question-circle-o"
          ></FontAwesome>
          <Text numberOfLines={2} style={styles.text}>
            {qText}
          </Text>
        </View>
        <View style={styles.detailContainer}>
          <FontAwesome
            style={styles.qaIcon}
            size={20}
            name="comment-o"
          ></FontAwesome>
          <Text numberOfLines={2} style={styles.text}>
            {aText}
          </Text>
        </View>
      </View>
      <View style={styles.checkontainer}>
        <FontAwesome
          size={50}
          color={checkColor}
          name="check-square"
        ></FontAwesome>
      </View>
    </View>
  )
}

export default ListItem
