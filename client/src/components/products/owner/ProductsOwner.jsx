import { useEffect, useState } from 'react';
import Spinner from 'react-bootstrap/esm/Spinner';

import ProductCard from '../card/ProductCard';
import styles from '../../../App.module.css';
import { getMy } from '../../../api/products-api';
import { AuthContext, useAuthContext } from '../../../contexts/AuthContextProvider';

export default function ProductsOwner() {
    const [products, setProducts] = useState([]);
    const { userId } = useAuthContext(AuthContext);
    const [error, setError] = useState('');

    useEffect(() => {

        (async () => {
            try {
                const result = await getMy(userId);
                setProducts(result);
            } catch (err) {
                setError(err.message);
            };
        })();

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