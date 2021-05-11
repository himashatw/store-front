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

                <Product
                    id={"1"}
                    title={"Green Cabin Nougat Crunch"}
                    price={1500}
                    category={"Cakes"}
                    image={"https://cdn.takas.lk/media/catalog/product/cache/1/image/512x512/9df78eab33525d08d6e5fb8d27136e95/n/u/nugat_crunch_cake_1.png"}
                />
                <Product
                    id={"1"}
                    title={"Green Cabin Nougat Crunch"}
                    price={1500}
                    category={"Cakes"}
                    image={"https://cdn.takas.lk/media/catalog/product/cache/1/image/512x512/9df78eab33525d08d6e5fb8d27136e95/n/u/nugat_crunch_cake_1.png"}
                />
                <Product
                    id={"1"}
                    title={"Green Cabin Nougat Crunch"}
                    price={1500}
                    category={"Cakes"}
                    image={"https://cdn.takas.lk/media/catalog/product/cache/1/image/512x512/9df78eab33525d08d6e5fb8d27136e95/n/u/nugat_crunch_cake_1.png"}
                />

                {/* {
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
                } */}
            </div>

            {/* row two */}
            <div className="home__row">

            </div>

        </div>

    )
}

export default HomePage;