import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function ProductCard({
    _id,
    name,
    price,
    img,
}) {
    return (
        <Card style={{ width: '22rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>Price: ${price}</Card.Text>
                <Button as={Link} to={`/products/${_id}`} variant="primary">Details</Button>
            </Card.Body>
        </Card>
    );
}

export default ProductCard;
