import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { AuthContext, useAuthContext } from '../../../contexts/AuthContextProvider';
import { remove } from '../../../api/products-api';
import { useNotificationContext } from '../../../contexts/NotificationContextProvider';

function ProductCard({
    _id,
    name,
    price,
    img,
    _ownerId, }) {
    const { userId } = useAuthContext(AuthContext);
    const { addNotification } = useNotificationContext();

    const [error, setError] = useState('');
    const navigate = useNavigate();
    const deleteProductHandler = async () => {
        const isConfirmed = confirm(`Are you sure you want to delete ${product.name} product?`);
        if (!isConfirmed) {
            return;
        }
        try {
            await remove(_id);
            navigate("/");
        } catch (err) {
            setError(err.message);
            addNotification(error);
        };
    };

    return (
        <Card style={{ width: '22rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>Price: ${price}</Card.Text>
                <Button as={Link} to={`/products/${_id}`} variant="primary mb-2">Details</Button>
                {_ownerId === userId &&
                    <div className="mx-auto text-center">
                        <Button as={Link} to={`/products/${_id}/edit`} variant="btn btn-secondary py-md-3 px-md-5 me-3">Edit</Button>
                        <button className="btn btn-danger py-md-3 px-md-5 me-3" onClick={deleteProductHandler}>Delete</button>
                    </div>
                }
            </Card.Body>
        </Card>
    );
}

export default ProductCard;
