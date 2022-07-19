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
import ResultPage from '../pages/Result/ResultPage'
import SearchPage from '../pages/Search/SearchPage'
import SignUpPage from '../pages/SignUp/SignUpPage'


export const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/feed" element={<FeedPage/>}/>
        <Route path="/cadastro" element={<SignUpPage/>}/>
        <Route path="/perfil" element={<ProfilePage/>}/>
        <Route path="/perfil/editar-perfil" element={<EditProfilePage/>}/>
        <Route path="/perfil/editar-endereco" element={<EditAdressPage/>}/>
        <Route path="/registrar-endereco" element={<RegisterAdressPage/>}/>
        <Route path="/resultado" element={<ResultPage/>}/>
        <Route path="/busca" element={<SearchPage/>}/>
        <Route path="/carrinho" element={<CartPage/>}/>
        <Route path="*" element={<ErrorPage/>}/>
    </Routes>
    </BrowserRouter>
  )
}
