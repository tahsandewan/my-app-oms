import React from 'react';
import ProductList from './ProductList';
import Navbar from './Nav';

function Home(props) {
    return (
        <div>
            <Navbar/>
            <ProductList/>
        </div>
    );
}

export default Home;