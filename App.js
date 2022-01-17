
import * as React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './src/store/reducer.js';
import PostsStack from './src/navigation/postsStack';
import { NavigationContainer } from '@react-navigation/native';
import thunk from "redux-thunk" 

const store = createStore(reducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <PostsStack />
      </NavigationContainer>
    </Provider>
  );
}

export default App;