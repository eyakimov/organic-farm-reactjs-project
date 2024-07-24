import ProductsList from "./list/ProductsList";


export default function Products() {
    return (
        <div className="container-fluid py-5">
            <div className="container">
                <div className="mx-auto text-center mb-5" style={{ maxWidth: 500 + 'px' }}>
                    <h6 className="text-primary text-uppercase">Products</h6>
                    <h1 className="display-5">Our Fresh & Organic Products</h1>
                </div>
                <div className="mx-auto px-5">
                    <ProductsList />
                </div>
            </div>
        </div>
    );
}