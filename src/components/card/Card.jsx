import React from 'react'
import "./Card.scss"
// Icons
import { FaShoppingCart } from "react-icons/fa";
import { FaArrowAltCircleRight, FaHeart, FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router';
const Card = ({ product }) => {
    const location = useLocation()
    const navigate = useNavigate()
    const { inputVal: inputValSearch } = useSelector(state => state.resultSearchSlice)
    const { id, category, description, image, price, title } = product
    const dispatch = useDispatch()
    const handleAddToCart = () => {
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 1000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
        });
        Toast.fire({
            icon: "success",
            title: "Added Successfully"
        });
        dispatch(addToCart({ ...product, amount: 1 }))
    }
    const handleViewDetails = () => {
        navigate('/products/' + id)
    }
    const handleSelectResultSearch = (text) => {
        if (location.pathname === '/resultSearch') {
            let part1 = text.slice(0, text.indexOf(inputValSearch)),
                part2 = text.slice(part1.length + inputValSearch.length);
            return <>{part1}<span style={{ background: '#FFEB3B' }}>{`${inputValSearch}`}</span>{part2}</>
        } else {
            return text.slice(0, 18) + '..'
        }
    }
    return (
        <div className='Card'>
            <p className="cat">{category}</p>
            <div className="wrapper-1">
                <img src={image} alt={title.slice(0, 4) + ".."} />
                <ul>
                    <li onClick={handleAddToCart}>
                        <span>add to cart</span>
                        <i><FaShoppingCart /></i>
                    </li>
                    <li onClick={handleViewDetails}>
                        <span>view details</span>
                        <i><FaArrowAltCircleRight /></i>
                    </li>
                    <li>
                        <span>add to list</span>
                        <i><FaHeart /></i>
                    </li>
                </ul>
            </div>
            <div className="wrapper-2">
                <div className="title">
                    <h3>{handleSelectResultSearch(title)}</h3>
                    <span>${price}</span>
                </div>
                <p>{description.slice(0, 80) + '..'}</p>
                <div className="iconsStars">
                    <i><FaStar /></i>
                    <i><FaStar /></i>
                    <i><FaStar /></i>
                    <i><FaStar /></i>
                    <i><FaStar /></i>
                </div>
                <button onClick={handleAddToCart} className='btn'>add to cart</button>
            </div>
        </div>
    )
}

export default Card