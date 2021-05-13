import React, { useState, useEffect } from 'react'
import './HomePage.css'
import '../Product/Product'
import Product from '../Product/Product'
import axios from '../../services/axios'

const HomePage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get("item/all");
            setProducts(request.data);
            return request;
        }
        fetchData();
    }, [])

    const displayLoading = !(products.length > 0);
    
    return (
        <div className="home">
            <img className="home__image" src="https://image.freepik.com/free-vector/online-shopping-concept-digital-marketing-website-mobile-application_43880-331.jpg" alt="imageBanner" />

            <h1>Category One</h1>
            {/* row one */}
            <div className="home__row">
                {displayLoading && <h3>Loading data...</h3>}

                {
                    products.map((product) => (
                        <Product
                            id={product.itemId}
                            title={product.itemName}
                            price={product.itemPrice}
                            category={product.itemCatagory}
                            image={product.url}
                            key={product.itemId}
                        />
                    ))
                }

            </div>

            <h1>Category Two</h1>
            {/* row two */}
            <div className="home__row">
                {displayLoading && <h3>Loading data...</h3>}

                {
                    products.map((product) => (
                        <Product
                            id={product.itemId}
                            title={product.itemName}
                            price={product.itemPrice}
                            category={product.itemCatagory}
                            image={product.url}
                            key={product.itemId}
                        />
                    ))
                }
            </div>

        </div>

    )
}

export default HomePage;