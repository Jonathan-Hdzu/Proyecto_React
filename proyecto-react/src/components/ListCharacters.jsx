import {useState, useEffect} from 'react';
import axios from 'axios';
import Character from './Character';
import Search from './Search';


export default function ListCharacters() {

  const [characters, setCharacters] = useState([]);

  const getCharacters = () => {
    axios.get("https://rickandmortyapi.com/api/character/")
    .then((response) => {
      // console.log(response.data.results);
      setCharacters(response.data.results)
    })
    .catch((err) => {console.log(err)}) 
  }
  useEffect(() => {
    getCharacters();
  },[])

  return (
    <div className='row' >
    {characters.map((val, i) => {
      return <Search key={i} chara={val}/>
    })}
    </div>
  )
}






























// import React, { Component } from 'react'
// import Character from './Character';

// export default class ListCharacters extends Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//       characters: []
//     }
//   }

//   fetchApi = async () => {
//     let resp = await fetch("https://legacy--api.herokuapp.com/api/v1/books")
//     let data = await resp.json()

//     this.setState({
//       characters: [...data]
//     })
//     //Ya tenemos la llamada a la api
//     // console.log(data);
//   }

//   componentDidMount() {
//     this.fetchApi();
//   }

 
//   render() {
//     // console.log(this.state.characters)
//     return (
//       this.state.characters.map((characters, i) => {
//         return <Character key={i} {...characters}/>
//       })
//       // 
//     )
//   }
// }
