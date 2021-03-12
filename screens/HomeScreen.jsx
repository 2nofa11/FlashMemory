import React from 'react'
import { StyleSheet, View, SafeAreaView, FlatList, Button } from 'react-native'
import ListItem from '../component/ListItem'
import articles from '../dummy/articles.json'
import { useDispatch, useSelector } from 'react-redux'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
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

export default function HomeScreen(props) {
  const { navigation } = props
  const user = useSelector((state) => state.user)
  const { clips } = user

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={clips}
        renderItem={({ item }) => (
          <ListItem
            qText={item.qText}
            aText={item.aText}
            checkFlg={item.checkFlg}
            onPress={() => navigation.navigate('Detail', { article: item })}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  )
}
