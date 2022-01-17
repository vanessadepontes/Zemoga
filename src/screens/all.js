import React, {useEffect, useLayoutEffect} from 'react';
import { SafeAreaView, FlatList, View, TouchableOpacity } from 'react-native';
import styles from '../styles/screens/all';
import Card from '../components/card'
import { connect } from 'react-redux';
import { getPosts, setInitialState, setRead } from '../store';
import Icon from 'react-native-vector-icons/FontAwesome';

const AllScreen = (props) => {
  const {navigation} = props;

  useEffect(() => {
    props.getPosts()
  }, []);

  const onPress = (item) => {
    navigation.navigate('Post', {item});
    props.setRead(item.id);
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={props.data.posts}
        renderItem={({item}) => <Card item={item} onPress={() => onPress(item)} />}
        keyExtractor={item => item.id}
        ListFooterComponent={
          props.data.posts.length > 0 &&
          (() => (
            <TouchableOpacity 
              onPress={() => props.setInitialState()}
              style={styles.trashIcon}
            >
            <Icon name="trash" size={30} color="red" />
          </TouchableOpacity>
          ))
        }
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
  setInitialState: () => dispatch(setInitialState()),
  setRead: (id) => dispatch(setRead(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AllScreen);