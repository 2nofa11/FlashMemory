import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
})

const EditButton = (props) => {
  const { onPressUpdate, onPressDelete } = props
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={onPressUpdate} style={styles.container}>
        <FontAwesome name="pencil" size={40} color="gray" />
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressDelete} style={styles.container}>
        <FontAwesome name="trash" size={40} color="gray" />
      </TouchableOpacity>
    </View>
  )
}

export default EditButton
