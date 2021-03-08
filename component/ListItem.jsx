import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

const styles = StyleSheet.create({
  itemContainer: {
    height: 84,
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
    height: 40,
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
    fontSize: 14,
  },
})

const ListItem = (props) => {
  const { qText, aText, checkFlg, onPress } = props
  const checkColor = checkFlg ? 'green' : 'gray'
  return (
    <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
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
    </TouchableOpacity>
  )
}

export default ListItem
