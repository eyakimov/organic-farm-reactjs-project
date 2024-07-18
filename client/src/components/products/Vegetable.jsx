export default function Vegetable () {
    return (
        <div className="pb-5">
            <div className="product-item position-relative bg-white d-flex flex-column text-center">
                <img className="img-fluid mb-4" src="img/product-1.png" alt="" />
                <h6 className="mb-3">Organic Vegetable</h6>
                <h5 className="text-primary mb-0">$19.00</h5>
                <div className="btn-action d-flex justify-content-center">
                    <a className="btn bg-primary py-2 px-3" href=""><i className="bi bi-cart text-white"></i></a>
                    <a className="btn bg-secondary py-2 px-3" href=""><i className="bi bi-eye text-white"></i></a>
                </div>
            </div>
        </div>
    )
}