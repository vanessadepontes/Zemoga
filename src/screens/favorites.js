import React, {useEffect, useState} from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import styles from '../styles/screens/favorites';
import Card from '../components/card'

const FavoritesScreen = () => {
 
  useEffect(() => {
    console.log('qlq')
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={[]}
        renderItem={({item}) => <Card item={item}/>}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default FavoritesScreen;
