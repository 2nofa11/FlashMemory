import React from 'react'
import { StyleSheet, SafeAreaView, Text } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
})

export default DetailScreen = ({ route }) => {
  const { article } = route.params
  return (
    <SafeAreaView style={styles.container}>
      <Text>{article.qText}</Text>
    </SafeAreaView>
  )
}
