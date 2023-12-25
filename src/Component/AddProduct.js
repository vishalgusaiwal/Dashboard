import React, { useState } from 'react';

const AddProduct = () => {
    const [cmpName, setcmpName] = useState('');
    const [modelNo, setmodelNo] = useState('');
    const [priceRa, setpriceRa] = useState('');
    const [error, setError] = useState(false);
    const productAdd = async () => {
        if (!modelNo || !priceRa || !cmpName) {
            setError(true);
            return false;
        }
        let result = await fetch("http://localhost:5020/add-product", {
            method: 'post',
            body: JSON.stringify({
                model: modelNo,
                price: priceRa,
                company: cmpName,
                productID: JSON.parse(localStorage.getItem("user"))._id
            }),
            headers: {
                'Content-type': 'application/json'
            }
        });
        result = await result.json();
        console.warn(JSON.stringify(result));
    }
    return (
        <div>
            <h1>List your product and get high sell</h1>
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
                    {
                        error && !modelNo && <small id="emailHelp" className="form-text text-danger">
                            Please Enter a valid model number.
                        </small>
                    }
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
                    {
                        error && !priceRa && <small id="priceHelp" className="form-text text-danger">
                            Please Enter a valid price.
                        </small>
                    }
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
                    {
                        error && !cmpName && <small id="companyHelp" className="form-text text-danger">
                            Please Enter a valid company name.
                        </small>
                    }
                </div>
                <button type="submit" className="btn btn-primary" onClick={productAdd}>Submit</button>
            </div>
        </div>
    );
}

export default AddProduct;