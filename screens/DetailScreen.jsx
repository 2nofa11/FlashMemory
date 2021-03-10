import React from 'react'
import { StyleSheet, SafeAreaView, TouchableOpacity, Text } from 'react-native'
import ItemDetail from '../component/ItemDetail'
import { useDispatch } from 'react-redux'
import { addClip, deleteClip } from '../store/actions/user'

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

  const dispatch = useDispatch()
  return (
    <SafeAreaView style={styles.container}>
      <ItemDetail qText={article.qText} aText={article.aText} />

      <TouchableOpacity
        onPress={() => {
          dispatch(addClip({ clip: article }))
        }}
      >
        <Text style={{ margin: 10, fontSize: 30 }}>add</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          dispatch(deleteClip({ clip: article }))
        }}
      >
        <Text style={{ margin: 10, fontSize: 30 }}>del</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}
