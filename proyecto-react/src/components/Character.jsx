import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Character({ chara }) {
  const [characters, setCharacters] = useState({});

  const getCharacters = (url) => {
    axios.get(url)
      .then((response) => {
        // console.log(response)
        setCharacters(response.data)
      })
      .catch((err) => { console.log(err) })
  }

  useEffect(() => {
    getCharacters(chara.url);
  }, [])

  return (
      <div class="card ">
        <div class="card-header text-white">
          <span className='fs-5 fw-bold'>{characters.name}</span>  
        </div>
        <img src={characters.image} class="card-img-top" alt="..." />
        <div className="class-body">
          <ul>
            <li><span className='fs-6 fw-bold'>Estado: </span> {characters.status}</li>
            <li><span className='fs-6 fw-bold'>Especie: </span> {characters.species}</li>
            <li><span className='fs-6 fw-bold'>Genero: </span> {characters.gender}</li>
            <li><span className='fs-6 fw-bold'>Origen: </span> {characters.origin.name}</li>
            <li><span className='fs-6 fw-bold'>Locación: </span> {characters.location.name}</li>
          </ul>
        </div>
      </div>
    
    
  )
}





  // <div className="container col-4 d-flex  justify-content-between " >   
    //   <div className="card mt-4">
    //     <div class="card-header bg-primary text-white">
    //       <span className='fs-5 fw-bold mb-4'>{characters.name}</span>
    //     </div>
    //     <img src={characters.image} class="card-img-top" alt="..." />
    //     <div className="card-body  bg-light">
    //     </div>
    // </div>

// import React, { Component } from 'react'

// export default class Character extends Component {

//     constructor(props){
//         super(props)
//     }

//   render() {
//     return (
//         <div className='container d-flex justify-content-center'>
//         <div className="card mt-4">
//           <div class="card-header bg-primary text-white">
//             {this.props.title}
//           </div>
//           <img src= {this.props.image_url} class="card-img-top" alt="..." />
//           <div className="card-body  bg-light">
//             <p className="card-text">Release date: {this.props.release_date} </p>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }
