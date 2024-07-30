import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { useForm } from '../../../hooks/useForm';
import { create } from '../../../api/products-api';

const initialFormValues = {
    _id: '',
    name: '',
    category: '',
    img: '',
    description: '',
    price: '',
    _createdOn: Date.now(),
};

export default function ProductCreate() {

    const navigate = useNavigate();
    const [error, setError] = useState('');

    const formSubmitHanlder = async (values) => {
        try {
            const { _id: productId } = await create(values);
            navigate(`/products/${productId}`);
        } catch (err) {
            setError(err.message);
        };
    };

    const { values, changeHandler, submitHandler } = useForm(initialFormValues, formSubmitHanlder);

    return (
        <div className="container-fluid py-5">
            <div className="container">
                <div className="mx-auto text-center mb-5" style={{ maxWidth: 500 + 'px' }}>
                    <h6 className="text-primary text-uppercase">Create Product</h6>
                    <h1 className="display-5">Please Feel To Create Product</h1>
                </div>
                <div className="mx-auto" style={{ maxWidth: 500 + 'px' }}>
                    <div className="col">
                        <div className="bg-primary h-100 p-5">
                            <form onSubmit={submitHandler} method="POST">
                                <div className="row g-3">
                                    <div className="col-12">
                                        <label htmlFor="name" className="col-form-label-sm text-white">
                                            Product Name:
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            className="form-control bg-light border-0 px-4"
                                            value={values.name}
                                            onChange={changeHandler}
                                        />
                                    </div>

                                    <div className="col-12">
                                        <input
                                            type="radio"
                                            id="fruits"
                                            name="category"
                                            value="Fruits"
                                            checked={values.category === 'Fruits'}
                                            onChange={changeHandler}
                                        />
                                        <label htmlFor="fruits" className="col-form-label-sm text-white px-2">Fruits</label>
                                        <input
                                            type="radio"
                                            id="vegetables"
                                            name="category"
                                            value="Vegetables"
                                            checked={values.category === 'Vegetables'}
                                            onChange={changeHandler}
                                        />
                                        <label htmlFor="vegetables" className="col-form-label-sm text-white px-2">Vegetables</label>
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="img" className="col-form-label-sm text-white">
                                            Image:
                                        </label>
                                        <input
                                            type="text"
                                            id="img"
                                            name="img"
                                            placeholder="https://(image link)..."
                                            className="form-control bg-light border-0 px-4"
                                            value={values.img}
                                            onChange={changeHandler}
                                        />
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="description" className="col-form-label-sm text-white">
                                            Description:
                                        </label>
                                        <textarea
                                            type="text"
                                            id="description"
                                            name="description"
                                            placeholder="Intoduce your product here..."
                                            className="form-control bg-light border-0 px-4"
                                            value={values.description}
                                            onChange={changeHandler}
                                        >
                                        </textarea>
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="price" className="col-form-label-sm text-white">
                                            Price:
                                        </label>
                                        <input
                                            type="number"
                                            min="0"
                                            step="0.01"
                                            id="price"
                                            name="price"
                                            className="form-control bg-light border-0 px-4"
                                            placeholder="0.00"
                                            value={values.price}
                                            onChange={changeHandler}
                                        />
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