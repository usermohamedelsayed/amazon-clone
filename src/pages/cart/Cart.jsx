import React from 'react'
import "./Cart.scss"
import { useDispatch, useSelector } from 'react-redux'
import { FaCheck } from 'react-icons/fa'
import { clearCart, deccreaceAmount, increaceAmount, removeToCart } from '../../redux/cartSlice'
import Swal from 'sweetalert2'
import { Player } from '@lottiefiles/react-lottie-player'
import emptyCart from "../../animation/emptycontainer.json"
const Cart = () => {
    const products = useSelector(state => state.cartSlice.listDataCart)
    const dispatch = useDispatch()
    const formatePrice = (price) => {
        return Number.isInteger(price) ? price : price.toFixed(2)
    }
    const handleTotalProducts = () => products.reduce((prev, next) => prev + (next.price * next.amount), 0)
    const handleRemovePrduct = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(removeToCart(id))
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });
    }
    const handleClearCar = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, clear cart!"
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(clearCart())
                Swal.fire({
                    title: "cleared!",
                    text: "Your cart has been cleared.",
                    icon: "success"
                });
            }
        });
    }
    return (
        <div className='Cart'>
            <div className="container">
                <div className="wrapper-1">
                    <header>
                        <h2>shopping cart</h2>
                        <h3>subtotal</h3>
                    </header>
                    <ul className='listCart'>
                        {
                            products.length ? products.map(item => (
                                <li key={item.id} className='itemCart'>
                                    <div>
                                        <img src={item.image} alt={item.title} />
                                        <div className="details">
                                            <p className="title">{item.title}</p>
                                            <span className="desc">{item.description}</span>
                                            <p className="price">unit price: <span>${item.price}</span></p>
                                            <div className="qty">
                                                <span>qut:</span>
                                                <span onClick={() => dispatch(deccreaceAmount(item.id))} className="decreace">-</span>
                                                <span className='amount'>{item.amount}</span>
                                                <span onClick={() => dispatch(increaceAmount(item.id))} className="increace">+</span>
                                                <i></i>
                                            </div>
                                            <button className='btnError' onClick={() => handleRemovePrduct(item.id)}>delet item</button>
                                        </div>
                                    </div>
                                    <p className="totalPrive">${formatePrice(+item.price * +item.amount)}</p>
                                </li>
                            )) : <Player style={{ width: "min(100%, 400px)" }} src={emptyCart} autoplay loop />
                        }
                    </ul>
                </div>
                <div className="wrapper-2">
                    <div className='marked'>
                        <i><FaCheck /></i>
                        <span>your order qualifies for FREE shipping choose this option at checkout see details...</span>
                    </div>
                    <div className="totla">
                        <span>total: </span>
                        <span className="price">${formatePrice(handleTotalProducts())}</span>
                    </div>
                    <button className="btn">proceed to buy</button>
                    {
                        products.length > 2 ? <button onClick={handleClearCar} className="btnError">clear cart</button> : ""
                    }
                </div>
            </div>
        </div>
    )
}

export default Cart