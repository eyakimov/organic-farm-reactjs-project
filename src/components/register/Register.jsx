export default function Register(){
    return (
        <div className="container-fluid py-5">
            <div className="container">
                <div className="mx-auto text-center mb-5" style={{maxWidth: 500+'px'}}>
                    <h6 className="text-primary text-uppercase">Register</h6>
                    <h1 className="display-5">Please Feel To Register</h1>
                </div>
                <div className="mx-auto" style={{maxWidth: 500+'px'}}>
                    <div className="col">
                        <div className="bg-primary h-100 p-5">
                            <form>
                                <div className="row g-3">
                                    <div className="col-12">
                                        <input type="text" className="form-control bg-light border-0 px-4" placeholder="Username" style={{height: 55+'px'}} />
                                    </div>
                                    <div className="col-12">
                                        <input type="password" className="form-control bg-light border-0 px-4" placeholder="Password" style={{height: 55+'px'}} />
                                    </div>
                                    <div className="col-12">
                                        <input type="password" className="form-control bg-light border-0 px-4" placeholder="Repeat Password" style={{height: 55+'px'}} />
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-secondary w-100 py-3" type="submit">Register</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}