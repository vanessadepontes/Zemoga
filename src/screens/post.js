import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import { connect } from 'react-redux';
import { getDataUser, getComments } from '../store';

const PostScreen = (props) => {
  const {body, userId, id} = props.route.params.item;
  //const user = props.data.user;
  const {comments, user } = props.data;
  
  useEffect(() => {
    props.getDataUser(userId)
    props.getComments(id)
  }, []);

  return (
    <FlatList
        data={comments}
        renderItem={({item}) => 
        <View style={{marginVertical: 8}}>
          <Text>{item.name}</Text>
          <Text>{item.email}</Text>
          <Text>{item.body}</Text>
        </View>
        }
        keyExtractor={item => item.id}
        contentContainerStyle={{alignItems: 'flex-start', justifyContent: 'flex-start', padding: 20}}
        ListHeaderComponent={() => (
          <View>
            <Text style={{fontSize: 25, fontWeight: 'bold', marginBottom: 8, marginTop: 20,}}>Description</Text>
            <Text>{body}</Text>
            <Text style={{fontSize: 25, fontWeight: 'bold', marginBottom: 8, marginTop: 20,}}>User</Text>
            <Text>Name: {user.name}</Text>
            <Text>Email: {user.email}</Text>
            <Text>Phone: {user.phone}</Text>
            <Text>Website: {user.website} </Text>
            <Text style={{fontSize: 25, fontWeight: 'bold', marginBottom: 8, marginTop: 20,}}>Comments</Text>
          </View>
          )
        }
      />
    
  );
};

const mapStateToProps = (state) => {
  const {data} = state
  return {data}
};
  
const mapDispatchToProps = (dispatch) => ({
  getDataUser: (idUser) => dispatch(getDataUser(idUser)),
  getComments: (id) => dispatch(getComments(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostScreen);
