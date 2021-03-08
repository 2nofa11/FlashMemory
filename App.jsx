import React from 'react'
import { StyleSheet, View } from 'react-native'
import ListItem from './component/ListItem'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemContainer: {
    height: 70,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    flexDirection: 'row',
  },
  qaContainer: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 1,
  },
  detailContainer: {
    height: 32,
    flexDirection: 'row',
  },
  qaIcon: {
    width: 30,
    padding: 5,
    color: 'black',
  },
  checkontainer: {
    width: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    width: '90%',
    fontSize: 12,
  },
})

export default function App() {
  return (
    <View style={styles.container}>
      <ListItem
        qText="これが質問文です。"
        aText="これが回答です。"
        checkFlg={true}
      />
    </View>
  )
}
