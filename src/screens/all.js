import React, {useEffect, useState} from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import styles from '../styles/screens/all';
import Card from '../components/card'

const AllScreen = ({ navigation }) => {
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

export default AllScreen;