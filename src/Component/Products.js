import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { json } from '../../node_modules/react-router-dom/dist/index';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        getProducts();
    }, []);
    const getProducts = async () => {
        let result = await fetch("http://localhost:5020/products", {
            headers: {
                authorization: "bearer " + JSON.parse(localStorage.getItem("auth"))
            },
            method:'get'
        });
        result = await result.json();
        setProducts(result);
    }
    const DeleteProduct = async (_id) => {
        console.warn(_id);
        let result = await fetch(`http://localhost:5020/product/${_id}`, {
            headers: {
                authorization: "bearer " + JSON.parse(localStorage.getItem("auth"))
            },
            method: 'delete'
        });
        result = await result.json();
        console.warn(result);
        /*let prods = await fetch("http://localhost:5020/products");
        prods = await prods.json();
        setProducts(prods);*/
        getProducts();
    }
    const searchHandle = async (event) => {
        console.warn(event.target.value);
        if (event.target.value.length === 0) {
            getProducts();
        }
        let filteredProds = await fetch(`http://localhost:5020/search/${event.target.value}`, {
            headers: {
                authorization: "bearer " + JSON.parse(localStorage.getItem("auth"))
            },
            method : 'get'
        });
        filteredProds = await filteredProds.json();
        console.warn(filteredProds);
        setProducts(filteredProds);
    }
    return (
        <>
            <section style={{ backgroundColor: "#eee" }}>
                <div className="container py-5">
                    <h1>Product List</h1>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">
                                @
                            </span>
                        </div>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search any text"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            onChange={searchHandle }
                        />
                    </div>
            {
                        products.length > 0 ? products.map((item, index) =>
                            <div className="row justify-content-center mb-3">
                                <div className="col-md-12 col-xl-10">
                                    <div className="card shadow-0 border rounded-3">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                                                    <div className="bg-image hover-zoom ripple rounded ripple-surface">
                                                        <img
                                                            src="https://www.notebookcheck.net/uploads/tx_nbc2/NokiaC5Endi.JPG"
                                                            className="w-100"
                                                        />
                                                        <a href="#!">
                                                            <div className="hover-overlay">
                                                                <div
                                                                    className="mask"
                                                                    style={{ backgroundColor: "rgba(253, 253, 253, 0.15)" }}
                                                                />
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-6 col-xl-6">
                                                    <h5>{item.company} {item.model}</h5>
                                                    <div className="d-flex flex-row">
                                                        <div className="text-danger mb-1 me-2">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </div>
                                                        <span>310</span>
                                                    </div>
                                                    <div className="mt-1 mb-0 text-muted small">
                                                        <span>100% cotton</span>
                                                        <span className="text-primary"> • </span>
                                                        <span>Light weight</span>
                                                        <span className="text-primary"> • </span>
                                                        <span>
                                                            Best finish
                                                            <br />
                                                        </span>
                                                    </div>
                                                    <div className="mb-2 text-muted small">
                                                        <span>Unique design</span>
                                                        <span className="text-primary"> • </span>
                                                        <span>For men</span>
                                                        <span className="text-primary"> • </span>
                                                        <span>
                                                            Casual
                                                            <br />
                                                        </span>
                                                    </div>
                                                    <p className="text-truncate mb-4 mb-md-0">
                                                        There are many variations of passages of Lorem Ipsum
                                                        available, but the majority have suffered alteration in some
                                                        form, by injected humour, or randomised words which don't look
                                                        even slightly believable.
                                                    </p>
                                                </div>
                                                <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                                                    <div className="d-flex flex-row align-items-center mb-1">
                                                        <h4 className="mb-1 me-1">{item.price}</h4>
                                                        <span className="text-danger">
                                                            <s>{item.price}</s>
                                                        </span>
                                                    </div>
                                                    <h6 className="text-success">Free shipping</h6>
                                                    <div className="d-flex flex-column mt-4">
                                                        <button className="btn btn-primary btn-sm" type="button">
                                                            Details
                                                        </button>
                                                        <button
                                                            className="btn btn-outline-primary btn-sm mt-2"
                                                            type="button"
                                                        >
                                                            Add to wishlist
                                                        </button>
                                                        <button
                                                            className="btn btn-outline-primary btn-sm mt-2"
                                                            type="button"
                                                            onClick={() => DeleteProduct(item._id)}
                                                        >
                                                            Delete
                                                        </button>
                                                        <Link to={"/update/" + item._id}>update</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : <div><h1>No Result Found</h1></div>
                    }
                </div>
            </section>
        </>
    );
}
export default ProductList;
