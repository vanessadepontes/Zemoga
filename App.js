
import * as React from 'react';
import PostsStack from './src/navigation/PostsStack';
import { NavigationContainer } from '@react-navigation/native';

function App() {
  return (
    <NavigationContainer>
      <PostsStack />
    </NavigationContainer>
  );
}

export default App;