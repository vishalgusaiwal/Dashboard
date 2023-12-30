import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const UpdateProduct = () => {
    const [cmpName, setcmpName] = useState('');
    const [modelNo, setmodelNo] = useState('');
    const [priceRa, setpriceRa] = useState('');
    const params = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        console.warn(params);
        if (params.id === "-1") {
            navigate("/");
        } else {
            getProductDetailsById();
        }
        //getProductDetailsById();
    }, []);
    const getProductDetailsById = async () => {
        let result = await fetch(`http://localhost:5020/product/${params.id}`, {
            headers: {
                authorization: "bearer " + JSON.parse(localStorage.getItem("auth"))
            }
        });
        result = await result.json();
        console.warn(result);
        setcmpName(result.company);
        setmodelNo(result.model);
        setpriceRa(result.price);
    }
    const UpdateProducts = async () => {
        let result = await fetch(`http://localhost:5020/products/${params.id}`, {
            method: 'put',
            body: JSON.stringify({
                model: modelNo,
                price: priceRa,
                company: cmpName
            }),
            headers: {
                'Content-type': 'application/json',
                authorization: "bearer " + JSON.parse(localStorage.getItem("auth"))
            }
        });
        result = await result.json();
        console.warn(JSON.stringify(result));
        if (result.modifiedCount == undefined) console.warn("Failed to Update");
        else navigate("/");
    }
    return (
        <div className="container py-5">
            <h1>Update Product</h1>
            <div className="from_div">
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Model Number</label>
                    <input
                        value={modelNo}
                        onChange={(e) => setmodelNo(e.target.value)}
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter Model Number"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="PriceControl">Price</label>
                    <input
                        value={priceRa}
                        onChange={(e) => setpriceRa(e.target.value)}
                        type="text"
                        className="form-control"
                        id="PriceControl"
                        aria-describedby="emailHelp"
                        placeholder="Enter Price"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="CompanyName">Company Name</label>
                    <input
                        value={cmpName}
                        onChange={(e) => setcmpName(e.target.value)}
                        type="text"
                        className="form-control"
                        id="CompanyName"
                        aria-describedby="emailHelp"
                        placeholder="Enter Company Name"
                    />
                </div>
                <button type="submit" className="btn btn-primary" onClick={UpdateProducts}>Submit</button>
            </div>
        </div>
    );
}

export default UpdateProduct;