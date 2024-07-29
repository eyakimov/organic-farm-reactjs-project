import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import * as productAPI from '../../../api/products-api';

export default function ProductDetails() {
    const { productId } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {

        productAPI.getOne(productId)
            .then(result => {
                if (result.message) {
                    throw ('Unsucssessful fetch');
                } else {
                    setProduct(result);
                }
            })
            .catch(err => {
                console.log(err);
            });

    }, []);
    return (
        <div className="mx-auto text-center mb-5" style={{ maxWidth: 500 + 'px' }}>
            <h1>
                {product.name}
            </h1>
            <img
                variant="top"
                src={product.img}
                style={{ maxWidth: 500 + 'px' }}
            />
            <p className="mb-2 bg-primary text-white">
                {product.description}
            </p>
            <p className="mb-2 bg-primary text-white">
                {product.price}
            </p>

            <Link to={`/products/${product._id}/edit`} className="btn btn-primary py-md-3 px-md-5 me-3">Edit</Link>
        </div>
    );
}