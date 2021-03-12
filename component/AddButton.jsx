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

const AddButton = (props) => {
  const { onPressAdd } = props
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={onPressAdd} style={styles.container}>
        <FontAwesome name="plus-circle" size={40} color="gray" />
      </TouchableOpacity>
    </View>
  )
}

export default AddButton
