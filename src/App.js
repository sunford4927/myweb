import React from 'react';
import Fruits from './Fruits';
import axios from "axios";
// import Movie from './Movie';
import Sidebar from './components/sidebar/Sidebar'
import Topbar from './components/topbar/Topbar'
import './App.css'

const fruits =[
  {
    id : 1,
    name : 'apple',
    color : 'red',
    count : 4
  },
  {
    id : 2,
    name : 'banana',
    color : 'yellow',
    count : 6
  },
  {
    id : 3,
    name : 'strawberry',
    color : 'red',
    count : 9
  }
]


class App extends React.Component {
  state = {
    count: 0,
    movies: []
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get("https://yts.mx/api/v2/list_movies.json");
    this.setState({ movies: movies });
  }
  componentDidMount() {
    this.getMovies();
  }
  

  add = () => {
    this.setState(current => ({ count: current.count + 1 }));
  }

  minus = () => {
    this.setState(current => ({ count: current.count - 1 }));
  }

  render() {
    if(this.state.count === 2){
      return <h5>sucssus</h5>
    }


    // const { movies } = this.state;


    return (
    <div>
      <div className='App'>
        <Topbar/>
      </div>
        <h3 className='count_num'>count: {this.state.count}</h3>
          <button onClick={this.add}>+</button>
          <button onClick={this.minus}>-</button>
        <div className='side_bar'>
      <Sidebar/>
      <div className='other' >other page</div>
        </div>


      {/* <section className='container'>
        <div className='movies'>
          {movies.map(movie => {
      return <Movie
        key={movie.id}
        id={movie.id}
        year={movie.year}
        title={movie.title}
        summary={movie.summary}
        poster={movie.medium_cover_image}
      />
    })}
    
    </div> 
    </section> */}
      <body>
      
      
      {fruits.map(fruits => 
      <Fruits 
        key={fruits.id} 
        name={fruits.name} 
        color={fruits.color} 
        count={fruits.count}
      />)}
      

      

      </body>
    </div>
  )}

}

export default App;