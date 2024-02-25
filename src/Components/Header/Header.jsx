import logo from '../../assets/images/Logo.svg';
import './Header.css';
const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="Don't find the image!" />
            <nav>
                <a href="#">Order</a>
                <a href="#">Order Review</a>
                <a href="#">Manage Inventory</a>
                <a href="#">Login</a>
            </nav>
        </div>
    );
};

export default Header;