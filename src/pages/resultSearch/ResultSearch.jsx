import React from 'react'
import "./ResultSearch.scss"
import { useSelector } from 'react-redux'
import { Error, Lodding, Products } from '../../components'
const ResultSearch = () => {
    const productsSearch = useSelector(state => state.resultSearchSlice)
    const statusProducts = useSelector(state => state.produtsSlice)
    if (statusProducts.lodding) return <div style={{ marginTop: '140px' }}><Lodding /></div>
    if (statusProducts.error) return <div style={{ marginTop: '150px' }}><Error /></div>
    return (
        <div className='ResultSearch'>
            <div className="container">
                <h2 className='title'>Results for: <span>{productsSearch.inputVal}</span></h2>
                <div className="products">
                    {
                        productsSearch.products.length ? (
                            <Products
                                lodding={false}
                                products={productsSearch.products}
                                error={false}
                            />
                        ) : <span className='failed'>no products match your search</span>
                    }
                </div>
            </div>
        </div>
    )
}

export default ResultSearch