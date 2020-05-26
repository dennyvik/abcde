import React from 'react';
import {Link} from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils';

import {ReactComponent as Logo} from '../../assets/crown.svg';

import './header.styles.scss';

const Header = ({currentUser})=>(
    <div className='header'>
        <Link to='/'>
            <Logo />
        </Link>
        <div className='menu'>
            <div className='options'>
                <Link className='option' to='/shop'>SHOP</Link>
                <Link className='option' to='/shop'>CONTACT</Link>
                
                {
                    currentUser ? 
                    <div className='option' onClick={()=>auth.signOut()}>SIGN OUT</div>
                    :
                    <Link className='option' to='/sign-in'>SIGN IN</Link>
                }
            </div>  
            <div className='welcome'>
                {
                    currentUser ? 
                    <span>welcome, {currentUser.displayName}</span>
                    : ''
                }
            </div>
        </div>
    </div>
)

export default Header;