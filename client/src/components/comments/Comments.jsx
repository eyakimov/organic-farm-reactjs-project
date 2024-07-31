import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getAll } from "../../api/comments-api";

export default function Comments() {
    const { productId } = useParams();
    const [comments, setComments] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {

        (async () => {
            try {
                const result = await getAll(productId);
                setComments(result);
            } catch (err) {
                setError(err.message);
            };
        })();


    }, []);

    return (
        <div className="container">
            <div className="mx-auto text-center mb-5" style={{ maxWidth: 500 + 'px' }}>
                <h6 className="text-primary text-uppercase">Comments:</h6>
            </div>
            {!comments
                ? <p>No comments.</p>
                : <ul className="mx-auto px-5">
                    {comments.map(comment =>
                        <li className="p-2" key={comment._id}>
                            {comment.comment}
                        </li>
                    )}
                </ul>

            }
        </div>
    );
}