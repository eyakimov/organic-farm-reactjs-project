import { useEffect, useState } from 'react';
import Spinner from 'react-bootstrap/esm/Spinner';

import ProductCard from '../card/ProductCard';
import styles from '../../../App.module.css';
import * as productAPI from '../../../api/products-api';

export default function ProductsList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {

        productAPI.getAll()
            .then(result => {
                if (result.message) {
                    throw ('Unsucssessful fetch');
                } else {
                    setProducts(result);
                }
            })
            .catch(err => {
                console.log(err);
            });

    }, []);

    return (
        <div className="mx-auto px-2">
            {
                products.length === 0
                    ? <Spinner />
                    : (
                        <div className={styles['products-list']}>
                            {Object.values(products).map(product =>
                                <div className="p-2" key={product._id}>
                                    <ProductCard {...product} />
                                </div>
                            )}
                        </div>
                    )
            }
        </div>
    );
}