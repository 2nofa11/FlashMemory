import React from 'react'
import { StyleSheet, SafeAreaView, Text } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
})

export default FlashScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Flash</Text>
    </SafeAreaView>
  )
}
