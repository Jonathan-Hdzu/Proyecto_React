import React, { useEffect, useState } from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { Logout } from './Logout';

const Search = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [characters, setCharacters] = useState([{
  }]);
  const [search, setSearch] = useState("");

  const URL = "https://rickandmortyapi.com/api/character/"

  const showData = async () => {
    const response = await fetch(URL)
    const data = await response.json()
    console.log(data)
    setCharacters(data.results)
  }

  const searcher = (e) => {
    setSearch(e.target.value)
    console.log(e.target)
  }

  let results = []
  if (!search) {
    results = characters
  } else {
    results = characters.filter((dato) =>
      dato.name.toLowerCase().includes(search.toLowerCase())
    )
  }

  // const results = !search ? characters : characters.filter((dato) => dato.name.toLowerCase().includes(search.toLowerCase))

  useEffect(() => {
    showData();
  }, [])

  return (

    <div className="row">

      <nav class="navbar navbar-dark bg-dark fixed-top">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Rick and Morty - Mini Wiki </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">¡Hoooola, {user.name}!</h5>
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <Logout></Logout>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Inicio</a>
                </li>
                
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Filtros de búsqueda
                  </a>
                  <ul class="dropdown-menu dropdown-menu-dark">
                    <li><a class="dropdown-item" href="#">Especie</a></li>
                    <li><a class="dropdown-item" href="#">Estado de vida</a></li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li><a class="dropdown-item" href="#">-</a></li>
                  </ul>
                </li>
              </ul>
              <form class="d-flex mt-3" role="search">
                <input value={search} onChange={searcher} class="form-control me-2" type="search" placeholder="Buscar un personaje" aria-label="Search" />
                
              </form>
              
            </div>
          </div>
        </div>
      </nav>

      

      {results.map((character) => (
        <div class="card">
          <div class="card-header text-white">
            <span className='fs-5 fw-bold'>{character.name}</span>
          </div>
          <img src={character.image} class="card-img-top" alt="..." />
          <div className="class-body">
            <ul>
              <li><span className='fs-6 fw-bold'>Estado: </span> {character.status}</li>
              <li><span className='fs-6 fw-bold'>Especie: </span> {character.species}</li>
              <li><span className='fs-6 fw-bold'>Genero: </span> {character.gender}</li>
              <li><span className='fs-6 fw-bold'>Origen: </span> {character.origin.name}</li>
              <li><span className='fs-6 fw-bold'>Locación: </span> {character.location.name}</li>
            </ul>
          </div>
        </div>
      ))}
    </div>

  )
}
export default Search