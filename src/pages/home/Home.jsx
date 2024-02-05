import React, { useEffect } from 'react'
import "./Home.scss";
import { Products, Slider } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../../redux/produtsSlice';
const Home = () => {
    const products = useSelector(state => state.produtsSlice)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProduct())
    }, [dispatch])

    return (
        <div className='Home'>
            <Slider />
            <div
                style={{ marginTop: "-260px" }}
            >
                <Products
                    lodding={products.lodding}
                    products={products.productsData}
                    error={products.error}
                />
            </div>
        </div>
    )
}

export default Home