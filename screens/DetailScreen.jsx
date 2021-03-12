import React, { useState, useEffect } from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import ItemDetail from '../component/ItemDetail'
import EditButton from '../component/EditButton'
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

  const [qText, setQText] = useState(article.qText)
  const [aText, setAText] = useState(article.aText)
  const onChangeQText = (inputValue) => {
    setQText(inputValue)
  }
  const onChangeAText = (inputValue) => {
    setAText(inputValue)
  }
  return (
    <SafeAreaView style={styles.container}>
      <ItemDetail
        qText={qText}
        aText={aText}
        onChangeQText={onChangeQText}
        onChangeAText={onChangeAText}
      />

      <EditButton
        onPressUpdate={() => {
          article.qText = qText
          article.aText = aText
          dispatch(addClip({ clip: article }))
        }}
        onPressDelete={() => {
          dispatch(deleteClip({ clip: article }))
        }}
      />
    </SafeAreaView>
  )
}
