import { Search, ShoppingCart } from '@mui/icons-material'
import { signOut } from 'firebase/auth';
import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from './firebase';
import './Header.css'
import { useStateValue } from "./StateProvider";
function Header() {

    const [{ basket, user }, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            signOut(auth)
        }
    }


    return (
        <div className='header'>

            <Link to="/">
                <img className='header__logo' src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='' />
            </Link>


            <div className='header__search'>

                <input className='header__searchInput' type='text' />


                <Search className='header__searchIcon' />



            </div>

            <div className='header__nav'>
                <Link to={!user && '/login'}>

                    <div onClick={handleAuthentication} className='header__option'>

                        <span className='header__optionLineOne'>Hello {!user ? 'Guest' : user?.email.substring(0, user?.email.indexOf('@'))}</span>
                        <span className='header__optionLineTwo'>{user ? 'Sign Out' : 'Sign In'}</span>

                    </div>
                </Link>

                <Link to='/orders'>
                    <div className='header__option'>
                        <span className='header__optionLineOne'>Returns</span>
                        <span className='header__optionLineTwo'>& Orders</span>
                    </div>
                </Link>
                <div className='header__option'>
                    <span className='header__optionLineOne'>Your</span>
                    <span className='header__optionLineTwo'>Prime</span>
                </div>

                <Link to="/checkout">

                    <div className="header__optionBasket">
                        <ShoppingCart />
                        <span className="header__optionLineTwo header__basketCount">
                            {basket?.length}
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header