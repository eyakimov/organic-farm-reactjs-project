import { useParams } from "react-router-dom";
import { useFetch } from "../../../hooks/useFetch";

export default function ProductDetails() {
    const { productId } = useParams();
    const { data: product, isFetching } = 
        useFetch(`http://localhost:3030/jsonstore/organic-farm/products/${productId}`, {});
    return (
        <div className="mx-auto text-center mb-5" style={{ maxWidth: 500 + 'px' }}>
            <h1>{product.name}</h1>
            <img variant="top" src={product.img} />
            <p>{product.description}</p>
        </div>
    );
}