import React, { useEffect } from 'react'
import "./FilterProduct.scss"
import { useDispatch, useSelector } from 'react-redux'
import { fetchFilterPorducts } from '../../redux/filterProductsSlice'
import { useParams } from 'react-router'
import { Error, Lodding, Products } from '../../components'
const FilterProduct = () => {
    const product = useSelector(state => state.filterProductsSlice);
    const dispatch = useDispatch()
    const { category } = useParams()
    useEffect(() => {
        dispatch(fetchFilterPorducts('products/category/' + category))
    }, [category, dispatch]);

    if (product.lodding) return <div style={{ marginTop: '120px' }}><Lodding /></div>
    if (product.error) return <div style={{ marginTop: '140px' }}><Error /></div>
    return (
        <div className='FilterProduct'>
            <div className="container">
                <p className="title">{category}</p>
                <div className="desc">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae voluptates maxime voluptate, <br /> incidunt aliquam velit nam aliquid minima rem quae.
                </div>
            </div>
            <Products lodding={false} products={product.products} error={false} />
        </div>
    )
}

export default FilterProduct