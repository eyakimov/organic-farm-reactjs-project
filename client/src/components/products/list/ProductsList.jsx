import { useEffect, useState } from 'react';
import Spinner from 'react-bootstrap/esm/Spinner';

import ProductCard from '../card/ProductCard';
import styles from '../../../App.module.css';
import {getAll} from '../../../api/products-api';
import { useNotificationContext } from '../../../contexts/NotificationContextProvider';

export default function ProductsList() {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState('');
    const { addNotification } = useNotificationContext();

    useEffect(() => {

        (async () => {
            try {
                const result = await getAll();
                setProducts(result);
            } catch (err) {
                setError(err.message);
                addNotification(error);
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