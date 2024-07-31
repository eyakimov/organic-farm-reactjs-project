import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { useForm } from '../../hooks/useForm';
import { create } from '../../api/comments-api';

export default function CommentsCreate() {
    const { productId } = useParams();

    const initialFormValues = {
        _id: '',
        _ownerId: '',
        comment: '',
        productId: productId,
    };
    
    const [error, setError] = useState('');

    const formSubmitHanlder = async (values) => {
        try {
            await create(values);
        } catch (err) {
            setError(err.message);
        };
    };

    const { values, changeHandler, submitHandler } = useForm(initialFormValues, formSubmitHanlder);

    return (
        <div className="container-fluid py-5">
            <div className="container">
                <div className="mx-auto text-center mb-5" style={{ maxWidth: 500 + 'px' }}>
                    <h6 className="text-primary">Create Comment</h6>
                </div>
                <div className="mx-auto" style={{ maxWidth: 500 + 'px' }}>
                    <div className="col">
                        <div className="bg-primary h-100 p-5">
                            <form onSubmit={submitHandler} method="POST">
                                <div className="row g-3">
                                    <div className="col-12">
                                        <label htmlFor="description" className="col-form-label-sm text-white">
                                            Comment:
                                        </label>
                                        <textarea
                                            type="text"
                                            id="comment"
                                            name="comment"
                                            placeholder="Your comment here..."
                                            className="form-control bg-light border-0 px-4"
                                            value={values.comment}
                                            onChange={changeHandler}
                                        >
                                        </textarea>
                                    </div>
                                    <button className="btn btn-secondary w-100 py-3" type="submit">Create</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
}