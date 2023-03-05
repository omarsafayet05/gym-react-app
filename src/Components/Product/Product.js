import React from 'react';
import './Product.css'

const Product = (props) => {

    const { name, img, details, timeRequired, forAge, id } = props.product;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='info'>
                <h4 className='product-name'>{name}</h4>
                <p className='product-details'>{details.split(" ").slice(0, 10).join(" ")}</p>
                <p className='for-age'><span>For age:</span>{forAge}</p>
                <p className='time-required'><span>Time required:</span>{timeRequired}s</p>
            </div>
            <button onClick={() => props.handleAddToList(id)} className='btn-cart'>Add to List</button>

        </div >
    );
};

export default Product;