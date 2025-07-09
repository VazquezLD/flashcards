import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from '../components/Header'
import { Home } from "../pages/Home/Home";
import {Flashcards} from '../pages/Flashcards/Flashcards'
import { Flashcard } from "../pages/Flashcard/Flashcard";
import { Profile } from "../pages/Profile/Profile";

const Rutas = () => {
    return(
        <BrowserRouter>
            <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="flashcards" element={<Flashcards/>}/>
                    <Route path="flashcard" element={<Flashcard/>}/>
                    <Route path="profile" element={<Profile/>}/>
                </Routes>
        </BrowserRouter>
    )
}

export default Rutas