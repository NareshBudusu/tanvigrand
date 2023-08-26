 import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Navbar = () => {
    const  state = useSelector((state) => state.handleCart)
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light shadow-sm">
                <div className="container">
                    <Link className="navbar-brand fw-bolder" to="/">
                        Flipkart
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/products">Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/contact">Contact</Link>
                            </li>
                        </ul>
                    <Link to='/login' className='btn btn-outline-success me-2'>
                    <i className="fa-solid fa-right-to-bracket"></i>LogIn
                       </Link> 
                    <Link to='/register' className='btn btn-outline-success me-2'>
                    <i className="fa-solid fa-user"></i>Register
                    </Link> 
                    <Link to='/cart' className='btn btn-outline-success'>
                    <i className="fa-solid fa-cart-shopping"></i>Cart (
                        {state.length}
                    )
                    </Link> 

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;


