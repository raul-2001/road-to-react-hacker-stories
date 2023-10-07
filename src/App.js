import * as React from 'react';

let list = [
  {
  id: 1,
  title: "road to react",
  },

  {
    id: 2,
    title: "road to django",
    author: "Raul"
  },
  {
    id:3,
    title: "road to python",
    author: "Raul"

  },
  {
    id: 4,
    title: "road to AWS",
    author: "Raul"
  }
]

function List(){
  return(
  <ul>
    {list.map(function(item) {
      return (
        <li key={item.id}>
          <span>{item.title}</span>
          <span>: {item.author}</span>
        </li>
        
      );
    })
    }
  </ul>
  );
}

function Search() {
  return(
    <div>
      <label htmlFor='search'>Search</label>
      <input id='search' type="text" />
    </div>
  );
}


function App() {
  return(
    <div>
      <h1>My hacker stories</h1>
      <Search/>
      <Search/>
      <hr/>
      <List/>
      <List/>
    </div>
  );
}

export default App;