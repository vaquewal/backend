import React, { Component } from 'react';
import Post from './Post';
import PostBox from './PostBox';

import './App.css';

class App extends Component {
  render() {
    return (
        <div>
            <Post titulo='Mi Titulo' texto='Este es el texto'/>
            <PostBox/>
        </div>
    );
  }
}

export default App;












////
