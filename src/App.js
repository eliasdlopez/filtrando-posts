import React, { Component } from 'react';
import posts from './posts'

class App extends Component {
  state = {
    searchString: ''
  }

  handleChange = (event) =>
    this.setState({
      searchString: event.target.value
    });

  render() {
    const searchString = this.state.searchString.trim().toLowerCase();
    
    let filteredPosts = posts;

    if (searchString.length > 0) {

      filteredPosts = posts.filter(function(i) {
      return i.title.toLowerCase().includes( searchString );
      
    });
    }
    
    return (
      <div>
        <div className="filter">
          <input value={this.state.searchString} 
                 onChange={this.handleChange}
                 type="text" 
                 placeholder="Ingresa el término de búsqueda" 
                 
                 />
        </div>
        <ul>
          {filteredPosts.map((post, index) =>
          <li key={index}>
            <a href={post.url}><img src={post.image} alt=''/></a>
            <a href={post.url}><p>{post.title}</p></a>
          </li>
          )}
        </ul>
      </div>
    )
  }
}


export default App


