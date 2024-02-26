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

    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product => <Product key={product.id} product={product}></Product>)
                }
            </div>

            <div>
                <h2>Array length: {products.length} </h2>
            </div>
        </div>
    );
};

export default Shop;