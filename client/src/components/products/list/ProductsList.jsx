import { useFetch } from '../../../hooks/useFetch';

import ProductCard from '../card/ProductCard';
import styles from '../../../App.module.css';

import Spinner from 'react-bootstrap/esm/Spinner';

export default function ProductsList() {
    const {
        data: products,
        isFetching,
        refetch,
    } = useFetch('http://localhost:3030/jsonstore/organic-farm/products/', {});

    return (
        <>
            {
                isFetching
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
        </>
    );
}