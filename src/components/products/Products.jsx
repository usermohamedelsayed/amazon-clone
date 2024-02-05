import React from 'react'
import "./Products.scss"
import Card from '../card/Card'
import Lodding from '../lodding/Lodding'
import Error from '../error/Error'
const Products = ({ lodding, products, error }) => {
    if (lodding) return <div style={{ marginTop: '-250px' }}><Lodding /></div>
    if (error) return <div style={{ marginTop: '-250px' }}><Error /></div>
    return (
        <div className='Products'>
            <div className="container">
                {
                    products.map(product => (
                        <Card key={Math.random()} product={product} />
                    ))
                }
            </div>
        </div>
    )
}

export default Products