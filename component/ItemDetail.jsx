import React from 'react'
import { Animated, StyleSheet, View, Text, TextInput } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
  box: {
    height: 500,
    width: 300,
    backgroundColor: '#00b894',
    borderRadius: 20,
  },
  titleText: {
    fontSize: 40,
    lineHeight: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 30,
  },
  detailContainer: {
    position: 'relative',
    height: 200,
    width: 300,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  qaIcon: {
    color: 'white',
    position: 'absolute',
    opacity: 0.5,
  },
  text: {
    fontSize: 20,
  },
})

const ItemDetail = (props) => {
  const { qText, aText } = props
  return (
    <Animated.View>
      <View style={styles.box}>
        <View>
          <Text style={styles.titleText}>Q＆A</Text>
        </View>
        <View style={styles.detailContainer}>
          <FontAwesome
            style={styles.qaIcon}
            size={200}
            name="question-circle-o"
          ></FontAwesome>
          <TextInput multiline={true} style={styles.text}>
            {qText}
          </TextInput>
        </View>
        <View style={styles.detailContainer}>
          <FontAwesome
            style={styles.qaIcon}
            size={200}
            name="comment-o"
          ></FontAwesome>
          <TextInput multiline={true} style={styles.text}>
            {aText}
          </TextInput>
        </View>
      </View>
    </Animated.View>
  )
}

export default ItemDetail
