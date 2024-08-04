import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { getOne, remove } from "../../../api/products-api";
import { AuthContext, useAuthContext } from "../../../contexts/AuthContextProvider";
import CommentsCreate from "../../comments/CommentsCreate";
import Comments from "../../comments/Comments";


export default function ProductDetails() {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const { userId } = useAuthContext(AuthContext);

    useEffect(() => {

        (async () => {
            try {
                const result = await getOne(productId);
                setProduct(result);
            } catch (err) {
                setError(err.message);
            };
        })();

    }, []);

    const deleteProductHandler = async () => {
            try {
                await remove(productId);
                navigate("/");
            } catch (err) {
                setError(err.message);
            };
        };

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

            <Comments />

            {product._ownerId === userId &&
                <div className="mx-auto text-center">
                    <Link as={Link} to={`/products/${product._id}/edit`} className="btn btn-secondary py-md-3 px-md-5 me-3">Edit</Link>
                    <button className="btn btn-danger py-md-3 px-md-5 me-3" onClick={deleteProductHandler}>Delete</button>
                </div>
            }

            {userId &&
             product._ownerId !== userId &&
                <div className="mx-auto text-center">
                    <CommentsCreate />
                </div>
            
            }
        </div>
    );
}