import React from 'react'
import {Link} from 'react-router-dom'
import cartIcon from './shopping-cart-solid.svg'
import { connect } from 'react-redux'
import './app-header.scss'

const AppHeader = ({totalPrice}) => {
    return (
        <header className="header">
            <Link className="header__link" to='/'>Menu</Link>
            <Link className="header__link" to='/cart'>
                <img className="header__cart" src={cartIcon} alt="cart"></img>
                Total: {totalPrice} $
            </Link>
        </header>
    )
};

const mapStateToProps = ({totalPrice}) => {
    return {
        totalPrice
    }
}

export default connect(mapStateToProps)(AppHeader)