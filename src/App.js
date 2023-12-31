import './App.css';
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navigate, useNavigate } from 'react-router-dom';
import { MOVIE_PRICE } from './utilities/Constants';
import Users from './components/Users/Users';
import Navbar from './components/Navbar/Navbar';
import Catalog from './components/Catalog/Catalog';
import DetailedMovie from './components/DetailedMovie';
import Modal from './components/Modal/Modal'
import ModalTemplate from './components/Modal/ModalTemplate'

function App() {
  const navigate = useNavigate();

  const [usersData, setUsersData] = useState(require('./utilities/users.json'))
  const [loggedUser, setloggedUser] = useState(false)

  const [modalMessage, setModalMessage] = useState(false)

  const updateModalMessage = (message) =>{
    setModalMessage(message)
  }

  const changeUser = function(userName){
    setloggedUser(userName)
  }

  const rentUnrentMovie = function (id, posterPath, title) {
    let userData = { ...usersData[loggedUser] }
    let rentedMovieIndex = userData.rented.findIndex((m) => m.id == id)
    if(rentedMovieIndex == -1){
      if(userData.budget < MOVIE_PRICE) return 

      userData.rented.push({ id: id, title: title, poster_path: posterPath, rented: true })
      userData.budget -= MOVIE_PRICE

      updateModalMessage(<ModalTemplate movieTitle={title} />)
      
    } else {
      userData.rented.splice(rentedMovieIndex, 1)
    }
    
    setUsersData({ ...usersData , [loggedUser]:userData})
  }

  useEffect(() => {
    if(loggedUser !== false){
      navigate("/catalog")
    } else {
      navigate("/")
    }
  }, [loggedUser])

  return (
    <div className="App">
        {modalMessage !== false && <Modal message={modalMessage} updateModalMessage={updateModalMessage} />}
      
        <Navbar loggedUser={loggedUser} />

        <Routes>
          <Route path="/" element={<Users users={Object.keys(usersData)} loggedUser={loggedUser} changeUser={changeUser} />} />
          <Route path="/catalog" element={loggedUser ? <Catalog userData={usersData[loggedUser]} rentUnrentMovie={rentUnrentMovie} /> : <Navigate replace to={"/"} />} />
          <Route path="/movies/:id" element={<DetailedMovie />} />

          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
        
    </div>
  );
}

export default App;
