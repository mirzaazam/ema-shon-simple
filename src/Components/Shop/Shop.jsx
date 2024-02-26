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
    
    const [cart, setCart] = useState([]);
    console.log(cart);

     const productCart = (product) =>{
        let newCart = [...cart, product];
        setCart(newCart);
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
                <p>Selected items: {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;