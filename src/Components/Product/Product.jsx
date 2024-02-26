
import './Product.css';
const Product = (props) => {
    const { price, img, name, ratings, seller } = props.product;
    const productCart = props.productCart;
  
    return (
        <div className='product-card'>
            <div className='card-img'>
                <img src={img} alt="" />
            </div>
            <div className='product-info'>
                <h5>{name}</h5>
                <h5>Price: {price} </h5>
                <p className='brand'>Manufacture: {seller}</p>
                <p>Rating: {ratings} stars</p>
            </div>
            <button onClick={() => productCart(props.product)} className='btn'>Add to Cart</button>
        </div>
    );
};

export default Product;