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
    return (
        <div className="home">
            <img className="home__image" src="https://image.freepik.com/free-vector/online-shopping-concept-digital-marketing-website-mobile-application_43880-331.jpg" alt="imageBanner" />

            {/* row one */}
            <div className="home__row">

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

            {/* row two */}
            <div className="home__row">

            </div>

        </div>

    )
}

export default HomePage;