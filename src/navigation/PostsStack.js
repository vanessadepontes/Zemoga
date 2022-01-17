
import * as React from 'react';
import TabStack from './tabStack';
import PostScreen from '../screens/post';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HeaderButton from '../components/headerButton';
import {connect} from 'react-redux';
import { getPosts, setFavorite } from '../store';

const Stack = createNativeStackNavigator();


const PostsStack =({getPosts, data, setFavorite}) => {
  const isFav = (route) => {
    const id = data.posts.filter(v => v.id == route.params.item.id)
    const isFav = id[0].favorite ? 'star' : 'star-o';
    return isFav;
  }
  
  return (
      <Stack.Navigator
        initialRouteName="Posts"
        screenOptions={{
          headerStyle: { backgroundColor: '#F8F8F8' },
          headerTintColor: '#7624C7',
          headerTitleStyle: { fontWeight: 'bold' }
        }}>
        <Stack.Screen 
          name="Posts" 
          component={TabStack} 
          options={{ 
            title: 'Posts', 
            headerRight: () => <HeaderButton name='repeat' onPress={() => getPosts()}/>
          }}
        />
        <Stack.Screen 
          name="Post" 
          component={PostScreen} 
          options={({route, navigation}) => ({
            title: 'Post',
            headerRight: () => 
            (
              <HeaderButton name={isFav(route)} route={route} onPress={() => setFavorite(route.params.item.id)} />
            ),
           })}
        />
      </Stack.Navigator>
  );
}

const mapStateToProps = (state) => {
  const {data} = state
  return {data}
};
  
const mapDispatchToProps = (dispatch) => ({
  getPosts: () => dispatch(getPosts()),
  setFavorite: (id) => dispatch(setFavorite(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsStack);