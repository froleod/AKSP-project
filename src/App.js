import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Header from "./components/Header";
import AgreementPage from './components/AgreementPage';

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<ProductList />} />
                <Route path="/products/:id" element={<ProductDetail />} />
                <Route path="/agreement" element={<AgreementPage />} />
            </Routes>
        </div>
    );
}

export default App;