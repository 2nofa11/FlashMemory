import React from 'react'
import { StyleSheet, SafeAreaView, Text, FlatList } from 'react-native'
import { useSelector } from 'react-redux'
import ItemDetail from '../component/ItemDetail'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
})

export default FlashScreen = ({ navigation }) => {
  const user = useSelector((state) => state.user)
  const { clips } = user

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={clips}
        renderItem={({ item }) => (
          <ItemDetail qText={item.qText} aText={item.aText} />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  )
}
