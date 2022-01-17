
import * as React from 'react';
import TabStack from './TabStack';
import PostScreen from '../screens/post';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createNativeStackNavigator();

const PostsStack =() => {
  return (
      <Stack.Navigator
        initialRouteName="Posts"
        screenOptions={{
          headerStyle: { backgroundColor: '#F8F8F8' },
          headerTintColor: '#7624C7',
          headerTitleStyle: { fontWeight: 'bold' }
        }}>
        <Stack.Screen name="Posts" component={TabStack} options={{ title: 'Posts' }}/>
        <Stack.Screen name="Post" component={PostScreen} options={{ title: 'Post' }}/>
      </Stack.Navigator>
  );
}

export default PostsStack;