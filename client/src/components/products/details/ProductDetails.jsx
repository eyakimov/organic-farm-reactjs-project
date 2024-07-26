import { Link, useParams } from "react-router-dom";
import { useFetch } from "../../../hooks/useFetch";

export default function ProductDetails() {
    const { productId } = useParams();
    const { data: product, isFetching } =
        useFetch(`http://localhost:3030/jsonstore/organic-farm/products/${productId}`, {});
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