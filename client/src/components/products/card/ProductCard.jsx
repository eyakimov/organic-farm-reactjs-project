import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { AuthContext, useAuthContext } from '../../../contexts/AuthContextProvider';

function ProductCard({
    _id,
    name,
    price,
    img,
    _ownerId,}) {
    const { userId } = useAuthContext(AuthContext);

    return (
        <Card style={{ width: '22rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>Price: ${price}</Card.Text>
                <Button as={Link} to={`/products/${_id}`} variant="primary mb-2">Details</Button>
                {_ownerId === userId &&
                    <div className="mx-auto text-center">
                        <Button as={Link} to={`/products/${_id}/edit`} variant="secondary mx-2">Edit</Button>
                        <Button as={Link} to={`/products/${_id}`} variant="danger mx-2">Delete</Button>
                    </div>
                }
            </Card.Body>
        </Card>
    );
}

export default ProductCard;
