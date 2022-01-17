import React, {useEffect, useState} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';

const PostScreen = () => {
 
  useEffect(() => {
    console.log('qlq')
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Posts Screen</Text>
    </View>
  );
};

export default PostScreen;
