import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import styles from '../styles/components/card';

const HeaderButton = (props) => {
  return (
    <Pressable onPress={() => props.onPress()}>
      <Icon name={props.name} size={25} color="grey" />
    </Pressable>
  );
};

export default HeaderButton;