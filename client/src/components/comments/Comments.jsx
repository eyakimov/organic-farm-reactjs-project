import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getAll } from "../../api/comments-api";
import { useNotificationContext } from "../../contexts/NotificationContextProvider";

export default function Comments() {
    const { productId } = useParams();
    const [comments, setComments] = useState([]);
    const [error, setError] = useState('');
    const { addNotification } = useNotificationContext();

    useEffect(() => {

        (async () => {
            try {
                const result = await getAll(productId);
                setComments(result);
            } catch (err) {
                setError(err.message);
                addNotification(error);
            };
        })();


    }, [comments]);

    return (
        <div className="container mt-5">
            <div className="mx-auto text-center" style={{ maxWidth: 500 + 'px' }}>
                <h6 className="text-primary text-uppercase">Comments:</h6>
            </div>
            {comments.length === 0
                ? <p>No comments.</p>
                : <ul className="list-group">
                    {comments.map(comment =>
                        <li className="list-group-item text-start p-2" key={comment._id}>
                            <span className="text-decoration-underline">{comment.author.email}</span>:
                            <span className="fst-italic"> {comment.comment} </span>
                        </li>
                    )}
                </ul>

            }
        </div>
    );
}