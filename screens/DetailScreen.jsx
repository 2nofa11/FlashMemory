import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
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

export default DetailScreen = ({ route }) => {
  const { article } = route.params
  return (
    <SafeAreaView style={styles.container}>
      <ItemDetail qText={article.qText} aText={article.aText} />
    </SafeAreaView>
  )
}
