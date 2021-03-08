import React from 'react'
import { StyleSheet, SafeAreaView, FlatList } from 'react-native'
import ListItem from '../component/ListItem'
import articles from '../dummy/articles.json'

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
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={articles}
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
