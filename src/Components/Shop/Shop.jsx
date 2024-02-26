import { useState } from 'react';
import './Shop.css';
import { useEffect } from 'react';
import Product from '../Product/Product';
const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('../../../public/products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    const productCart = (product) =>{
        console.log(product);
    }

    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product => <Product key={product.id} productCart={productCart} product={product}></Product>)
                }
            </div>

            <div>
                <h2>Order Summary</h2>
            </div>
        </div>
    );
};

export default Shop;