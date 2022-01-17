import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/components/card';

const Card = ({item, onPress}) => {
  return (
    <TouchableOpacity 
      style={styles.item}
      onPress={() => onPress(item.id)}>
      <View style={styles.viewText}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.body}>{item.body}</Text>
      </View>
      <View style={styles.viewIcons}>
        <View>
          {item.unread && <Icon name="circle" size={20} color="#039be5" />}
          {item.favorite && <Icon name="star" size={25} color="#ffd740" />}
        </View>
        <View>
          <Icon name="angle-right" size={20} color="grey" />
        </View>
        <View />
      </View>
    </TouchableOpacity>
  );
};

export default Card;