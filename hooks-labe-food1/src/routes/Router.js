import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CartPage from '../pages/Cart/CartPage'
import ErrorPage from '../pages/Error/ErrorPage'
import Home from '../pages/Home/Home'
import LoginPage from '../pages/Login/LoginPage'
import FeedPage from '../pages/Feed/FeedPage'
import EditAdressPage from '../pages/Profile/EditAdressPage'
import EditProfilePage from '../pages/Profile/EditProfilePage'
import ProfilePage from '../pages/Profile/ProfilePage'
import RegisterAdressPage from '../pages/RegisterAdress/RegisterAdressPage'
import RestaurantPage from '../pages/Restaurant/RestaurantPage'
import SearchPage from '../pages/Search/SearchPage'
import SignUpPage from '../pages/SignUp/SignUpPage'


export const Router = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> {/* OK */}
        <Route path="/login" element={<LoginPage />} /> {/* OK */}
        <Route path="/feed" element={<FeedPage />} /> {/* OK */}
        <Route path="/cadastro" element={<SignUpPage />} /> {/* Adriana */}
        <Route path="/perfil" element={<ProfilePage />} /> {/* Adriana */}
        <Route path="/perfil/editar-perfil" element={<EditProfilePage />} /> {/*Giovana */}
        <Route path="/perfil/editar-endereco" element={<EditAdressPage />} /> {/*Giovana */}
        <Route path="/registrar-endereco" element={<RegisterAdressPage />} /> {/*Giovana */}
        <Route path="/restaurant/:restaurantId" element={<RestaurantPage />} /> {/* Ana Lívia */}
        <Route path="/busca" element={<SearchPage />} /> {/* Giulia*/}
        <Route path="/carrinho" element={<CartPage />} /> {/* Prox semana */}
        <Route path="*" element={<ErrorPage />} /> 
      </Routes>
    </BrowserRouter>
  )
}
