export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg bg-primary navbar-dark shadow-sm py-3 py-lg-0 px-3 px-lg-5">
            <a href="index.html" className="navbar-brand d-flex d-lg-none">
                <h1 className="m-0 display-4 text-secondary"><span className="text-white">Farm</span>Fresh</h1>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav mx-auto py-0">
                    <a href="#" className="nav-item nav-link active">Home</a>
                    <a href="#" className="nav-item nav-link">Products</a>
                    <a href="#" className="nav-item nav-link">About</a>
                    <a href="#" className="nav-item nav-link">Contact</a>
                    <a href="#" className="nav-item nav-link">Login</a>
                </div>
            </div>
        </nav>
    )
}