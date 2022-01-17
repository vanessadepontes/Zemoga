import React, {useEffect, useLayoutEffect} from 'react';
import { SafeAreaView, FlatList, View, TouchableOpacity } from 'react-native';
import styles from '../styles/screens/all';
import Card from '../components/card'
import { connect } from 'react-redux';
import { getPosts, setRead } from '../store';
import Icon from 'react-native-vector-icons/FontAwesome';

const AllScreen = (props) => {
  const {navigation} = props;

  const onPress = (item) => {
    navigation.navigate('Post', {item});
    props.setRead(item.id);
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={props.data.posts.filter(v => v.favorite)}
        renderItem={({item}) => <Card item={item} onPress={() => onPress(item)} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => {
  const {data} = state
  return {data}
};
  
const mapDispatchToProps = (dispatch) => ({
  getPosts: () => dispatch(getPosts()),
  setRead: (id) => dispatch(setRead(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AllScreen);