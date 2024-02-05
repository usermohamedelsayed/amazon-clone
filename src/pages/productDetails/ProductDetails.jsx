import React, { useEffect } from 'react'
import "./ProductDetails.scss"
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../redux/cartSlice'
import Swal from 'sweetalert2'
import { useNavigate, useParams } from 'react-router'
import { fetchProductDetails } from '../../redux/productDetailsSlice'
import { Error, Lodding } from '../../components'
const ProductDetails = () => {
    const { idProduct } = useParams()
    const nvaigate = useNavigate()
    const dispatch = useDispatch()
    const product = useSelector(state => state.productDetailsSlice.product);
    const lodding = useSelector(state => state.productDetailsSlice.lodding);
    const error = useSelector(state => state.productDetailsSlice.error);
    const formatePrice = (price) => Number.isInteger(price) ? price : price.toFixed(2)
    const handleAddProductToCart = () => {
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
    useEffect(() => {
        dispatch(fetchProductDetails('products/' + idProduct))
    }, [dispatch, idProduct])
    if (lodding) return <div style={{ marginTop: '120px' }}><Lodding /></div>
    if (error) return <div style={{ marginTop: '140px' }}><Error /></div>
    return (
        <div className='ProductDetails'>
            <div className="container">
                <img src={product.image} alt={product.title} />
                <div className='info'>
                    <span className='cat'>{product.category}</span>
                    <div className="details">
                        <p className="title">{product.title}</p>
                        <span className='desc'>{product.description}</span>
                        <p className="price">${formatePrice(+product.price)}</p>
                    </div>
                    <div className="btns">
                        <button onClick={handleAddProductToCart} className='btn'>add to cart</button>
                        <button onClick={() => nvaigate('/')} className='btnInfo'>back to home</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails