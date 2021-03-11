import React, { useState, useEffect } from 'react'
import { StyleSheet, SafeAreaView, TouchableOpacity, Text } from 'react-native'
import ItemDetail from '../component/ItemDetail'
import { useDispatch } from 'react-redux'
import { addClip } from '../store/actions/user'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
})

export default PlusScreen = ({ route }) => {
  const [qText, setQText] = useState('')
  const [aText, setAText] = useState('')

  const onChangeQText = (inputValue) => {
    setQText(inputValue)
  }
  const onChangeAText = (inputValue) => {
    setAText(inputValue)
  }

  const dispatch = useDispatch()
  return (
    <SafeAreaView style={styles.container}>
      <ItemDetail
        qText=""
        aText=""
        onChangeQText={onChangeQText}
        onChangeAText={onChangeAText}
      />
      <TouchableOpacity
        onPress={() => {
          const article = {
            qText: qText,
            aText: aText,
            checkFlg: true,
          }
          dispatch(addClip({ clip: article }))
        }}
      >
        <Text style={{ margin: 10, fontSize: 30 }}>add</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}
